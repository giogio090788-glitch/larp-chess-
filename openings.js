/* ============================================================
   openings.js — lesson data.
   Each opening is a LARP persona. `userSide` is the side YOU play.
   Moves alternate White, Black, White, Black...
   Each move: { san, from, to, text, say? }
     text = narration shown when the move is made
     say  = (optional) the line you declare aloud, in-character
   ============================================================ */

const OPENINGS = [
  {
    id: 'alien-gambit',
    name: 'The Alien Gambit',
    persona: 'Witty Alien',
    title: 'Intergalactic Trickster',
    avatar: 'wojaks/alien.svg',
    difficulty: 3,
    userSide: 'w',
    description: 'Be Witty Alien. Retreat your knight, bait the rook trap, win anyway.',
    intro: 'You are Witty Alien. They play the Caro-Kann. Solid. Boring. Doomed.',
    victory: 'Abduction complete. They are still staring at the board.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: 'First contact.', say: '"Greetings, human."' },
      { san: 'c6', from: 'c7', to: 'c6', text: 'They hide behind the Caro-Kann.' },
      { san: 'd4', from: 'd2', to: 'd4', text: 'Take the whole center.', say: '"This is ours now."' },
      { san: 'd5', from: 'd7', to: 'd5', text: 'They push back. Expected.' },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'Knight out.', say: '"Deploying drone one."' },
      { san: 'dxe4', from: 'd5', to: 'e4', text: 'They take. Good.' },
      { san: 'Nxe4', from: 'c3', to: 'e4', text: 'You take back. All according to plan.' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'They kick your knight. Perfect.' },
      { san: 'Ng3!?', from: 'e4', to: 'g3', text: 'The knight retreats. This is the trick. This is the Alien Gambit.', say: '"You cannot hit what has already left."' },
      { san: 'h5!?', from: 'h7', to: 'h5', text: 'They shove a pawn at you. Let it come.' },
      { san: 'Bg5!', from: 'c1', to: 'g5', text: 'Pin their knight.', say: '"Cute pawn."' },
      { san: 'h4', from: 'h5', to: 'h4', text: 'The pawn keeps coming. Keep smiling.' },
      { san: 'Bxf6', from: 'g5', to: 'f6', text: 'Trade the bishop. They think they are winning.' },
      { san: 'hxg3', from: 'h4', to: 'g3', text: 'They grab more. Greedy human.' },
      { san: 'Be5!', from: 'f6', to: 'e5', text: 'The bishop lands. Their rook on h8 is now lunch.', say: '"Behold."' },
      { san: 'Rxh2?!', from: 'h8', to: 'h2', text: 'They eat your h2 pawn. Trap: sprung.' },
      { san: 'Rxh2', from: 'h1', to: 'h2', text: 'You take back. The board is chaos. You love chaos.', say: '"Vibes are forever."' },
      { san: 'Qa5+', from: 'd8', to: 'a5', text: 'Check. They fight back. Lesson over — from here, the Alien improvises.' }
    ]
  },

  {
    id: 'italian-game',
    name: 'The Italian Game',
    persona: 'The Renaissance Duelist',
    title: 'Master of the Rapier Center',
    avatar: 'wojaks/chad.svg',
    difficulty: 1,
    userSide: 'w',
    description: 'Be a fancy duelist. Attack their weakest pawn. Win with style.',
    intro: 'You are a duelist. Fast moves, sharp attacks, no mercy.',
    victory: 'Touché. Style points awarded.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: 'Open the center.', say: '"En garde."' },
      { san: 'e5', from: 'e7', to: 'e5', text: 'They copy you.' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'Knight out. Attack their pawn.' },
      { san: 'Nc6', from: 'b8', to: 'c6', text: 'They defend.' },
      { san: 'Bc4', from: 'f1', to: 'c4', text: 'Bishop out. Aim at f7 — their weakest square.', say: '"Your king looks lonely."' },
      { san: 'Bc5', from: 'f8', to: 'c5', text: 'They copy you again.' },
      { san: 'c3', from: 'c2', to: 'c3', text: 'Quiet move. Loud plan: d4 is next.', say: '"Loading the cannon."' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'They poke your e4 pawn. Feisty.' },
      { san: 'd4', from: 'd2', to: 'd4', text: 'Boom. The center explodes.', say: '"Showtime."' },
      { san: 'exd4', from: 'e5', to: 'd4', text: 'They take.' },
      { san: 'cxd4', from: 'c3', to: 'd4', text: 'You take back. You own the center.' },
      { san: 'Bb4+', from: 'c5', to: 'b4', text: 'Check. Scary. Not really.' },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'Block it and develop. You are ahead.', say: '"That all you got?"' }
    ]
  },

  {
    id: 'queens-gambit',
    name: "The Queen's Gambit",
    persona: 'The Royal Bureaucrat',
    title: 'Minister of Slow Strangulation',
    avatar: 'wojaks/bureaucrat.svg',
    difficulty: 2,
    userSide: 'w',
    description: "Be a royal clerk. Offer a pawn, then bury them in procedure.",
    intro: 'You are the royal clerk. No flash. Just slow, painful efficiency.',
    victory: 'Your position: approved. Theirs: denied.',
    moves: [
      { san: 'd4', from: 'd2', to: 'd4', text: "Queen's pawn. Solid.", say: '"The office is open."' },
      { san: 'd5', from: 'd7', to: 'd5', text: 'They match you.' },
      { san: 'c4', from: 'c2', to: 'c4', text: "The gambit. Offer a pawn they can't really keep.", say: '"Sign here, please."' },
      { san: 'e6', from: 'e7', to: 'e6', text: "They decline. Smart. Won't save them." },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'Develop. Pressure builds.' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'They develop too.' },
      { san: 'Bg5', from: 'c1', to: 'g5', text: 'Pin their knight. Their queen is stuck babysitting it.', say: '"Your queen now has a second job."' },
      { san: 'Be7', from: 'f8', to: 'e7', text: 'They unpin.' },
      { san: 'e3', from: 'e2', to: 'e3', text: 'Quiet move. Bishop wakes up.' },
      { san: 'O-O', from: 'e8', to: 'g8', text: 'They castle into "safety."' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'All pieces out. Zero weaknesses.' },
      { san: 'h6', from: 'h7', to: 'h6', text: 'They poke your bishop.' },
      { san: 'Bh4', from: 'g5', to: 'h4', text: 'Step back. Keep the pin. Keep staring.', say: '"Now we wait."' }
    ]
  },

  {
    id: 'kings-gambit',
    name: "The King's Gambit (Muzio)",
    persona: 'The Swashbuckler',
    title: 'Captain of the Burning Ship',
    avatar: 'wojaks/psycho.svg',
    difficulty: 4,
    userSide: 'w',
    description: 'Be a maniac. Sacrifice a pawn, then a whole knight, then win.',
    intro: 'You are a swashbuckler. Defense is for cowards.',
    victory: 'You sacrificed a knight and won anyway. Legend.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: 'Normal move. Last one, promise.' },
      { san: 'e5', from: 'e7', to: 'e5', text: 'They match you.' },
      { san: 'f4', from: 'f2', to: 'f4', text: "The King's Gambit. Offer a pawn, rip open the f-file.", say: '"Take it. I dare you."' },
      { san: 'exf4', from: 'e5', to: 'f4', text: 'They take. Good.' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'Knight out. Attack.', say: '"Fear? Never met her."' },
      { san: 'g5', from: 'g7', to: 'g5', text: "They guard the pawn and wreck their own king's cover." },
      { san: 'Bc4', from: 'f1', to: 'c4', text: 'Bishop aims at f7. Everything aims at f7.', say: '"Tick tock."' },
      { san: 'g4', from: 'g5', to: 'g4', text: 'They attack your knight. It is hanging. Whatever.' },
      { san: 'O-O!!', from: 'e1', to: 'g1', text: 'Castle. Let the knight die. This is the Muzio Gambit.', say: '"Keep the knight. I brought more."' },
      { san: 'gxf3', from: 'g4', to: 'f3', text: 'They eat your whole knight. You are down a piece. You have never been happier.' },
      { san: 'Qxf3', from: 'd1', to: 'f3', text: 'Queen in. f7 is falling. Their king is in the open. ATTACK.', say: '"Everything I own points at your king."' }
    ]
  },

  {
    id: 'london-system',
    name: 'The London System',
    persona: 'The Sensible Accountant',
    title: 'Baron of Beige',
    avatar: 'wojaks/npc.svg',
    difficulty: 1,
    userSide: 'w',
    description: 'Be an NPC. Same moves every game. They still lose.',
    intro: 'You are an NPC. Same setup every game. They still lose.',
    victory: 'Another slow, inevitable win. They call it boring. You call it Tuesday.',
    moves: [
      { san: 'd4', from: 'd2', to: 'd4', text: 'Same as always.' },
      { san: 'd5', from: 'd7', to: 'd5', text: "Doesn't matter what they play. That's the point." },
      { san: 'Bf4', from: 'c1', to: 'f4', text: "Bishop out early. This is the London's one fancy move.", say: '"The bishop parks here."' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'They develop.' },
      { san: 'e3', from: 'e2', to: 'e3', text: 'The pyramid. Solid.' },
      { san: 'e6', from: 'e7', to: 'e6', text: 'They build their own little wall.' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'Knight to f3. It always goes here.' },
      { san: 'c5', from: 'c7', to: 'c5', text: 'They attack your center. Cute.' },
      { san: 'c3', from: 'c2', to: 'c3', text: 'Reinforce. Nothing gets through.', say: '"Request denied."' },
      { san: 'Nc6', from: 'b8', to: 'c6', text: "More pieces out. You don't care." },
      { san: 'Nbd2', from: 'b1', to: 'd2', text: 'Other knight to d2. Boring. Strong.' },
      { san: 'Bd6', from: 'f8', to: 'd6', text: 'They offer a bishop trade.' },
      { san: 'Bg3', from: 'f4', to: 'g3', text: 'Decline. Keep the bishop.', say: '"No trades today."' },
      { san: 'O-O', from: 'e8', to: 'g8', text: 'They castle. Now slowly improve everything. That is the whole plan.', say: '"Shall we begin? I cleared my afternoon."' }
    ]
  },

  {
    id: 'sicilian-najdorf',
    name: 'The Sicilian Najdorf',
    persona: 'The Counterpuncher',
    title: 'The Velvet Assassin',
    avatar: 'wojaks/doomer.svg',
    difficulty: 4,
    userSide: 'b',
    description: 'Be a doomer. Let them take the center, then hit back harder.',
    intro: 'You are the doomer. Let them attack first. Then hit back harder.',
    victory: 'Counterpunch landed. They never saw it coming.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: "They open with the king's pawn." },
      { san: 'c5!', from: 'c7', to: 'c5', text: 'The Sicilian. No symmetry. You came to win.', say: '"Symmetry is for cowards."' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'They develop.' },
      { san: 'd6', from: 'd7', to: 'd6', text: 'Small move. Big flexibility.' },
      { san: 'd4', from: 'd2', to: 'd4', text: 'They open the center. Deep water. You swim here.' },
      { san: 'cxd4', from: 'c5', to: 'd4', text: 'Trade your side pawn for their center pawn. It pays off later.', say: '"You get the center. I get the endgame."' },
      { san: 'Nxd4', from: 'f3', to: 'd4', text: 'Their knight looks strong. "Looks."' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'Develop and poke their e4 pawn.' },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'They defend.' },
      { san: 'a6!', from: 'a7', to: 'a6', text: 'The Najdorf. One tiny pawn move. Stops Bb5, prepares ...b5. Famous for a reason.', say: '"This pawn contains multitudes."' },
      { san: 'Be2', from: 'f1', to: 'e2', text: 'They play it safe. They fear you. Correct.' },
      { san: 'e5', from: 'e7', to: 'e5', text: 'Kick their knight. Take space.', say: '"The snake strikes."' },
      { san: 'Nb3', from: 'd4', to: 'b3', text: 'Their knight runs away.' },
      { san: 'Be7', from: 'f8', to: 'e7', text: 'Finish development. Castle next. The trap is set.', say: '"Now we play chess."' }
    ]
  },

  {
    id: 'scandinavian',
    name: 'The Scandinavian Defense',
    persona: 'The Viking Raider',
    title: 'Queen of the Longboats',
    avatar: 'wojaks/viking.svg',
    difficulty: 2,
    userSide: 'b',
    description: 'Be a viking. Hit the center on move one. Bring your queen.',
    intro: 'You are a viking. Attack first. Ask nothing.',
    victory: 'Raid complete. Home by dinner.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: "They push the king's pawn." },
      { san: 'd5!', from: 'd7', to: 'd5', text: 'The Scandinavian. Hit the center NOW.', say: '"RAID."' },
      { san: 'exd5', from: 'e4', to: 'd5', text: 'They take. You knew they would.' },
      { san: 'Qxd5', from: 'd8', to: 'd5', text: 'Queen takes back on move two. Coaches hate it. You love it.', say: '"The queen goes where she wants."' },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'They chase your queen and gain time. Fine.' },
      { san: 'Qa5', from: 'd5', to: 'a5', text: 'Queen slides to a5. Safe. Still dangerous.', say: '"Not a retreat. A repositioning."' },
      { san: 'd4', from: 'd2', to: 'd4', text: 'They build a big center. Big things fall hard.' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'Develop. Eye d5.' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'They develop.' },
      { san: 'c6', from: 'c7', to: 'c6', text: 'Give your queen a hideout on c7.' },
      { san: 'Bc4', from: 'f1', to: 'c4', text: 'Their bishop eyes f7. Bold. You invented bold.' },
      { san: 'Bf5', from: 'c8', to: 'f5', text: 'Bishop out BEFORE ...e6 locks it in. Classic viking trick. Raid time.', say: '"All pieces ashore. Pillage."' }
    ]
  },

  {
    id: 'fried-liver',
    name: 'The Fried Liver Attack',
    persona: 'The Berserker',
    title: 'Chef of Charred Kings',
    avatar: 'wojaks/rager.svg',
    difficulty: 3,
    userSide: 'w',
    description: 'Be a berserker. Sacrifice your knight and cook their king.',
    intro: 'You are the berserker. They play Two Knights. You smell dinner.',
    victory: 'King cooked. Medium rare.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: 'Fire on.', say: '"PREHEAT."' },
      { san: 'e5', from: 'e7', to: 'e5', text: 'They answer normally. They are an ingredient now.' },
      { san: 'Nf3', from: 'g1', to: 'f3', text: 'Knight out.' },
      { san: 'Nc6', from: 'b8', to: 'c6', text: 'They defend.' },
      { san: 'Bc4', from: 'f1', to: 'c4', text: 'Bishop aims at f7. You lick your lips.', say: '"I smell liver."' },
      { san: 'Nf6', from: 'g8', to: 'f6', text: 'Two Knights Defense. They think they attack. This is a cookbook.' },
      { san: 'Ng5!?', from: 'f3', to: 'g5', text: 'Knight jumps in. f7 is doomed. Subtle as a house fire.', say: '"KNOCK KNOCK."' },
      { san: 'd5', from: 'd7', to: 'd5', text: 'They block. Exactly what the recipe wants.' },
      { san: 'exd5', from: 'e4', to: 'd5', text: 'You take. Their knight is attacked.' },
      { san: 'Nxd5?!', from: 'f6', to: 'd5', text: 'They recapture — the famous mistake. 500 years of pain follow.' },
      { san: 'Nxf7!?', from: 'g5', to: 'f7', text: 'THE FRIED LIVER. Knight dives onto f7. It will die. It does not care.', say: '"DINNER IS SERVED."' },
      { san: 'Kxf7', from: 'e8', to: 'f7', text: 'Their king takes. Their king is now standing in the kitchen.' },
      { san: 'Qf3+', from: 'd1', to: 'f3', text: 'CHECK. Queen hits king AND knight. Their king must walk forward.', say: '"Walk into the light."' },
      { san: 'Ke6', from: 'f7', to: 'e6', text: 'A king. On e6. On move eight. Incredible.' },
      { san: 'Nc3', from: 'b1', to: 'c3', text: 'Just develop. Your whole army joins the chase. Cook them.', say: '"You are not losing. You are being served."' }
    ]
  },

  {
    id: 'bongcloud',
    name: 'The Bongcloud',
    persona: 'The Enlightened One',
    title: 'Grandmaster of Vibes',
    avatar: 'wojaks/galaxy.svg',
    difficulty: 5,
    userSide: 'w',
    description: 'Be enlightened. Move your king on move two. Ascend.',
    intro: 'You are enlightened. You need no development. Only e2.',
    victory: 'Perfect symmetry. Total enlightenment. It is a draw. It was always a draw.',
    moves: [
      { san: 'e4', from: 'e2', to: 'e4', text: 'A normal move. An illusion.', say: '"Observe."' },
      { san: 'e5', from: 'e7', to: 'e5', text: 'They mirror you. Unaware.' },
      { san: 'Ke2!!', from: 'e1', to: 'e2', text: 'The Bongcloud. King forward. No fear. No castling. No doubt.', say: '"The king leads from the front."' },
      { san: 'Ke7!!', from: 'e8', to: 'e7', text: 'They mirror you. The Double Bongcloud. Perfect balance. You may cry.', say: '"A worthy opponent. We are done here."' }
    ]
  }
];
