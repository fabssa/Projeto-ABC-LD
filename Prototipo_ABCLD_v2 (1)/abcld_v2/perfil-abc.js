/* ═══════════════════════════════════════════════════════
   ABC-LD — perfil-abc.js
   Versão com Supabase (Fase 2)
   ─────────────────────────────────────────────────────
   ✏️  ÚNICA MUDANÇA NECESSÁRIA: preencha as 2 linhas
       da seção "CONFIGURAÇÃO SUPABASE" abaixo.
═══════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════
   ✏️  CONFIGURAÇÃO SUPABASE  ← EDITE AQUI
══════════════════════════════════════════════════════ */
var SUPA_URL = 'https://ciiisnumuteuasufelcu.supabase.co'; // ex: https://xyzabc.supabase.co
var SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaWlzbnVtdXRldWFzdWZlbGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTc0NTcsImV4cCI6MjA5MjI5MzQ1N30.t7uysVLtmnwM1R-eV--F9QDoqRVlXD3wgh4F7klsqtE';  // chave anon/public do projeto
/* ══════════════════════════════════════════════════════ */

var TYPES = ['acquisition','investigation','practice','production','discussion','collaboration'];

var META = {
  acquisition:   {icon:'📖', name:'Aquisição',    color:'#f5a623'},
  investigation: {icon:'🔍', name:'Investigação', color:'#5ec48b'},
  practice:      {icon:'⚙️', name:'Prática',      color:'#5b9cf6'},
  production:    {icon:'🛠️', name:'Produção',     color:'#e05656'},
  discussion:    {icon:'💬', name:'Discussão',    color:'#c97ef5'},
  collaboration: {icon:'🤝', name:'Colaboração',  color:'#f5d442'},
};

var QUESTIONS = [
  {t:'acquisition',q:'Como você prefere absorver um conteúdo novo pela primeira vez?',opts:[{label:'📺 Assistir a um vídeo ou palestra explicativa',score:5},{label:'📚 Ler um texto ou artigo com calma',score:5},{label:'🎙️ Ouvir um podcast enquanto me movimento',score:4},{label:'🧪 Já tentar fazer e aprender no processo',score:1}]},
  {t:'acquisition',q:'Quando estudo, o que mais me ajuda a fixar o conteúdo?',opts:[{label:'📝 Anotar e resumir o que foi explicado',score:5},{label:'🖼️ Desenhar diagramas e mapas visuais',score:4},{label:'🔁 Repetir em voz alta ou explicar para alguém',score:3},{label:'🏃 Caminhar ou gesticular enquanto reviso',score:2}]},
  {t:'acquisition',q:'Qual recurso você escolheria para aprender algo novo no seu ritmo?',opts:[{label:'🎧 Audiobook ou podcast aprofundado',score:5},{label:'📊 Infográfico ou slides bem organizados',score:4},{label:'🤝 Conversa guiada com um especialista',score:3},{label:'⚙️ Tutorial interativo com exercícios práticos',score:2}]},
  {t:'investigation',q:'Diante de um problema complexo, o que você faz primeiro?',opts:[{label:'🔎 Coleto dados e analiso antes de qualquer ação',score:5},{label:'🌐 Busco referências e comparo diferentes fontes',score:5},{label:'🗣️ Discuto com alguém para levantar hipóteses',score:3},{label:'⚡ Já começo a testar soluções na prática',score:1}]},
  {t:'investigation',q:'O que mais te motiva em um projeto de aprendizagem?',opts:[{label:'🔬 Investigar causas e padrões escondidos nos dados',score:5},{label:'🗺️ Mapear visualmente as conexões entre conceitos',score:4},{label:'🏗️ Construir algo concreto que resolva um problema',score:2},{label:'🎭 Explorar o tema por meio de histórias e exemplos',score:3}]},
  {t:'investigation',q:'Quando algo não faz sentido para você, qual é sua reação natural?',opts:[{label:'📡 Pesquiso mais fontes até encontrar uma explicação',score:5},{label:'🧩 Tento encaixar o conceito num esquema visual',score:4},{label:'💬 Pergunto para alguém que possa explicar diferente',score:3},{label:'🛠️ Experimento na prática até entender',score:2}]},
  {t:'practice',q:'Qual formato de atividade faz você aprender mais rápido?',opts:[{label:'🏋️ Exercícios práticos e simulações repetidas',score:5},{label:'🎮 Desafios com feedback imediato de acerto/erro',score:5},{label:'📊 Análise de casos reais com dados concretos',score:3},{label:'📖 Estudo aprofundado do material teórico',score:1}]},
  {t:'practice',q:'Como você reage quando erra numa atividade?',opts:[{label:'🔄 Refaço imediatamente tentando corrigir o erro',score:5},{label:'🧠 Reflito sozinho sobre o que errei antes de tentar de novo',score:4},{label:'💬 Peço explicação de alguém antes de recomeçar',score:2},{label:'📚 Volto ao material para reler o trecho relacionado',score:2}]},
  {t:'practice',q:'Em qual tipo de aula você se sente mais presente e engajado?',opts:[{label:'⚙️ Laboratório ou oficina com atividade manual',score:5},{label:'🎯 Simulação ou jogo que exige decisão rápida',score:5},{label:'🖥️ Estudo de caso com análise em grupo',score:3},{label:'🎤 Aula expositiva com espaço para perguntas',score:1}]},
  {t:'production',q:'Se precisasse mostrar que domina um assunto, o que preferiria entregar?',opts:[{label:'🛠️ Um projeto ou protótipo que eu desenvolvi',score:5},{label:'🎤 Uma apresentação criativa para a turma',score:4},{label:'📜 Um texto analítico ou relatório detalhado',score:3},{label:'🧩 Um mapa mental ou painel visual explicativo',score:3}]},
  {t:'production',q:'O que mais te dá sensação de aprendizado completo?',opts:[{label:'🏗️ Ter construído algo do zero com as minhas mãos',score:5},{label:'🎨 Ter criado algo visualmente expressivo sobre o tema',score:4},{label:'📣 Ter explicado e ensinado o conteúdo para outros',score:4},{label:'📋 Ter documentado tudo que aprendi de forma organizada',score:3}]},
  {t:'production',q:'Como você prefere registrar e compartilhar o que aprendeu?',opts:[{label:'🎬 Criando um vídeo, podcast ou conteúdo multimídia',score:5},{label:'📐 Desenvolvendo um produto ou sistema funcional',score:5},{label:'✍️ Escrevendo um artigo, post ou resumo elaborado',score:3},{label:'🗂️ Montando uma apresentação de slides organizada',score:3}]},
  {t:'discussion',q:'Em qual situação você sente que aprende mais profundamente?',opts:[{label:'💬 Num debate onde preciso defender e questionar ideias',score:5},{label:'🎭 Numa dinâmica onde enceno ou simulo situações',score:4},{label:'📖 Lendo e refletindo sozinho sobre o tema',score:1},{label:'⚙️ Resolvendo exercícios individualmente no meu ritmo',score:1}]},
  {t:'discussion',q:'Como você prefere organizar suas ideias sobre algo que está estudando?',opts:[{label:'🗣️ Conversando em voz alta com alguém para pensar junto',score:5},{label:'✍️ Escrevendo meus pensamentos num diário ou caderno',score:3},{label:'🖼️ Desenhando um esquema visual das ideias',score:3},{label:'🎵 Associando o conteúdo a músicas ou ritmos que conheço',score:2}]},
  {t:'discussion',q:'O que mais te ajuda a consolidar uma opinião sobre um assunto?',opts:[{label:'🤔 Ouvir perspectivas diferentes e refletir sobre elas',score:5},{label:'📊 Analisar dados e evidências de forma lógica',score:4},{label:'🌿 Observar exemplos reais do mundo ao redor',score:3},{label:'🎯 Testar as ideias na prática e ver os resultados',score:2}]},
  {t:'collaboration',q:'Como você prefere trabalhar em projetos de aprendizagem?',opts:[{label:'🤝 Em grupo, trocando ideias e dividindo responsabilidades',score:5},{label:'👥 Com um parceiro, alternando tarefas',score:4},{label:'👤 Sozinho, mas compartilhando resultados depois',score:2},{label:'🧑‍🏫 Seguindo orientações individuais de um mentor',score:1}]},
  {t:'collaboration',q:'O que mais te motiva quando você faz parte de uma equipe?',opts:[{label:'💡 Ajudar colegas a entender algo que eu já domino',score:5},{label:'🎯 Trabalhar junto num desafio prático difícil',score:4},{label:'🗺️ Construir coletivamente um produto ou solução visual',score:4},{label:'📣 Apresentar juntos algo que criamos em grupo',score:3}]},
  {t:'collaboration',q:'Como você se sente trabalhando com pessoas de perfis diferentes do seu?',opts:[{label:'🌍 Me enriquece muito — cada um traz uma inteligência diferente',score:5},{label:'⚡ Me desafia e me faz crescer, mesmo que seja difícil',score:4},{label:'⚖️ Funciona se tivermos papéis bem definidos',score:3},{label:'😌 Prefiro grupos mais parecidos comigo para fluir melhor',score:1}]},
];

var INSIGHTS = {
  acquisition:   {h:'Conteúdo estruturado é sua base. Aulas, leituras e vídeos são seus aliados naturais.',l:'Você aprende melhor em movimento. Busque formatos mais práticos e interativos.'},
  investigation: {h:'Você tem perfil investigativo — pesquisa, questiona e vai além do que foi apresentado.',l:'Você prefere caminhos diretos. Estrutura e orientação clara te ajudam mais.'},
  practice:      {h:'Aprender fazendo é seu forte. Exercícios e simulações fixam o conhecimento de forma eficaz.',l:'Atividades práticas podem te ajudar a consolidar o que estuda teoricamente.'},
  production:    {h:'Criar é o seu modo de aprender. Projetos e construção concreta te engajam profundamente.',l:'Produção não é sua preferência central — formatos mais guiados funcionam melhor.'},
  discussion:    {h:'Você aprende pelo diálogo. Debates e troca de ideias ativam seu pensamento crítico.',l:'Você processa melhor em silêncio. Reflexão individual é o seu ponto forte.'},
  collaboration: {h:'Equipe potencializa seu aprendizado. Dinâmicas coletivas te motivam de verdade.',l:'Você tem perfil autônomo e aprende melhor de forma independente.'},
};

/* ══════════════════════════════
   Estado global
══════════════════════════════ */
var answers             = new Array(QUESTIONS.length).fill(0);
var studentName         = '';
var currentClassId      = null;
var currentTeacherEmail = null;

/* ══════════════════════════════════════════════════════
   SUPABASE — Helper central de requisições
   Todas as chamadas ao banco passam por aqui.
══════════════════════════════════════════════════════ */
async function db(path, options) {
  var base = {
    headers: {
      'apikey': SUPA_KEY,
      'Authorization': 'Bearer ' + SUPA_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    }
  };
  var opts = Object.assign({}, base, options);
  if (options && options.headers) {
    opts.headers = Object.assign({}, base.headers, options.headers);
  }
  var res = await fetch(SUPA_URL + '/rest/v1/' + path, opts);
  var text = await res.text();
  if (!res.ok) {
    var err = {};
    try { err = JSON.parse(text); } catch(e) {}
    throw new Error(err.message || 'Erro ' + res.status);
  }
  return text ? JSON.parse(text) : null;
}

/* ══════════════════════════════
   SUPABASE — Resultados
══════════════════════════════ */
function mapResult(r) {
  return {
    id:        r.id,
    name:      r.name,
    email:     r.email,
    classId:   r.class_id,
    profile:   r.profile,
    topType:   r.top_type,
    date:      r.date,
    createdAt: r.created_at,
  };
}

async function loadResultsByClass(classId) {
  var rows = await db('results?class_id=eq.' + classId + '&select=*&order=created_at.asc') || [];
  return rows.map(mapResult);
}

async function loadResultByEmailAndClass(email, classId) {
  var rows = await db(
    'results?email=eq.' + encodeURIComponent(email) +
    '&class_id=eq.' + classId + '&select=*&limit=1'
  ) || [];
  return rows[0] ? mapResult(rows[0]) : null;
}

async function saveResult(r) {
  await db('results', {
    method: 'POST',
    body: JSON.stringify({
      name:     r.name,
      email:    r.email,
      class_id: r.classId,
      profile:  r.profile,
      top_type: r.topType,
      date:     r.date,
    })
  });
}

async function deleteResult(id) {
  await db('results?id=eq.' + id, {
    method: 'DELETE',
    headers: { 'Prefer': '' },
  });
}

async function clearClassResults(classId) {
  await db('results?class_id=eq.' + classId, {
    method: 'DELETE',
    headers: { 'Prefer': '' },
  });
}

/* ══════════════════════════════
   SUPABASE — Turmas
══════════════════════════════ */
function mapClass(c) {
  return {
    id:           c.id,
    name:         c.name,
    code:         c.code,
    teacherEmail: c.teacher_email,
    createdAt:    c.created_at,
  };
}

async function loadClassesByTeacher(teacherEmail) {
  var rows = await db(
    'classes?teacher_email=eq.' + encodeURIComponent(teacherEmail) +
    '&select=*&order=created_at.asc'
  ) || [];
  return rows.map(mapClass);
}

async function loadClassByCode(code) {
  var rows = await db('classes?code=eq.' + encodeURIComponent(code) + '&select=*&limit=1') || [];
  return rows[0] ? mapClass(rows[0]) : null;
}

function generateCode() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var code = 'ABCLD-';
  for (var i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

async function createClass(name, teacherEmail) {
  var code = generateCode();
  var rows = await db('classes', {
    method: 'POST',
    body: JSON.stringify({ name: name, code: code, teacher_email: teacherEmail }),
  });
  var c = Array.isArray(rows) ? rows[0] : rows;
  return mapClass(c);
}

/* ══════════════════════════════
   SUPABASE — Professores
══════════════════════════════ */
async function loadProfessorByEmail(email) {
  var rows = await db('teachers?email=eq.' + encodeURIComponent(email) + '&select=*&limit=1') || [];
  var t = rows[0];
  if (!t) return null;
  return { nome: t.nome, email: t.email, senha: t.senha };
}

async function saveProfessor(prof) {
  await db('teachers', {
    method: 'POST',
    body: JSON.stringify({ nome: prof.nome, email: prof.email, senha: prof.senha }),
  });
}

/* ══════════════════════════════
   UI HELPERS
══════════════════════════════ */
function show(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toast(msg) {
  var el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  setTimeout(function() { el.classList.remove('show'); }, 2800);
}
function initials(n) {
  if (!n) return '?';
  return n.trim().split(' ').slice(0, 2).map(function(p) { return p[0] ? p[0].toUpperCase() : ''; }).join('');
}
function setScreenLoading(screenId, on) {
  var el = document.getElementById(screenId);
  if (!el) return;
  var existing = el.querySelector('.screen-loading');
  if (on && !existing) {
    var div = document.createElement('div');
    div.className = 'screen-loading';
    div.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:60px 20px;gap:12px;color:var(--muted);font-size:.88rem';
    div.innerHTML = '<div style="width:20px;height:20px;border:2.5px solid var(--border);border-top-color:var(--amber);border-radius:50%;animation:spin .7s linear infinite"></div> Carregando...';
    el.insertBefore(div, el.firstChild.nextSibling);
  } else if (!on && existing) {
    existing.remove();
  }
}

/* ══════════════════════════════
   CÁLCULO DE PERFIL
══════════════════════════════ */
function calcProfile(ans) {
  var sums = {}, counts = {};
  TYPES.forEach(function(t) { sums[t] = 0; counts[t] = 0; });
  QUESTIONS.forEach(function(q, i) { sums[q.t] += ans[i]; counts[q.t]++; });
  var p = {};
  TYPES.forEach(function(t) { p[t] = Math.round((sums[t] / counts[t] / 5) * 100); });
  return p;
}
function sortedProfile(p) {
  return TYPES.map(function(t) { return [t, p[t]]; }).sort(function(a, b) { return b[1] - a[1]; });
}

/* ══════════════════════════════
   SPIDER CHART
══════════════════════════════ */
function drawSpider(canvas, profile) {
  var s = canvas.width, ctx = canvas.getContext('2d'), n = TYPES.length;
  var cx = s / 2, cy = s / 2, maxR = s * 0.355, levels = 5;
  ctx.clearRect(0, 0, s, s);
  var angle = function(i) { return (Math.PI * 2 * i / n) - Math.PI / 2; };
  var pt = function(i, r) { return { x: cx + Math.cos(angle(i)) * r, y: cy + Math.sin(angle(i)) * r }; };
  for (var lv = 1; lv <= levels; lv++) {
    var r = maxR / levels * lv;
    ctx.beginPath();
    for (var i = 0; i < n; i++) { var p = pt(i, r); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
    ctx.closePath();
    ctx.strokeStyle = lv === levels ? 'rgba(245,166,35,.22)' : 'rgba(255,255,255,.06)';
    ctx.lineWidth = 1; ctx.stroke();
    var pa = pt(lv - 1, maxR);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(pa.x, pa.y);
    ctx.strokeStyle = 'rgba(255,255,255,.09)'; ctx.stroke();
  }
  ctx.beginPath();
  TYPES.forEach(function(t, i) { var p = pt(i, maxR * (profile[t] || 0) / 100); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); });
  ctx.closePath();
  ctx.fillStyle = 'rgba(245,166,35,.14)'; ctx.fill();
  ctx.strokeStyle = '#f5a623'; ctx.lineWidth = 2.5; ctx.stroke();
  var lr = maxR + s * 0.09;
  TYPES.forEach(function(t, i) {
    var m = META[t], dp = pt(i, maxR * (profile[t] || 0) / 100), lp = pt(i, lr);
    ctx.beginPath(); ctx.arc(dp.x, dp.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = m.color; ctx.fill();
    ctx.strokeStyle = '#0e0e10'; ctx.lineWidth = 2; ctx.stroke();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = 'bold ' + Math.floor(s * 0.037) + 'px Syne,sans-serif';
    ctx.fillStyle = '#e8e6e0'; ctx.fillText(m.name, lp.x, lp.y - 7);
    ctx.font = Math.floor(s * 0.044) + 'px serif'; ctx.fillText(m.icon, lp.x, lp.y + 8);
  });
}

/* ══════════════════════════════
   BARRAS
══════════════════════════════ */
function renderBars(el, sorted) {
  el.innerHTML = sorted.map(function(item) {
    var t = item[0], v = item[1], m = META[t];
    return '<div class="bar-item"><div class="bar-icon">' + m.icon + '</div><div class="bar-body">' +
      '<div class="bar-head"><span class="bar-name">' + m.name + '</span><span class="bar-pct">' + v + '%</span></div>' +
      '<div class="bar-track"><div class="bar-fill" style="width:' + v + '%;background:' + m.color + '"></div></div>' +
      '</div></div>';
  }).join('');
}

/* ══════════════════════════════
   QUESTIONÁRIO
══════════════════════════════ */
function buildQuestions() {
  answers = new Array(QUESTIONS.length).fill(0);
  var container = document.getElementById('q-container');
  container.innerHTML = '';
  QUESTIONS.forEach(function(q, qi) {
    var m = META[q.t], div = document.createElement('div');
    div.className = 'q-card'; div.id = 'qcard-' + qi;
    div.innerHTML =
      '<div class="q-type">' + m.icon + ' ' + m.name + '</div>' +
      '<div class="q-text">' + q.q + '</div>' +
      '<div class="choice-opts" id="opts-' + qi + '">' +
        q.opts.map(function(o, oi) {
          return '<button class="choice-btn" data-qi="' + qi + '" data-v="' + o.score + '" data-oi="' + oi + '">' + o.label + '</button>';
        }).join('') +
      '</div>';
    container.appendChild(div);
  });
  container.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-qi]');
    if (!btn) return;
    var qi = parseInt(btn.dataset.qi), v = parseInt(btn.dataset.v);
    document.querySelectorAll('#opts-' + qi + ' .choice-btn').forEach(function(b) { b.classList.remove('sel'); });
    btn.classList.add('sel');
    answers[qi] = v;
    document.getElementById('qcard-' + qi).classList.add('ok');
    var done = answers.filter(function(x) { return x > 0; }).length;
    document.getElementById('prog-fill').style.width = (done / QUESTIONS.length * 100) + '%';
    document.getElementById('prog-lbl').textContent = done + ' de ' + QUESTIONS.length + ' respondidas';
  });
}

/* ══════════════════════════════
   RESULTADO DO ALUNO
══════════════════════════════ */
async function showStudentResult() {
  var profile = calcProfile(answers), sorted = sortedProfile(profile), top = sorted[0];
  var user = null;
  try { user = JSON.parse(sessionStorage.getItem('abcld_user') || 'null'); } catch(e) {}
  var result = {
    name:    studentName,
    email:   user ? (user.email || '') : '',
    classId: user ? (user.classId || '') : '',
    date:    new Date().toLocaleDateString('pt-BR'),
    profile: profile,
    topType: top[0],
  };
  try {
    await saveResult(result);
  } catch(err) {
    // Se o aluno já tinha resultado (unique constraint), mostramos o resultado mesmo assim
    console.warn('saveResult:', err.message);
  }
  var classResults = result.classId ? await loadResultsByClass(result.classId) : [];
  renderStudentResult(result, sorted, top, classResults);
}

async function showExistingResult(result) {
  var sorted = sortedProfile(result.profile), top = sorted[0];
  var classResults = result.classId ? await loadResultsByClass(result.classId) : [];
  renderStudentResult(result, sorted, top, classResults);
}

function renderStudentResult(result, sorted, top, classResults) {
  document.getElementById('res-title').innerHTML = 'Perfil de <em>' + (result.name || 'Aluno') + '</em>';
  document.getElementById('res-sub').textContent = 'Estilo dominante: ' + META[top[0]].icon + ' ' + META[top[0]].name + ' (' + top[1] + '%)';
  drawSpider(document.getElementById('spider-student'), result.profile);
  renderBars(document.getElementById('res-bars'), sorted);
  var medals = ['🏆', '⭐', '✨', '💡'], labels = ['Estilo Dominante', '2º Mais Forte', '3º Mais Forte', 'Ponto de Desenvolvimento'];
  document.getElementById('res-analysis').innerHTML = sorted.slice(0, 4).map(function(item, i) {
    var t = item[0], v = item[1], m = META[t];
    return '<div class="insight"><div class="insight-badge">' + medals[i] + '</div><div class="insight-text">' +
      '<strong>' + labels[i] + ': ' + m.icon + ' ' + m.name + ' (' + v + '%)</strong>' +
      '<p>' + (v >= 60 ? INSIGHTS[t].h : INSIGHTS[t].l) + '</p></div></div>';
  }).join('');
  renderClassAggregate(classResults || []);
  show('s-result');
}

function renderClassAggregate(classResults) {
  var section = document.getElementById('class-aggregate-section');
  if (!section || classResults.length < 1) { if (section) section.style.display = 'none'; return; }
  section.style.display = 'block';
  var total = classResults.length;
  var avgs = {};
  TYPES.forEach(function(t) {
    avgs[t] = Math.round(classResults.reduce(function(s, r) { return s + (r.profile[t] || 0); }, 0) / total);
  });
  var sorted = sortedProfile(avgs);
  var spiderEl = document.getElementById('spider-class');
  if (spiderEl) drawSpider(spiderEl, avgs);
  var barsEl = document.getElementById('class-bars');
  if (barsEl) renderBars(barsEl, sorted);
  var countEl = document.getElementById('class-student-count');
  if (countEl) countEl.textContent = total + ' aluno' + (total !== 1 ? 's' : '') + ' responderam nesta turma';
}

/* ══════════════════════════════
   PAINEL DO PROFESSOR
══════════════════════════════ */
async function showTeacherPanel(user) {
  currentTeacherEmail = user.email;
  var brandRole = document.getElementById('teacher-brand-role');
  if (brandRole && user.nome) brandRole.textContent = user.nome;
  show('s-teacher');
  await renderTeacherClasses(user.email);
}

async function renderTeacherClasses(teacherEmail) {
  var listEl = document.getElementById('classes-list');
  if (!listEl) return;
  listEl.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:.85rem">Carregando turmas...</div>';
  try {
    var classes = await loadClassesByTeacher(teacherEmail);
    if (classes.length === 0) {
      listEl.innerHTML = '<div class="empty"><div class="empty-icon">🏫</div><p>Nenhuma turma criada ainda.<br/>Crie sua primeira turma acima.</p></div>';
      return;
    }
    // Busca todos os resultados das turmas deste professor de uma vez
    var classIds = classes.map(function(c) { return c.id; });
    var allResults = [];
    for (var i = 0; i < classIds.length; i++) {
      var rs = await loadResultsByClass(classIds[i]);
      allResults = allResults.concat(rs);
    }
    listEl.innerHTML = classes.slice().reverse().map(function(cls) {
      var count = allResults.filter(function(r) { return r.classId === cls.id; }).length;
      return '<div class="class-item" data-cls-id="' + cls.id + '">' +
        '<div class="class-item-info">' +
          '<div class="class-item-name">' + cls.name + '</div>' +
          '<div class="class-item-meta"><span class="class-code-badge">' + cls.code + '</span>&nbsp;·&nbsp;' + count + ' aluno' + (count !== 1 ? 's' : '') + '</div>' +
        '</div>' +
        '<div class="class-item-arrow">›</div>' +
      '</div>';
    }).join('');
    listEl.querySelectorAll('.class-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var clsId = item.dataset.clsId;
        var cls = classes.find(function(c) { return c.id === clsId; });
        if (cls) openClassDetail(cls);
      });
    });
  } catch(err) {
    listEl.innerHTML = '<div class="empty"><div class="empty-icon">⚠️</div><p>Erro ao carregar turmas.<br/>Verifique sua conexão.</p></div>';
    toast('❌ Erro ao carregar turmas: ' + err.message);
  }
}

function openClassDetail(cls) {
  currentClassId = cls.id;
  var titleEl = document.getElementById('detail-class-title');
  if (titleEl) titleEl.innerHTML = cls.name;
  var codeEl = document.getElementById('detail-class-code');
  if (codeEl) codeEl.textContent = cls.code;
  document.getElementById('tcv').style.display = 'none';
  document.getElementById('tdv').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderTeacherDetail(cls.id);
}

async function renderTeacherDetail(classId) {
  var statsEl  = document.getElementById('stats-grid');
  var rankEl   = document.getElementById('ranking-list');
  var listEl   = document.getElementById('students-list');
  if (statsEl) statsEl.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:.85rem;grid-column:1/-1">Carregando...</div>';
  if (rankEl)  rankEl.innerHTML  = '';
  if (listEl)  listEl.innerHTML  = '';

  var all;
  try {
    all = await loadResultsByClass(classId);
  } catch(err) {
    toast('❌ Erro ao carregar resultados: ' + err.message);
    return;
  }

  var total = all.length;
  var topCounts = {};
  TYPES.forEach(function(t) { topCounts[t] = 0; });
  all.forEach(function(r) { if (r.topType) topCounts[r.topType]++; });
  var topType = TYPES.reduce(function(a, b) { return topCounts[a] >= topCounts[b] ? a : b; });
  var has = total > 0;

  /* Stats */
  if (statsEl) statsEl.innerHTML =
    '<div class="stat-tile"><div class="stat-val">' + total + '</div><div class="stat-lbl">Alunos</div></div>' +
    '<div class="stat-tile"><div class="stat-val">' + (has ? META[topType].icon : '—') + '</div><div class="stat-lbl">Estilo Líder</div></div>' +
    '<div class="stat-tile"><div class="stat-val">' + (has ? topCounts[topType] : '—') + '</div><div class="stat-lbl">' + (has ? META[topType].name : 'Sem dados') + '</div></div>';

  /* Ranking */
  if (!has) {
    if (rankEl) rankEl.innerHTML = '<div class="empty"><div class="empty-icon">📭</div><p>Nenhum resultado ainda.<br/>Compartilhe o código da turma com os alunos.</p></div>';
  } else {
    var avgs = TYPES.map(function(t) {
      return [t, Math.round(all.reduce(function(s, r) { return s + (r.profile[t] || 0); }, 0) / total)];
    }).sort(function(a, b) { return b[1] - a[1]; });
    var maxV = avgs[0][1];
    var pos = ['g', 's', 'b', '', '', ''], sym = ['🥇', '🥈', '🥉', '4º', '5º', '6º'];
    if (rankEl) rankEl.innerHTML = avgs.map(function(item, i) {
      var t = item[0], v = item[1], m = META[t];
      return '<div class="rank-item">' +
        '<div class="rank-pos ' + pos[i] + '">' + sym[i] + '</div><div class="rank-icon">' + m.icon + '</div>' +
        '<div class="rank-info"><div class="rank-name">' + m.name + '</div>' +
        '<div class="rank-sub">Média da turma: ' + v + '%</div>' +
        '<div class="rank-bar-track"><div class="rank-bar-fill" style="width:' + Math.round(v / maxV * 100) + '%;background:' + m.color + '"></div></div></div>' +
        '<div class="rank-count">' + v + '%</div></div>';
    }).join('');
  }

  /* Lista de alunos com delete individual */
  if (!has) {
    if (listEl) listEl.innerHTML = '<div class="empty"><div class="empty-icon">🎓</div><p>Os resultados aparecerão aqui após os alunos realizarem o teste.</p></div>';
  } else {
    if (listEl) listEl.innerHTML = [].concat(all).reverse().map(function(r) {
      var m = META[r.topType] || META['acquisition'];
      return '<div class="student-row" data-rid="' + r.id + '">' +
        '<div class="student-avatar">' + initials(r.name || r.email) + '</div>' +
        '<div class="student-info">' +
          '<div class="student-name-t">' + (r.name || '(sem nome)') + '</div>' +
          '<div class="student-meta">' + (r.email || '') + (r.date ? ' · ' + r.date : '') + '</div>' +
        '</div>' +
        '<div class="student-top">' + m.icon + ' ' + m.name + '</div>' +
        '<button class="btn-del-student" data-rid="' + r.id + '" title="Liberar reteste">🗑</button>' +
      '</div>';
    }).join('');

    listEl.querySelectorAll('.student-row').forEach(function(row) {
      row.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-del-student')) return;
        var rid = row.dataset.rid;
        var r = all.find(function(x) { return x.id === rid; });
        if (r) openModal(r);
      });
    });

    listEl.querySelectorAll('.btn-del-student').forEach(function(btn) {
      btn.addEventListener('click', async function(e) {
        e.stopPropagation();
        var rid = btn.dataset.rid;
        var r = all.find(function(x) { return x.id === rid; });
        var nome = r ? (r.name || r.email || 'aluno') : 'aluno';
        if (!confirm('Remover resultado de "' + nome + '"?\nO aluno poderá refazer o teste.')) return;
        try {
          await deleteResult(rid);
          renderTeacherDetail(classId);
          toast('✅ Resultado removido. ' + nome + ' pode refazer o teste.');
        } catch(err) {
          toast('❌ Erro ao remover: ' + err.message);
        }
      });
    });
  }
}

/* ══════════════════════════════
   MODAL (detalhe individual)
══════════════════════════════ */
function openModal(r) {
  document.getElementById('modal-name').textContent = r.name || (r.email || 'Aluno');
  document.getElementById('modal-date').textContent = 'Realizado em ' + (r.date || '—') + ' · Toque fora para fechar';
  drawSpider(document.getElementById('spider-modal'), r.profile);
  renderBars(document.getElementById('modal-bars'), sortedProfile(r.profile));
  document.getElementById('modal-overlay').classList.add('open');
}

/* ══════════════════════════════
   NAVEGAÇÃO
══════════════════════════════ */
var nav = {
  'go-student': function() { window.location.href = 'login-abc.html'; },
  'go-teacher': function() { window.location.href = 'login-abc.html#professor'; },

  'btn-test-back': function() {
    sessionStorage.removeItem('abcld_user');
    window.location.href = 'login-abc.html';
  },
  'btn-submit': function() {
    var nameEl = document.getElementById('inp-name-test');
    var name = nameEl ? nameEl.value.trim() : '';
    if (!name) { toast('⚠️ Digite seu nome antes de enviar.'); if (nameEl) nameEl.focus(); return; }
    studentName = name;
    var missing = answers.filter(function(v) { return v === 0; }).length;
    if (missing) return toast('⚠️ Faltam ' + missing + ' resposta' + (missing > 1 ? 's' : '') + '. Complete todas para continuar.');
    showStudentResult();
  },
  'btn-redo': function() {
    toast('💡 Para refazer o teste, peça ao seu professor para liberar o acesso.');
  },
  'btn-result-home': function() {
    sessionStorage.removeItem('abcld_user');
    window.location.href = 'login-abc.html';
  },

  'btn-create-class': async function() {
    var nameInput = document.getElementById('inp-class-name');
    var name = nameInput ? nameInput.value.trim() : '';
    var msgEl = document.getElementById('msg-class');
    if (!name) {
      if (msgEl) { msgEl.textContent = '⚠️ Digite o nome da turma.'; msgEl.classList.add('show'); }
      return;
    }
    if (msgEl) msgEl.classList.remove('show');
    var btn = document.getElementById('btn-create-class');
    if (btn) btn.classList.add('loading');
    try {
      var cls = await createClass(name, currentTeacherEmail);
      if (nameInput) nameInput.value = '';
      await renderTeacherClasses(currentTeacherEmail);
      toast('✅ Turma "' + name + '" criada! Código: ' + cls.code);
    } catch(err) {
      toast('❌ Erro ao criar turma: ' + err.message);
    } finally {
      if (btn) btn.classList.remove('loading');
    }
  },

  'btn-back-classes': async function() {
    currentClassId = null;
    document.getElementById('tcv').style.display = '';
    document.getElementById('tdv').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await renderTeacherClasses(currentTeacherEmail);
  },

  'btn-clear': async function() {
    if (!currentClassId) return;
    if (!confirm('Apagar TODOS os resultados desta turma?\nEsta ação não pode ser desfeita.')) return;
    try {
      await clearClassResults(currentClassId);
      renderTeacherDetail(currentClassId);
      toast('🗑️ Resultados da turma apagados.');
    } catch(err) {
      toast('❌ Erro ao apagar: ' + err.message);
    }
  },

  'btn-teacher-home': function() {
    sessionStorage.removeItem('abcld_user');
    window.location.href = 'login-abc.html#professor';
  },
  'modal-close': function() { document.getElementById('modal-overlay').classList.remove('open'); },
};

Object.keys(nav).forEach(function(id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('click', nav[id]);
});

var overlay = document.getElementById('modal-overlay');
if (overlay) overlay.addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('open');
});

/* ══════════════════════════════
   BOOT — redirecionar por sessão
══════════════════════════════ */
(async function() {
  if (document.getElementById('panel-aluno')) return; // página de login, pular
  try {
    var user = JSON.parse(sessionStorage.getItem('abcld_user') || 'null');
    if (!user) return;
    if (user.role === 'teacher') {
      await showTeacherPanel(user);
    } else if (user.role === 'student') {
      if (user.existingResult) {
        await showExistingResult(user.existingResult);
      } else if (user.directTest) {
        buildQuestions();
        show('s-test');
      }
    }
  } catch(e) {}
})();

/* ══════════════════════════════
   LOGIN PAGE
══════════════════════════════ */
if (document.getElementById('panel-aluno')) {

  var loginActiveTab = 'aluno';

  window.switchTab = function(tab) {
    loginActiveTab = tab;
    document.getElementById('tab-aluno').classList.toggle('active', tab === 'aluno');
    document.getElementById('tab-professor').classList.toggle('active', tab === 'professor');
    document.getElementById('panel-aluno').classList.toggle('active', tab === 'aluno');
    document.getElementById('panel-professor').classList.toggle('active', tab === 'professor');
    clearLoginMsgs();
  };

  if (window.location.hash === '#professor') switchTab('professor');

  function clearLoginMsgs() {
    ['msg-aluno', 'msg-prof'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) { el.classList.remove('show'); el.textContent = ''; }
    });
  }
  function showLoginMsg(id, text, type) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.className = 'msg ' + (type || 'error') + ' show';
  }
  function setLoginLoading(btnId, on) {
    var el = document.getElementById(btnId);
    if (el) el.classList.toggle('loading', on);
  }

  /* ─── Login Aluno ─── */
  window.loginAluno = function() {
    clearLoginMsgs();
    var email  = document.getElementById('aluno-email').value.trim().toLowerCase();
    var codigo = document.getElementById('aluno-codigo').value.trim().toUpperCase();
    if (!email || !email.includes('@')) { showLoginMsg('msg-aluno', '⚠️ Insira um e-mail válido.'); return; }
    if (!codigo) { showLoginMsg('msg-aluno', '⚠️ Insira o código da turma.'); return; }
    setLoginLoading('btn-aluno', true);
    (async function() {
      try {
        var turma = await loadClassByCode(codigo);
        if (!turma) {
          setLoginLoading('btn-aluno', false);
          showLoginMsg('msg-aluno', '❌ Código de turma inválido. Verifique com seu professor.');
          return;
        }
        var existing = await loadResultByEmailAndClass(email, turma.id);
        setLoginLoading('btn-aluno', false);
        if (existing) {
          toast('✅ Resultado encontrado! Carregando...');
          setTimeout(function() {
            sessionStorage.setItem('abcld_user', JSON.stringify({ role: 'student', email: email, classId: turma.id, existingResult: existing }));
            window.location.href = 'perfil-abc.html';
          }, 800);
        } else {
          toast('✅ Turma encontrada! Iniciando o teste...');
          setTimeout(function() {
            sessionStorage.setItem('abcld_user', JSON.stringify({ role: 'student', email: email, classId: turma.id, directTest: true }));
            window.location.href = 'perfil-abc.html';
          }, 800);
        }
      } catch(err) {
        setLoginLoading('btn-aluno', false);
        showLoginMsg('msg-aluno', '❌ Erro de conexão. Verifique sua internet e tente novamente.');
      }
    })();
  };

  /* ─── Login Professor ─── */
  window.loginProfessor = function() {
    clearLoginMsgs();
    var email = document.getElementById('prof-email').value.trim().toLowerCase();
    var senha = document.getElementById('prof-senha').value;
    if (!email || !email.includes('@')) { showLoginMsg('msg-prof', '⚠️ Insira um e-mail válido.'); return; }
    if (!senha || senha.length < 4) { showLoginMsg('msg-prof', '⚠️ A senha deve ter pelo menos 4 caracteres.'); return; }
    setLoginLoading('btn-prof', true);
    (async function() {
      try {
        var conta = await loadProfessorByEmail(email);
        setLoginLoading('btn-prof', false);
        if (!conta) { showLoginMsg('msg-prof', '❌ E-mail não encontrado. Crie sua conta primeiro.'); return; }
        if (conta.senha !== senha) { showLoginMsg('msg-prof', '❌ Senha incorreta. Tente novamente.'); return; }
        toast('✅ Bem-vindo(a), ' + conta.nome + '!');
        setTimeout(function() {
          sessionStorage.setItem('abcld_user', JSON.stringify({ role: 'teacher', email: email, nome: conta.nome }));
          window.location.href = 'perfil-abc.html';
        }, 800);
      } catch(err) {
        setLoginLoading('btn-prof', false);
        showLoginMsg('msg-prof', '❌ Erro de conexão. Verifique sua internet e tente novamente.');
      }
    })();
  };

  window.togglePwd = function() {
    var inp = document.getElementById('prof-senha');
    var btn = document.getElementById('pwd-toggle');
    if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
    else { inp.type = 'password'; btn.textContent = '👁'; }
  };

  window.esqueceu = function() {
    var email = document.getElementById('prof-email').value.trim();
    if (!email || !email.includes('@')) { toast('📧 Primeiro insira seu e-mail no campo acima.'); document.getElementById('prof-email').focus(); return; }
    toast('📧 Para redefinir a senha, acesse o painel do Supabase e edite o registro de ' + email);
  };

  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter') return;
    var cadScreen = document.getElementById('screen-cadastro');
    if (cadScreen && cadScreen.classList.contains('active')) { cadastrarProfessor(); return; }
    if (loginActiveTab === 'aluno') loginAluno();
    else loginProfessor();
  });

  /* ─── Cadastro de Professor ─── */
  window.irParaCadastro = function() {
    var wrap = document.getElementById('screen-login');
    var cad  = document.getElementById('screen-cadastro');
    wrap.classList.add('fading');
    setTimeout(function() { wrap.style.display = 'none'; cad.classList.add('active'); }, 260);
  };

  window.voltarLogin = function() {
    var wrap = document.getElementById('screen-login');
    var cad  = document.getElementById('screen-cadastro');
    cad.classList.remove('active');
    wrap.style.display = '';
    setTimeout(function() { wrap.classList.remove('fading'); }, 20);
    ['cad-nome', 'cad-email', 'cad-senha', 'cad-confirma'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
    });
    var sf = document.getElementById('strength-fill');
    var sl = document.getElementById('strength-label');
    if (sf) { sf.style.width = '0%'; sf.style.background = ''; }
    if (sl) { sl.textContent = ''; }
    ['msg-cad', 'msg-cad-ok'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) { el.classList.remove('show'); el.textContent = ''; }
    });
  };

  window.avaliarSenha = function(val) {
    var fill = document.getElementById('strength-fill');
    var lbl  = document.getElementById('strength-label');
    if (!fill || !lbl) return;
    var score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    var configs = [
      { w: '0%',   c: 'transparent', t: '' },
      { w: '25%',  c: '#e05656',     t: 'Muito fraca' },
      { w: '45%',  c: '#f5a623',     t: 'Fraca' },
      { w: '65%',  c: '#f5d442',     t: 'Razoável' },
      { w: '85%',  c: '#5ec48b',     t: 'Forte' },
      { w: '100%', c: '#5ec48b',     t: 'Muito forte ✓' },
    ];
    var cfg = configs[Math.min(score, 5)];
    fill.style.width = cfg.w; fill.style.background = cfg.c;
    lbl.textContent = cfg.t; lbl.style.color = cfg.c;
  };

  window.togglePwdCad = function(inputId, btn) {
    var inp = document.getElementById(inputId);
    if (!inp) return;
    if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
    else { inp.type = 'password'; btn.textContent = '👁'; }
  };

  function showCadMsg(id, text) {
    ['msg-cad', 'msg-cad-ok'].forEach(function(i) {
      var el = document.getElementById(i); if (el) { el.classList.remove('show'); el.textContent = ''; }
    });
    var el = document.getElementById(id);
    if (el) { el.textContent = text; el.classList.add('show'); }
  }

  window.cadastrarProfessor = function() {
    var nome     = document.getElementById('cad-nome').value.trim();
    var email    = document.getElementById('cad-email').value.trim().toLowerCase();
    var senha    = document.getElementById('cad-senha').value;
    var confirma = document.getElementById('cad-confirma').value;
    if (!nome)                         { showCadMsg('msg-cad', '⚠️ Informe seu nome completo.'); return; }
    if (!email || !email.includes('@')){ showCadMsg('msg-cad', '⚠️ Insira um e-mail válido.'); return; }
    if (senha.length < 6)              { showCadMsg('msg-cad', '⚠️ A senha precisa ter pelo menos 6 caracteres.'); return; }
    if (senha !== confirma)            { showCadMsg('msg-cad', '❌ As senhas não coincidem.'); return; }
    var btn = document.getElementById('btn-cadastrar');
    if (btn) btn.classList.add('loading');
    (async function() {
      try {
        var existente = await loadProfessorByEmail(email);
        if (existente) {
          if (btn) btn.classList.remove('loading');
          showCadMsg('msg-cad', '❌ Este e-mail já está cadastrado. Faça login.');
          return;
        }
        await saveProfessor({ nome: nome, email: email, senha: senha });
        if (btn) btn.classList.remove('loading');
        showCadMsg('msg-cad-ok', '✅ Conta criada com sucesso! Redirecionando...');
        setTimeout(function() {
          sessionStorage.setItem('abcld_user', JSON.stringify({ role: 'teacher', email: email, nome: nome }));
          window.location.href = 'perfil-abc.html';
        }, 1200);
      } catch(err) {
        if (btn) btn.classList.remove('loading');
        showCadMsg('msg-cad', '❌ Erro ao criar conta: ' + err.message);
      }
    })();
  };
}