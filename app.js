/* ============================================================
   app.js — screens, lessons, learn & practice modes, progress.
   ============================================================ */

const PROGRESS_KEY = 'larpChessProgress';

const state = {
  screen: 'home',
  lesson: null,
  ply: 0,            // half-moves applied
  mode: 'learn',     // 'learn' | 'practice'
  flipped: false,
  selected: null,    // selected square like 'e2'
  lastMove: null,    // {from, to}
  misses: 0,         // wrong attempts on current practice move
};

/* ---------- progress (localStorage) ---------- */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function markCompleted(id) {
  const p = loadProgress();
  p[id] = { completed: true, at: Date.now() };
  saveProgress(p);
}

/* ---------- helpers ---------- */
const $ = (id) => document.getElementById(id);

function moveSide(i) { return i % 2 === 0 ? 'w' : 'b'; }
function isUserMove(i) { return state.lesson && moveSide(i) === state.lesson.userSide; }

function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

/* ============================================================
   HOME SCREEN
   ============================================================ */
function renderHome() {
  state.screen = 'home';
  $('lesson-screen').classList.add('hidden');
  $('home-screen').classList.remove('hidden');

  const progress = loadProgress();
  const grid = $('lesson-grid');
  grid.innerHTML = '';

  OPENINGS.forEach((op) => {
    const done = progress[op.id]?.completed;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'lesson-card' + (done ? ' completed' : '');
    card.innerHTML = `
      <img class="card-avatar" src="${op.avatar}" alt="${op.persona}" />
      <div class="card-body">
        <h3>${op.name}</h3>
        <p class="card-persona">${op.persona} · ${op.title}</p>
        <p class="card-desc">${op.description}</p>
        <div class="card-meta">
          <span class="stars" title="Difficulty">${stars(op.difficulty)}</span>
          <span class="side-chip">${op.userSide === 'w' ? 'Play White' : 'Play Black'}</span>
          ${done ? '<span class="done-chip">✓ Mastered</span>' : ''}
        </div>
      </div>`;
    card.addEventListener('click', () => openLesson(op.id));
    grid.appendChild(card);
  });
}

/* ============================================================
   LESSON SCREEN
   ============================================================ */
function openLesson(id) {
  state.lesson = OPENINGS.find((o) => o.id === id);
  state.screen = 'lesson';
  state.ply = 0;
  state.mode = 'learn';
  state.flipped = state.lesson.userSide === 'b';
  state.selected = null;
  state.lastMove = null;
  state.misses = 0;

  $('home-screen').classList.add('hidden');
  $('lesson-screen').classList.remove('hidden');
  $('victory-overlay').classList.add('hidden');
  $('lesson-name').textContent = state.lesson.name;
  $('lesson-persona').textContent = `${state.lesson.persona} — ${state.lesson.title} · Difficulty ${stars(state.lesson.difficulty)}`;

  setMode('learn');
}

function setMode(mode) {
  state.mode = mode;
  state.ply = 0;
  state.selected = null;
  state.lastMove = null;
  state.misses = 0;
  $('victory-overlay').classList.add('hidden');
  $('mode-learn').classList.toggle('active', mode === 'learn');
  $('mode-practice').classList.toggle('active', mode === 'practice');
  renderLesson();
  if (mode === 'practice') startPracticeTurn();
}

/* ---------- rendering ---------- */
function renderLesson() {
  renderBoard();
  renderMoveList();
  renderNarration();
  renderProgress();

  const atStart = state.ply === 0;
  const atEnd = state.ply >= state.lesson.moves.length;
  $('prev-btn').disabled = atStart;
  $('next-btn').disabled = atEnd;
  $('next-btn').classList.toggle('hidden', state.mode === 'practice');
  $('prev-btn').classList.toggle('hidden', state.mode === 'practice');
}

function renderBoard() {
  const board = boardAtPly(state.lesson, state.ply);
  const el = $('board');
  el.innerHTML = '';

  const hintFrom = (state.mode === 'practice' && state.misses >= 2 && state.ply < state.lesson.moves.length)
    ? state.lesson.moves[state.ply].from
    : null;

  for (let dr = 0; dr < 8; dr++) {
    for (let dc = 0; dc < 8; dc++) {
      const r = state.flipped ? 7 - dr : dr;
      const c = state.flipped ? 7 - dc : dc;
      const sq = rcToSq(r, c);
      const cell = document.createElement('div');
      cell.className = 'sq ' + (((r + c) % 2 === 0) ? 'light' : 'dark');
      cell.dataset.sq = sq;

      const piece = board[r][c];
      if (piece) {
        const span = document.createElement('span');
        span.className = 'piece ' + (isWhitePiece(piece) ? 'white-piece' : 'black-piece');
        span.textContent = GLYPHS[piece];
        cell.appendChild(span);
      }

      if (state.lastMove && (sq === state.lastMove.from || sq === state.lastMove.to)) {
        cell.classList.add('last-move');
      }
      if (state.selected === sq) cell.classList.add('selected');
      if (hintFrom === sq) cell.classList.add('hint');

      // coordinates
      const fileRow = state.flipped ? 0 : 7;
      const rankCol = state.flipped ? 7 : 0;
      if (dr === fileRow) {
        const f = document.createElement('span');
        f.className = 'coord file';
        f.textContent = FILES[c];
        cell.appendChild(f);
      }
      if (dc === rankCol) {
        const rk = document.createElement('span');
        rk.className = 'coord rank';
        rk.textContent = String(8 - r);
        cell.appendChild(rk);
      }

      cell.addEventListener('click', () => onSquareClick(sq));
      el.appendChild(cell);
    }
  }
}

function renderMoveList() {
  const list = $('move-list');
  list.innerHTML = '';
  const moves = state.lesson.moves;

  for (let i = 0; i < moves.length; i += 2) {
    const li = document.createElement('li');
    li.className = 'move-pair';
    const num = document.createElement('span');
    num.className = 'move-num';
    num.textContent = `${i / 2 + 1}.`;
    li.appendChild(num);

    for (let j = i; j < Math.min(i + 2, moves.length); j++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'move-san' +
        (j < state.ply ? ' played' : '') +
        (j === state.ply - 1 ? ' current' : '');
      b.textContent = moves[j].san;
      b.dataset.ply = j + 1;
      b.addEventListener('click', () => {
        if (state.mode === 'learn') {
          state.ply = j + 1;
          state.lastMove = state.ply > 0 ? state.lesson.moves[state.ply - 1] : null;
          renderLesson();
          if (state.ply >= state.lesson.moves.length) completeLesson();
        }
      });
      li.appendChild(b);
    }
    list.appendChild(li);
  }
}

function renderNarration() {
  const avatar = $('narration-avatar');
  const speaker = $('narration-speaker');
  const text = $('narration-text');
  const say = $('narration-say');

  if (state.ply === 0) {
    avatar.src = state.lesson.avatar;
    avatar.alt = state.lesson.persona;
    speaker.textContent = state.lesson.persona;
    text.textContent = state.lesson.intro;
    say.classList.add('hidden');
    return;
  }

  const mv = state.lesson.moves[state.ply - 1];
  const mine = isUserMove(state.ply - 1);
  avatar.src = mine ? state.lesson.avatar : 'wojaks/classic.svg';
  avatar.alt = mine ? state.lesson.persona : 'Opponent';
  speaker.textContent = mine
    ? `${state.lesson.persona} plays ${mv.san}`
    : `Opponent plays ${mv.san}`;
  text.textContent = mv.text;

  if (mv.say) {
    say.textContent = `Say it aloud: ${mv.say}`;
    say.classList.remove('hidden');
  } else {
    say.classList.add('hidden');
  }
}

function renderProgress() {
  const total = state.lesson.moves.length;
  $('progress-text').textContent = `${state.ply} / ${total}`;
  $('progress-fill').style.width = `${(state.ply / total) * 100}%`;
}

/* ============================================================
   LEARN MODE
   ============================================================ */
function stepForward() {
  if (state.ply >= state.lesson.moves.length) return;
  state.lastMove = state.lesson.moves[state.ply];
  state.ply++;
  renderLesson();
  if (state.ply >= state.lesson.moves.length) completeLesson();
}

function stepBack() {
  if (state.ply === 0) return;
  state.ply--;
  state.lastMove = state.ply > 0 ? state.lesson.moves[state.ply - 1] : null;
  renderLesson();
}

/* ============================================================
   PRACTICE MODE
   ============================================================ */
const SNARK = [
  'Nope.',
  'Not that square.',
  'Bold. Wrong, but bold.',
  'The Alien shakes its head.',
  'Your persona is disappointed.',
  'Try again, champ.',
];

function startPracticeTurn() {
  const status = $('practice-status');
  if (state.ply >= state.lesson.moves.length) { completeLesson(); return; }

  if (isUserMove(state.ply)) {
    status.classList.remove('hidden');
    status.textContent = `Your move. Think like ${state.lesson.persona}.`;
    renderBoard();
  } else {
    // Opponent replies automatically after a beat.
    status.classList.remove('hidden');
    status.textContent = 'Opponent moves…';
    renderBoard();
    setTimeout(() => {
      if (state.mode !== 'practice') return;
      state.lastMove = state.lesson.moves[state.ply];
      state.ply++;
      state.misses = 0;
      renderLesson();
      if (state.ply >= state.lesson.moves.length) completeLesson();
      else startPracticeTurn();
    }, 900);
  }
}

function onSquareClick(sq) {
  if (state.mode !== 'practice') return;
  if (state.ply >= state.lesson.moves.length) return;
  if (!isUserMove(state.ply)) return;

  const board = boardAtPly(state.lesson, state.ply);
  const [r, c] = sqToRC(sq);
  const piece = board[r][c];

  if (!state.selected) {
    if (piece && (state.lesson.userSide === 'w') === isWhitePiece(piece)) {
      state.selected = sq;
      renderBoard();
    }
    return;
  }

  if (sq === state.selected) {
    state.selected = null;
    renderBoard();
    return;
  }

  // reselect own piece
  if (piece && (state.lesson.userSide === 'w') === isWhitePiece(piece)) {
    state.selected = sq;
    renderBoard();
    return;
  }

  const expected = state.lesson.moves[state.ply];
  if (state.selected === expected.from && sq === expected.to) {
    state.lastMove = expected;
    state.ply++;
    state.selected = null;
    state.misses = 0;
    renderLesson();
    if (state.ply >= state.lesson.moves.length) completeLesson();
    else startPracticeTurn();
  } else {
    state.misses++;
    state.selected = null;
    const status = $('practice-status');
    status.classList.remove('hidden');
    status.textContent = SNARK[Math.floor(Math.random() * SNARK.length)] +
      (state.misses >= 2 ? ' (Hint: try the glowing square.)' : '');
    status.classList.remove('shake');
    void status.offsetWidth; // restart animation
    status.classList.add('shake');
    renderBoard();
  }
}

/* ============================================================
   VICTORY
   ============================================================ */
function completeLesson() {
  markCompleted(state.lesson.id);
  $('victory-avatar').src = state.lesson.avatar;
  $('victory-title').textContent = `${state.lesson.name} — Mastered!`;
  $('victory-text').textContent = state.lesson.victory;
  $('victory-overlay').classList.remove('hidden');
}

/* ============================================================
   WIRING
   ============================================================ */
$('back-btn').addEventListener('click', renderHome);
$('mode-learn').addEventListener('click', () => setMode('learn'));
$('mode-practice').addEventListener('click', () => setMode('practice'));
$('prev-btn').addEventListener('click', stepBack);
$('next-btn').addEventListener('click', stepForward);
$('flip-btn').addEventListener('click', () => { state.flipped = !state.flipped; renderBoard(); });
$('restart-btn').addEventListener('click', () => {
  state.ply = 0; state.selected = null; state.lastMove = null; state.misses = 0;
  $('victory-overlay').classList.add('hidden');
  renderLesson();
  if (state.mode === 'practice') startPracticeTurn();
});
$('victory-replay').addEventListener('click', () => {
  $('restart-btn').click();
});
$('victory-home').addEventListener('click', renderHome);

document.addEventListener('keydown', (e) => {
  if (state.screen !== 'lesson') return;
  if (state.mode === 'learn') {
    if (e.key === 'ArrowRight') stepForward();
    if (e.key === 'ArrowLeft') stepBack();
  }
});

renderHome();
