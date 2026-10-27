const chapters = [
  {id:'braise',sigil:'✳',kicker:'SEUIL DU SUD',title:'La braise<br>qui rassemble.',body:'On ne se souvient pas du premier feu. On se souvient de celles et ceux qui se sont approchés. Ici, le territoire commence par un cercle, pas par une scène.',quote:'« La chaleur circule. Elle ne se possède pas. »',time:'À lire en 40 secondes'},
  {id:'echo',sigil:'≈',kicker:'CHAMBRE DES RÉSONANCES',title:'L’écho<br>qui demeure.',body:'Une note s’efface, mais le lieu continue de vibrer. Les parois gardent en mémoire les voix de celles et ceux qui se sont tus ensemble.',quote:'« Ce qui résonne n’a pas besoin d’être fort. »',time:'À lire en 35 secondes'},
  {id:'fer',sigil:'⌁',kicker:'ATELIER DES MATIÈRES',title:'Le fer<br>qui cède.',body:'Sous la main, la matière raconte le geste. Ici, rien n’est immobile : la forme change avec la pression, la patience et le travail des autres.',quote:'« La force n’est pas l’absence de faille. »',time:'À lire en 30 secondes'},
  {id:'veilleurs',sigil:'◉',kicker:'PLACE DES VEILLEURS',title:'La nuit<br>qui écoute.',body:'Tout ralentit à l’approche du matin. Le dernier territoire n’attend pas un grand final : il laisse simplement la place au silence partagé.',quote:'« Écouter est aussi une manière d’être là. »',time:'À lire en 45 secondes'}
];
const chapterById = Object.fromEntries(chapters.map((c,i)=>[c.id,i]));
let currentChapter = 0;
function showChapter(index){
  currentChapter=(index+chapters.length)%chapters.length;
  const c=chapters[currentChapter];
  document.querySelectorAll('.territory-node').forEach((button)=>{
    const active=button.dataset.chapter===c.id;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  document.querySelector('#chapter-number').textContent=`FRAGMENT ${String(currentChapter+1).padStart(2,'0')} / 04`;
  document.querySelector('#chapter-sigil').textContent=c.sigil;
  document.querySelector('#chapter-kicker').textContent=c.kicker;
  document.querySelector('#chapter-title').innerHTML=c.title;
  document.querySelector('#chapter-body').textContent=c.body;
  document.querySelector('#chapter-quote').textContent=c.quote;
  document.querySelector('#chapter-duration').textContent=c.time;
  const card=document.querySelector('.chapter-card');
  card.dataset.fragment=c.id;
}
document.querySelectorAll('.territory-node').forEach((button)=>button.addEventListener('click',()=>showChapter(chapterById[button.dataset.chapter])));
document.querySelector('#next-chapter').addEventListener('click',()=>showChapter(currentChapter+1));

const menuToggle=document.querySelector('.menu-toggle');
const primaryNav=document.querySelector('#primary-nav');
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.querySelector('.sr-only').textContent=open?'Fermer le menu':'Ouvrir le menu';
  primaryNav.classList.toggle('is-open',open);
});
primaryNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.querySelector('.sr-only').textContent='Ouvrir le menu';
  primaryNav.classList.remove('is-open');
}));

const forceCopy={
  braise:{name:'Braise',short:'CHALEUR PARTAGÉE',intro:'Commencez près du cercle. Laissez la chaleur ouvrir la marche, sans jamais vous presser.',color:'#d4ff55'},
  onde:{name:'Onde',short:'VIBRATION LENTE',intro:'Suivez les vibrations jusque dans les chambres calmes. Gardez un espace pour l’écoute.',color:'#70d9cf'},
  acier:{name:'Acier',short:'MATIÈRE QUI RÉPOND',intro:'Entrez par l’atelier. Touchez les formes, observez leurs traces et laissez une place au geste collectif.',color:'#aeb9cd'},
  veille:{name:'Veille',short:'PAUSE ATTENTIVE',intro:'Commencez là où la lumière baisse. Ce parcours laisse du temps entre chaque fragment.',color:'#efb2c6'},
  foudre:{name:'Foudre',short:'ÉLAN SANS DÉTOUR',intro:'Ouvrez la route par un seuil direct. Une traversée brève qui privilégie le mouvement.',color:'#ef7b47'},
  terre:{name:'Terre',short:'PAS QUI ANCRE',intro:'Prenez le sentier bas. Faites une place au repos et gardez les deux pieds dans le présent.',color:'#ccaa79'}
};
const forceInputs=[...document.querySelectorAll('input[name="force"]')];
const composeButton=document.querySelector('#compose-card');
const choiceCount=document.querySelector('#choice-count');
const forgeHint=document.querySelector('#forge-hint');
function selectedForces(){return forceInputs.filter(input=>input.checked).map(input=>input.value)}
function updateForces(){
  const chosen=selectedForces();
  choiceCount.textContent=`${chosen.length} force${chosen.length>1?'s':''} sur 3 choisie${chosen.length>1?'s':''}`;
  composeButton.disabled=chosen.length!==3;
  forgeHint.textContent=chosen.length===3?'Vos trois forces sont prêtes. Composez votre carte.':chosen.length>3?'Trois forces suffisent.':'Sélectionnez trois forces pour composer votre fragment.';
  forceInputs.forEach(input=>{input.disabled=!input.checked&&chosen.length>=3;});
}
forceInputs.forEach(input=>input.addEventListener('change',updateForces));
composeButton.addEventListener('click',()=>{
  const chosen=selectedForces();
  if(chosen.length!==3)return;
  const [first,second,third]=chosen.map(key=>forceCopy[key]);
  const title=document.querySelector('#relic-title');
  const description=document.querySelector('#relic-description');
  const tags=document.querySelector('#relic-tags');
  const card=document.querySelector('#relic-card');
  const art=document.querySelector('#relic-art');
  title.innerHTML=`${first.name} · ${second.name}<br>& ${third.name}.`;
  description.textContent=first.intro;
  tags.innerHTML=chosen.map(key=>`<span>${forceCopy[key].short}</span>`).join('');
  art.style.setProperty('--relic-a',first.color);
  art.style.setProperty('--relic-b',second.color);
  art.style.setProperty('--relic-c',third.color);
  art.style.background=`radial-gradient(circle at 48% 48%, ${first.color} 0 5%, transparent 6%), radial-gradient(ellipse at 25% 20%, ${second.color}88, transparent 54%), radial-gradient(ellipse at 75% 80%, ${third.color}88, transparent 58%), #171916`;
  art.querySelector('.relic-orb').style.background=`linear-gradient(140deg,${first.color},${second.color},${third.color})`;
  card.classList.add('is-composed');
  card.setAttribute('data-generated','true');
  forgeHint.textContent='Votre fragment est composé ici. Il n’est ni enregistré ni transmis.';
});
document.querySelector('#reset-forge').addEventListener('click',()=>{
  forceInputs.forEach(input=>{input.checked=false;input.disabled=false;});
  updateForces();
  const title=document.querySelector('#relic-title');
  title.innerHTML='Votre fragment<br>commence ici.';
  document.querySelector('#relic-description').textContent='Choisissez trois forces. Une composition singulière apparaîtra dans cet espace, sans rien quitter de votre appareil.';
  document.querySelector('#relic-tags').innerHTML='<span>FRAGMENT À VENIR</span>';
  const art=document.querySelector('#relic-art');
  art.removeAttribute('style');
  art.querySelector('.relic-orb').removeAttribute('style');
  const card=document.querySelector('#relic-card');
  card.classList.remove('is-composed');
  card.removeAttribute('data-generated');
  forgeHint.textContent='Sélectionnez trois forces pour composer votre fragment.';
});

const schedules={
  day1:[['16:00','OUVERTURE · RITUEL IMAGINÉ','Le seuil des braises','Cercle bas'],['18:30','PARCOURS LIBRE','La marche des échos','Sentier d’ardoise'],['21:00','VEILLÉE · SANS ARTISTE RÉEL','Ce que la nuit retient','Clairière fictive'],['23:15','FIN DOUCE','Le dernier feu partagé','Place des Veilleurs']],
  day2:[['15:30','OUVERTURE · FICTION','L’atelier qui respire','Forge imaginaire'],['17:45','PARCOURS LIBRE','Les matières en mouvement','Sentier du Fer'],['20:30','VEILLÉE · SANS ARTISTE RÉEL','Une onde sous la terre','Chambre des échos'],['22:45','PAUSE PARTAGÉE','Le cercle des voix basses','Place des Veilleurs']],
  day3:[['14:00','OUVERTURE · FICTION','Le pas des retrouvailles','Porte des terres'],['16:15','PARCOURS ACCESSIBLE','La carte à hauteur de main','Sentier bas'],['19:00','VEILLÉE · SANS ARTISTE RÉEL','Ce qui reste quand tout s’arrête','Clairière fictive'],['21:30','CLÔTURE IMAGINÉE','Le feu retourne au sol','Cercle bas']]
};
const tabs=[...document.querySelectorAll('.day-tabs [role="tab"]')];
function showDay(day,focus=false){
  const tab=tabs.find(t=>t.dataset.day===day);
  if(!tab)return;
  tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
  const panel=document.querySelector('#schedule-panel');
  panel.setAttribute('aria-labelledby',tab.id);
  panel.innerHTML=schedules[day].map(([time,type,name,place])=>`<div class="schedule-item"><time>${time}</time><div><span class="schedule-type">${type}</span><strong>${name}</strong></div><span class="schedule-place">${place}</span></div>`).join('');
  if(focus)tab.focus();
}
tabs.forEach(tab=>tab.addEventListener('click',()=>showDay(tab.dataset.day)));
document.querySelector('.day-tabs').addEventListener('keydown',event=>{
  const current=tabs.indexOf(document.activeElement);
  if(current<0)return;
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
    event.preventDefault();
    const direction=event.key==='ArrowRight'?1:-1;
    const next=(current+direction+tabs.length)%tabs.length;
    showDay(tabs[next].dataset.day,true);
  }
});

const ticketDialog=document.querySelector('#ticket-dialog');
document.querySelector('#open-ticket').addEventListener('click',()=>ticketDialog.showModal());
function closeDialog(){if(ticketDialog.open)ticketDialog.close();}
document.querySelector('#close-ticket').addEventListener('click',closeDialog);
document.querySelector('#dismiss-ticket').addEventListener('click',closeDialog);
ticketDialog.addEventListener('click',event=>{if(event.target===ticketDialog)closeDialog();});
