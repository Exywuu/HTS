import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

const port = 4187;
const base = `http://127.0.0.1:${port}`;
let server;
let serverOutput = '';

before(async () => {
  server = spawn(process.execPath, ['server.mjs'], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] });
  server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
  server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });
  const started = await Promise.race([
    once(server.stdout, 'data').then(() => true),
    once(server, 'exit').then(code => { throw new Error(`Serveur fermé (${code}) : ${serverOutput}`); }),
    delay(5000).then(() => { throw new Error(`Délai dépassé : ${serverOutput}`); })
  ]);
  assert.ok(started);
});

after(() => { if (server && !server.killed) server.kill(); });

test('la page principale expose clairement les trois modes et le caractère fictif', async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Concept indépendant/);
  assert.match(html, /Traversée/);
  assert.match(html, /Forge des échos/);
  assert.match(html, /Accès direct/);
  assert.match(html, /aucun billet réel/i);
  assert.match(html, /prefers-reduced-motion|styles\.css/);
});

test('les ressources statiques locales sont servies sans erreur', async () => {
  for (const [path, type] of [['/styles.css', 'text/css'], ['/app.js', 'text/javascript'], ['/assets/mark.svg', 'image/svg+xml']]) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    assert.ok(response.headers.get('content-type').startsWith(type), path);
    assert.ok((await response.text()).length > 100, path);
  }
});

test('le serveur rejette un chemin sortant du dossier du prototype', async () => {
  const response = await fetch(`${base}/%2e%2e%2fpackage.json`);
  assert.equal(response.status, 403);
});

test('les ressources absentes répondent 404 et le serveur ne divulgue pas d’erreur', async () => {
  const response = await fetch(`${base}/missing.txt`);
  assert.equal(response.status, 404);
  assert.equal(await response.text(), 'Fichier introuvable');
});
