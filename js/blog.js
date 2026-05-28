/* ── BLOG MODAL ── */
const BLOG_DATA = {
  blog1: {
    img: 'images/blog/blog1-openings.jpg',
    cat: 'Openings',
    title: '5 Openings Every Beginner Must Learn First',
    date: 'Apr 10, 2026',
    author: 'Ankit',
    content: `
      <p>One of the first things new students ask me is: "Which opening should I learn?" And honestly, it's the wrong question — but I get why they ask it. So let me answer the right version of it.</p>
      <p>You don't need 20 openings. You need 5 solid ones that teach you <em>how to think</em> in the opening, not just what moves to play. These are the ones I give every new student on day one.</p>

      <h4>1. The Italian Game (e4 e5 Nf3 Nc6 Bc4)</h4>
      <p>This is where we start everyone. Every move does something logical — you're developing pieces, controlling the centre, preparing to castle. It also throws up a lot of early tactical traps, so students learn very quickly what happens when you stop paying attention. Great teacher.</p>

      <h4>2. The London System (d4 + Bf4 + e3)</h4>
      <p>If you're someone who hates memorising theory, this is your opening. The structure is almost always the same regardless of what your opponent does. You build your position calmly and let them make mistakes. Some students fall in love with it and never leave.</p>

      <h4>3. The Sicilian Defense (e4 c5)</h4>
      <p>Most beginners just mirror whatever White does. The Sicilian teaches you that you can fight back — aggressively — right from move one. It's the most played response to e4 at every level from beginner to World Championship. There's a reason for that.</p>

      <h4>4. The French Defense (e4 e6)</h4>
      <p>I've had students who've used the French for ten years and still find new ideas in it. It teaches patience, pawn structure, and long-term planning — things that separate good players from great ones. Several of our district-level winners are French Defense specialists.</p>

      <h4>5. The Queen's Gambit (d4 d5 c4)</h4>
      <p>Once you're comfortable with e4 games, you need to understand d4 chess too. The Queen's Gambit shows up everywhere. Understanding it — even just the basic ideas — immediately makes you a more complete player on both sides of the board.</p>

      <p>One thing I tell every student: don't memorise the moves. Understand why each move is played. The moves you memorise will be forgotten by next week. The ideas stick for life.</p>
    `
  },
  blog2: {
    img: 'images/blog/blog2-tactics.jpg',
    cat: 'Tactics',
    title: 'Pins, Forks & Skewers — The 3 Tactics That Win Most Games',
    date: 'Mar 22, 2026',
    author: 'Minu Gupta',
    content: `
      <p>I've watched hundreds of beginner games. And I can tell you — most of them are decided not by brilliant plans or deep strategy. They're decided by three patterns that one player saw and the other didn't.</p>
      <p>Learn these three. Genuinely learn them. And your results will change almost immediately.</p>

      <h4>The Pin</h4>
      <p>A pin is when you attack a piece that can't move — because if it moves, something more valuable behind it gets taken. The most brutal version is pinning against the King: that piece is legally stuck. I see beginners walk right past pin opportunities every single session. Once you train your eye to spot them, you can't unsee them.</p>

      <h4>The Fork</h4>
      <p>One piece, two targets, your opponent can only save one. Knights are absolutely terrifying forking pieces — their L-shaped jump is hard to see coming. The classic: knight jumps in with check, also attacking the Queen. Your opponent deals with the check, you take the Queen. Simple as that, but deadly.</p>

      <h4>The Skewer</h4>
      <p>Think of it as a pin in reverse. You attack the King or Queen directly, it has to move, and you take whatever was hiding behind it. Rooks and bishops do this best, especially in endgames when there are fewer pieces to block. Students who learn skewers start winning endgames they used to draw or lose.</p>

      <p>Here's what I tell my students: go to Lichess, filter the puzzle section by these three patterns, and do 15 minutes every day. Don't rush. Understand each one before you move on. After a month of this, you will start seeing these patterns mid-game without even trying — your brain just starts picking them up automatically.</p>
      <p>That's when it gets fun.</p>
    `
  },
  blog4: {
    img: 'images/blog/blog3-psychology.jpg',
    cat: 'Psychology',
    title: 'How to Stay Calm in a Losing Position — Tournament Tips',
    date: 'Feb 14, 2026',
    author: 'Sanskar Agrawal',
    content: `
      <p>I've seen it happen in almost every tournament. A student gets into a bad position, panics, and then plays the next five moves in two minutes. The game is gone before they even give themselves a chance.</p>
      <p>The position was difficult. The collapse was optional.</p>
      <p>Here's what I've taught our students to do when the game is going against them.</p>

      <h4>Stop thinking about the result. Start thinking about the problem.</h4>
      <p>The moment you start thinking "I'm losing this game," you've already half-quit. Flip it: "This is a hard position. What's the toughest move I can give my opponent?" That mental shift is small but it changes everything. Defence becomes a puzzle to solve, not a punishment to endure.</p>

      <h4>Forget the last move. It's gone.</h4>
      <p>The blunder happened. Sitting at the board replaying it in your head helps nobody. Strong players have an almost ruthless ability to move on — the position on the board right now is the only one that matters. Train yourself to do the same.</p>

      <h4>Make your opponent work for it.</h4>
      <p>Even in losing positions, your job is to create problems. Set traps. Create complications. Make the path to victory as difficult as possible. I've seen students save games that looked completely hopeless — not because the position was fine, but because they refused to make it easy. And sometimes the opponent, feeling the pressure, cracks first.</p>

      <h4>Use your clock — don't throw it away.</h4>
      <p>Losing players often play fast, as if they just want it to be over. That's exactly what your opponent wants. Slow down. Think. Every minute on your clock is a resource. Use it.</p>

      <h4>Breathe. Seriously.</h4>
      <p>Between moves, look away from the board. Take one slow breath. Roll your shoulders if they're tight. It sounds too simple to matter — but it works. The emotional fog lifts. You start seeing the board again instead of just your anxiety.</p>

      <p>The players who win tournaments aren't always the ones who make the best moves. They're often the ones who hold themselves together when things go wrong. That's a skill. And like any skill, it can be trained.</p>
    `
  },
  blog5: {
    img: 'images/blog/blog4-kids-age.jpg',
    cat: 'Kids & Parents',
    title: 'What Age Should Your Child Start Learning Chess?',
    date: 'Jan 28, 2026',
    author: 'Ankit',
    content: `
      <p>The question I get asked most by parents — before they even ask about fees or timings — is this: "Is my child too young? Or have we already missed the window?"</p>
      <p>The honest answer is: there's no bad age to start. But the approach has to match the child. Let me tell you what actually works at different stages, based on years of teaching kids across all age groups.</p>

      <h4>Age 5–6: Make it a story, not a lesson</h4>
      <p>Young children can absolutely learn chess — but the moment it feels like homework, you've lost them. At this age we teach through storytelling. The King lives in a castle. The pawns are his guards. The Queen is the most powerful piece on the board — she goes wherever she wants. Sessions are short, maybe 20–25 minutes, and we never push. The goal at this age is simple: they should want to come back next week.</p>

      <h4>Age 7–9: This is the sweet spot</h4>
      <p>Something clicks around this age. The concentration is there, the curiosity is high, and their brains are still incredibly fast at absorbing patterns. Students who start here and train consistently — even just twice a week — often hit competitive level within two years. I've seen it more times than I can count. If your child is in this range, don't wait.</p>

      <h4>Age 10–12: Not late at all</h4>
      <p>Parents sometimes come to me apologetically at this age, as if they've already missed something. They haven't. Several of our strongest tournament players started at 10 or 11. At this age kids can handle proper structured training — opening ideas, game analysis, strategic thinking. And because they understand concepts faster, progress can actually be quicker than with younger kids.</p>

      <h4>What you can do at home</h4>
      <p>Play casual games with them. Don't correct every move. Let them try things. Celebrate when they spot something clever, not just when they win. Chess is a long game — the students who are still playing five years from now are almost always the ones who felt supported early on, not pressured.</p>
    `
  },
  blog6: {
    img: 'images/blog/blog5-mistakes.jpg',
    cat: 'Beginners',
    title: '7 Common Mistakes Every Chess Beginner Makes (And How to Fix Them)',
    date: 'Jan 5, 2026',
    author: 'Sanskar Agrawal',
    content: `
      <p>After coaching for as long as I have, patterns start to jump out at you. And the mistakes beginners make? They're almost always the same ones. Same errors, different students, year after year.</p>
      <p>The good news: they're all fixable. Here's what I see constantly, and what to do about each one.</p>

      <h4>1. Moving the same piece twice in the opening</h4>
      <p>You develop a knight, your opponent threatens it, you move it again. Now you've used two moves on one piece while they've developed two different pieces. You're already behind. The rule I give students: unless you're losing a piece for nothing, don't move the same piece twice before you've developed everything else.</p>

      <h4>2. Queen out too early</h4>
      <p>The Queen is your most powerful piece, and beginners treat her like a weapon to deploy immediately. But every time your opponent chases her with a pawn or a minor piece, they develop for free while you retreat. Your Queen ends up running around doing nothing. Bring her out after your knights and bishops are placed.</p>

      <h4>3. Forgetting to castle</h4>
      <p>I've seen students reach move 20 with their King still sitting in the middle of the board, wondering why everything collapsed. Castling isn't just about safety — it also connects your rooks. Make it a habit. If you haven't castled by move 10, ask yourself why.</p>

      <h4>4. Playing without any plan</h4>
      <p>Just moving to whatever square looks good in the moment is not chess — it's hoping. Before every move, ask yourself: what am I trying to do in the next 2–3 moves? The plan doesn't have to be brilliant. Even a simple one beats having none.</p>

      <h4>5. Taking every piece that's available</h4>
      <p>Beginners see a piece they can take and they take it. Without asking what comes back. Every capture needs a check — not just "can I take it?" but "what can they take after?" Sometimes the trade is fine. Sometimes you're handing them a winning position for a pawn.</p>

      <h4>6. Pushing pawns without thinking</h4>
      <p>Pawns can't go back. Every time you push one, that square behind it is weakened forever. Students learn this the hard way — after an opponent plants a knight on the square you just created and you can't shift it. Think before you push.</p>

      <h4>7. Mentally giving up after one blunder</h4>
      <p>This one might be the most damaging of all. A student drops a piece, and suddenly they're playing carelessly, almost wanting the game to end. But your opponent still has to convert. Still has to find the right moves. I've seen games saved from positions that looked hopeless — because one player kept fighting and the other didn't.</p>

      <p>Don't work on all seven at once. Pick one. Focus on it for a week. Then move to the next. That's how you actually improve.</p>
    `
  },
  blog7: {
    img: 'images/blog/blog6-chess-parent.jpg',
    cat: 'Kids & Parents',
    title: 'Dear Chess Parent: Let Your Child Play',
    date: 'May 20, 2026',
    author: 'Ankit',
    content: `
      <p>Every weekend I see the same thing. Parents walking into tournament halls with their kids — new chess set, nervous smiles, water bottles and snacks carefully packed. The excitement is real. But so is the anxiety. And after the games? Sometimes I see a child crying on the way out. Not because they lost. Because of what their parent said after they lost.</p>

      <p>I've been coaching at Gupta Chess Academy for years now. I'm also a father of two daughters who play chess. So I've sat on both sides of this. I know exactly what that parental nervousness feels like — that desperate, helpless feeling of watching your child struggle and not being able to do anything. It comes from love. I get it.</p>

      <p>But I need to say something, and I'm going to say it directly.</p>

      <p>There's a pattern I've watched repeat itself more times than I can count. A child wins their first tournament. Big celebration, photos, everyone's thrilled. And then — quietly, without anyone really noticing — everything changes. The expectations go up. The child starts feeling it. And that same kid who used to grab the chess pieces with excitement is now sitting across the board with something else entirely: <strong>fear</strong>.</p>

      <p>One win doesn't mean they'll win every tournament from here on. Chess doesn't work like that. When we act disappointed after a loss — through harsh words, through silence, through <em>that look</em> — we're not motivating them. We're slowly killing their relationship with the game.</p>

      <p>Ask yourself honestly: do you want your child playing chess six months from now, or sixty years from now?</p>

      <h4>Chase Excellence, Not the Rating</h4>
      <p>You remember <em>3 Idiots</em>, right? "Chase excellence, success will follow." Don't run after marks — run after actually understanding something, and the marks sort themselves out. Chess is exactly this.</p>
      <p>Stop watching the rating like it's a stock price. It'll go up, it'll go down, that's just how the game works. A rating is a snapshot — one moment, one tournament, one bad day or good day. It's not a report card on your child's intelligence or potential or worth as a human being.</p>
      <p>What actually matters is whether they're understanding the game better than they did last month. Are they starting to see why a plan fails? Are they learning to stay calm when things go wrong on the board? That's the stuff that compounds. That's what eventually shows up in the rating anyway — but only if you let it grow naturally, without strangling it with pressure.</p>

      <h4>Chess Is a Mirror of Life</h4>
      <p>Here's something I tell parents all the time. Chess is basically driving a car. When you drive, you're not just staring straight ahead — you're checking your left mirror, your right mirror, glancing back. You're tracking everything around you before you make a move. Chess is identical. You can't just think about what you want to do. You have to figure out what your opponent is trying to do and factor that in. Kids who learn this on the chessboard start doing it automatically in real life too. It sneaks into how they think.</p>
      <p>And setbacks — in chess, sometimes the right move is to pull a piece back. Retreat it. Regroup. Parents sometimes see this and think their child is losing ground. But half the time it's the beginning of a much better plan. The piece comes back stronger, better positioned. That's not weakness. That's how the game is actually played. Same with life. Stepping back isn't the same as giving up.</p>

      <h4>What's Actually Happening Inside Their Head</h4>
      <p>Next time you're watching your child at the board and they miss something obvious — something you could see from five metres away — I want you to think about what's actually happening inside their head in that moment.</p>
      <p>They're managing the clock. They're managing their emotions after the last mistake. They're physically uncomfortable from sitting still for two hours. They're trying to calculate four moves ahead. And somewhere in all of that, they're also wondering whether you're going to be disappointed in them.</p>
      <p><strong>That last one. Don't underestimate it.</strong></p>
      <p>When we do post-game analysis and lead with <em>"how did you miss that?!"</em> — we're judging the output without understanding any of the process. The move was missed because they're still learning to hold all of those things together at once. That's not failure. That's just what chess development actually looks like from the inside.</p>

      <h4>What I'm Asking of You</h4>
      <p>After the game — win or lose — don't make the first thing about chess. Just say something like: <em>"I'm proud of you. Are you hungry? Let's go eat something."</em></p>
      <p>The analysis can happen later, calmly, when everyone's settled down. The lesson lands better that way anyway. But more than the lesson, more than the analysis — your child needs to know that your love for them is not conditional on whether they won today.</p>
      <p>When kids feel that, really feel it, they play differently. They play freely. And free players find their best chess eventually. The ratings follow. The trophies follow. All of it follows.</p>
      <p>But it starts with letting them love the game first.</p>

      <p style="margin-top:24px;font-style:italic;color:var(--gold);">— Founder, Gupta Chess Academy, Bengaluru &nbsp;|&nbsp; Coach &nbsp;|&nbsp; FIDE Arbiter &nbsp;|&nbsp; Chess Parent</p>
    `
  }
};

function openBlog(id) {
  const d = BLOG_DATA[id];
  if (!d) return;
  document.getElementById('bm-img').src = d.img;
  document.getElementById('bm-img').alt = d.title;
  document.getElementById('bm-cat').textContent = d.cat;
  document.getElementById('bm-title').textContent = d.title;
  document.getElementById('bm-meta').innerHTML = '<span>📅 ' + d.date + '</span><span>👤 ' + d.author + '</span>';
  document.getElementById('bm-content').innerHTML = d.content;
  document.getElementById('blog-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal(e) {
  if (e && e.target !== document.getElementById('blog-modal-overlay')) return;
  document.getElementById('blog-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBlogModal();
});
