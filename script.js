/* Ícones (traço simples) */
const ICONES = {
  folha:'<path d="M7 25C7 13 15 6 26 6c0 11-7 19-19 19z"/><path d="M7 25l11-11"/>',
  sol:'<circle cx="16" cy="16" r="5"/><path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M7.5 24.5l2-2M22.5 9.5l2-2"/>',
  chocolate:'<rect x="8" y="5" width="16" height="22" rx="2"/><path d="M8 12h16M8 19h16M16 5v22"/>',
  entardecer:'<path d="M9 21a7 7 0 0 1 14 0"/><path d="M4 21h24M7 26h18M16 8v3M8 13l2 2M24 13l-2 2"/>',
  xicara:'<path d="M6 13h16v6a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z"/><path d="M22 15h2a3 3 0 0 1 0 6h-2"/><path d="M11 9c0-2 2-2 2-4M16 9c0-2 2-2 2-4"/>',
  pin:'<path d="M16 28s9-8 9-15a9 9 0 0 0-18 0c0 7 9 15 9 15z"/><circle cx="16" cy="13" r="3"/>',
  casa:'<path d="M5 15L16 6l11 9"/><path d="M8 13v13h16V13"/><path d="M13 26v-7h6v7"/>',
  coracao:'<path d="M16 26s-10-6-10-13a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 7-10 13-10 13z"/>',
  musica:'<path d="M12 23V7l13-3v16"/><circle cx="9" cy="23" r="3"/><circle cx="22" cy="20" r="3"/>',
  livro:'<path d="M4 7h9a3 3 0 0 1 3 3v16a3 3 0 0 0-3-3H4z"/><path d="M28 7h-9a3 3 0 0 0-3 3v16a3 3 0 0 1 3-3h9z"/>',
  pessoas:'<circle cx="11" cy="11" r="4"/><circle cx="22" cy="12" r="3"/><path d="M4 26c0-4 3-7 7-7s7 3 7 7M18 26c0-3 2-5 4-5s5 2 5 5"/>',
  chuva:'<path d="M9 18a6 6 0 1 1 3-11 7 7 0 0 1 13 4 4 4 0 0 1-1 7z"/><path d="M11 22l-1 3M17 22l-1 3M23 22l-1 3"/>',
  estrela:'<path d="M16 5l3.2 6.6 7.3 1-5.3 5.1 1.3 7.3L16 21.5 9.5 25l1.3-7.3-5.3-5.1 7.3-1z"/>',
  onda:'<path d="M3 13c3-2 5-2 8 0s5 2 8 0 5-2 8 0"/><path d="M3 20c3-2 5-2 8 0s5 2 8 0 5-2 8 0"/>'
};

/*
  Cada opção soma ponto para uma fragrância da linha Ekos Frescor,
  sem revelar o nome para quem responde:
  andiroba (amadeirado, natureza), pitanga (solar, alegre), cacau (doce, partilha),
  maracuja (calma), castanha (aconchego), acai (energia, aventura).
*/
const PERGUNTAS = [
  {
    titulo:'Onde suas melhores <em>lembranças</em> costumam acontecer?',
    apoio:'Escolha o cenário que mais aparece quando você fecha os olhos.',
    opcoes:[
      {f:'andiroba',ic:'folha',t:'No meio do verde',s:'Trilha, mato e cheiro de chuva na terra'},
      {f:'pitanga',ic:'sol',t:'Debaixo do sol',s:'Quintal, praia ou qualquer lugar ao ar livre'},
      {f:'cacau',ic:'pessoas',t:'Em volta da mesa',s:'Gente querida dividindo algo gostoso'},
      {f:'maracuja',ic:'livro',t:'Num canto só meu',s:'Silêncio, um livro e tempo de sobra'},
      {f:'castanha',ic:'casa',t:'Em casa',s:'Sofá, cobertor e o barulho da cozinha'},
      {f:'acai',ic:'pin',t:'Na estrada',s:'Lugares novos a cada parada'}
    ]
  },
  {
    titulo:'Qual momento você<br>gostaria de <em>reviver?</em>',
    apoio:'Escolha a lembrança que mais combina com você. Deslize para ver todas.',
    opcoes:[
      {f:'andiroba',ic:'folha',t:'Caminho entre árvores',s:'Silêncio, ar fresco e natureza por perto'},
      {f:'pitanga',ic:'sol',t:'Verão no quintal',s:'Tardes livres, pé no chão e risadas'},
      {f:'cacau',ic:'chocolate',t:'Pequenos prazeres',s:'Um chocolate dividido e alguém por perto'},
      {f:'maracuja',ic:'entardecer',t:'Calma de fim de tarde',s:'Um momento só seu, sem pressa'},
      {f:'castanha',ic:'xicara',t:'Abraço quentinho',s:'Dia frio, cobertor e conversa boa'},
      {f:'acai',ic:'pin',t:'Uma aventura marcante',s:'Lugares novos e gente pelo caminho'}
    ]
  },
  {
    titulo:'O que deixa uma lembrança <em>inesquecível?</em>',
    apoio:'Pense no detalhe que faz você voltar a ela.',
    opcoes:[
      {f:'andiroba',ic:'chuva',t:'O cheiro do lugar',s:'Madeira, folhas e terra molhada'},
      {f:'pitanga',ic:'musica',t:'A trilha sonora',s:'Aquela música que tocava alto'},
      {f:'cacau',ic:'coracao',t:'Um carinho inesperado',s:'Um gesto pequeno que adoçou o dia'},
      {f:'maracuja',ic:'onda',t:'A sensação de paz',s:'O corpo leve e a cabeça tranquila'},
      {f:'castanha',ic:'pessoas',t:'Quem estava junto',s:'Família, amigos e muita conversa'},
      {f:'acai',ic:'estrela',t:'A primeira vez',s:'Coragem de fazer algo novo'}
    ]
  },
  {
    titulo:'Que sensação você quer <em>levar com você?</em>',
    apoio:'A última escolha revela a sua memória.',
    opcoes:[
      {f:'andiroba',ic:'folha',t:'Equilíbrio',s:'Pés no chão e mente em ordem'},
      {f:'pitanga',ic:'sol',t:'Alegria',s:'Leveza para sorrir à toa'},
      {f:'cacau',ic:'chocolate',t:'Doçura',s:'Um momento bom para saborear devagar'},
      {f:'maracuja',ic:'entardecer',t:'Tranquilidade',s:'Respirar fundo e desacelerar'},
      {f:'castanha',ic:'casa',t:'Aconchego',s:'Sentir que está em casa'},
      {f:'acai',ic:'pin',t:'Energia',s:'Vontade de ir mais longe'}
    ]
  }
];

const RESULTADOS = {
  cacau:{titulo:'Doces <em>momentos</em>',texto:'Você guarda os momentos leves e gostosos: o chocolate dividido, a conversa que se estende, o carinho que chega sem motivo. Para você, lembrar é saborear de novo.',tags:['Leveza','Partilha','Pequenos prazeres']},
  andiroba:{titulo:'Raízes <em>verdes</em>',texto:'Suas lembranças moram ao ar livre: o cheiro da mata, o silêncio entre as árvores, o chão firme. Para você, lembrar é voltar a respirar fundo.',tags:['Natureza','Equilíbrio','Silêncio']},
  pitanga:{titulo:'Dias de <em>sol</em>',texto:'Você coleciona tardes de verão, risadas altas e pés descalços. Para você, lembrar é sentir o calor de um dia feliz outra vez.',tags:['Alegria','Verão','Liberdade']},
  maracuja:{titulo:'Pausas <em>serenas</em>',texto:'Você guarda os momentos de calma: o fim de tarde sem pressa, o tempo só seu. Para você, lembrar é desacelerar.',tags:['Calma','Pausa','Bem-estar']},
  castanha:{titulo:'Abraço de <em>casa</em>',texto:'Suas memórias têm cheiro de casa: cobertor, cozinha cheia e conversa boa. Para você, lembrar é sentir-se acolhido.',tags:['Aconchego','Família','Conforto']},
  acai:{titulo:'Caminhos <em>novos</em>',texto:'Você guarda as primeiras vezes, as estradas e as pessoas que cruzaram seu caminho. Para você, lembrar é ter vontade de ir mais longe.',tags:['Aventura','Energia','Descoberta']}
};

/* Estado */
let atual = 0;
const respostas = new Array(PERGUNTAS.length).fill(null);
const $ = id => document.getElementById(id);
const trilho = $('trilho');

function mostrarPergunta(){
  const q = PERGUNTAS[atual];
  $('contador').textContent = `Pergunta ${atual+1} de ${PERGUNTAS.length}`;
  $('barra').style.width = `${(atual+1)/PERGUNTAS.length*100}%`;
  $('pergunta').innerHTML = q.titulo;
  $('apoio').textContent = q.apoio;
  trilho.innerHTML = q.opcoes.map((o,i)=>`
    <button class="op entrar${respostas[atual]===i?' sel':''}" role="radio" aria-checked="${respostas[atual]===i}" data-i="${i}" style="animation-delay:${i*50}ms">
      <span class="ic"><svg viewBox="0 0 32 32" aria-hidden="true">${ICONES[o.ic]}</svg></span>
      <span><b>${o.t}</b><small>${o.s}</small></span>
    </button>`).join('');
  trilho.scrollLeft = 0;
  $('avancar').disabled = respostas[atual]===null;
  $('avancar').innerHTML = atual===PERGUNTAS.length-1 ? 'Ver meu resultado &nbsp;→' : 'Próxima pergunta &nbsp;→';
  atualizarDots();
}

trilho.addEventListener('click', e=>{
  const b = e.target.closest('.op'); if(!b) return;
  respostas[atual] = +b.dataset.i;
  trilho.querySelectorAll('.op').forEach(el=>{
    const on = el===b; el.classList.toggle('sel',on); el.setAttribute('aria-checked',on);
  });
  $('avancar').disabled = false;
});

/* Carrossel */
function passo(){ const c = trilho.querySelector('.op'); return c ? c.offsetWidth + 28 : 348; }
$('ant').onclick = ()=> trilho.scrollBy({left:-passo()*2,behavior:'smooth'});
$('prox').onclick = ()=> trilho.scrollBy({left:passo()*2,behavior:'smooth'});
function atualizarDots(){
  const max = trilho.scrollWidth - trilho.clientWidth;
  const paginas = max > 4 ? 3 : 1;
  const ativa = max > 4 ? Math.round(trilho.scrollLeft / max * (paginas-1)) : 0;
  $('dots').innerHTML = Array.from({length:paginas},(_,i)=>`<i class="${i===ativa?'on':''}"></i>`).join('');
  $('ant').hidden = $('prox').hidden = paginas===1;
}
trilho.addEventListener('scroll', ()=> requestAnimationFrame(atualizarDots));
window.addEventListener('resize', atualizarDots);

/* Navegação */
$('comecar').onclick = ()=>{
  $('quiz').hidden = false; $('resultado').hidden = true;
  atual = 0; mostrarPergunta();
  $('quiz').scrollIntoView({behavior:'smooth'});
};
$('voltar').onclick = ()=>{
  if(atual===0){ $('inicio').scrollIntoView({behavior:'smooth'}); return; }
  atual--; mostrarPergunta();
};
$('avancar').onclick = ()=>{
  if(respostas[atual]===null) return;
  if(atual < PERGUNTAS.length-1){ atual++; mostrarPergunta(); $('quiz').scrollIntoView({behavior:'smooth'}); }
  else mostrarResultado();
};
$('refazer').onclick = ()=>{ respostas.fill(null); $('comecar').click(); };

function calcular(){
  const pontos = {};
  respostas.forEach((r,i)=>{ const f = PERGUNTAS[i].opcoes[r].f; pontos[f] = (pontos[f]||0)+1; });
  const maior = Math.max(...Object.values(pontos));
  // Em caso de empate, Cacau tem prioridade (fragrância destaque da campanha)
  if(pontos.cacau===maior) return 'cacau';
  return Object.keys(pontos).find(f=>pontos[f]===maior);
}

function mostrarResultado(){
  const chave = calcular(), r = RESULTADOS[chave];
  $('r-titulo').innerHTML = r.titulo;
  $('r-texto').textContent = r.texto;
  $('r-tags').innerHTML = r.tags.map(t=>`<span>${t}</span>`).join('');
  if(chave==='cacau'){
    $('p-rotulo').textContent = 'O aroma da sua memória';
    $('p-texto').textContent = 'Notas cítricas adocicadas e a cremosidade do cacau da Amazônia, para deixar os próximos momentos ainda mais doces.';
  } else {
    $('p-rotulo').textContent = 'Para criar novas lembranças';
    $('p-texto').textContent = 'Notas cítricas adocicadas e a cremosidade do cacau da Amazônia: um aroma para transformar os próximos momentos em memórias doces.';
  }
  const titulo = r.titulo.replace(/<[^>]+>/g,'');
  const msg = `Minha memória é "${titulo}". Descubra a sua em Desperte suas memórias:`;
  $('whats').href = 'https://wa.me/?text=' + encodeURIComponent(msg + ' ' + location.href);
  $('compartilhar').onclick = async ()=>{
    if(navigator.share){ try{ await navigator.share({title:'Desperte suas memórias',text:msg,url:location.href}); }catch(e){} }
    else copiar();
  };
  $('resultado').hidden = false;
  $('resultado').scrollIntoView({behavior:'smooth'});
}

async function copiar(){
  try{ await navigator.clipboard.writeText(location.href); aviso('Link copiado!'); }
  catch(e){ aviso('Não foi possível copiar o link.'); }
}
$('copiar').onclick = copiar;
function aviso(t){ const el=$('toast'); el.textContent=t; el.classList.add('on'); setTimeout(()=>el.classList.remove('on'),2200); }
