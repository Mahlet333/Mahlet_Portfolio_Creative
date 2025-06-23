import React from 'react';

const MFFStory = () => (
  <div className="prose prose-invert max-w-none text-lg text-gray-300">
    <p>
      Alright, let's sit down together, you and me, over a virtual coffee, and dive into the whirlwind of creating "I Thought I Came Here to Study (But the Campus Studied Me)" for the Summer 2025 Communications Lab at NYU. I'm Mahlet Atrsaw, and this solo project was my chance to pour my heart, soul, and coding grit into a web platform that's more than just a film holder—it's a reflective, immersive experience that pulls you into the unsettling vibe of a university campus watching you. I'm talking to you—my professors, classmates, and anyone who's ever felt a spark to tell a story through tech. This is a deep dive into my thought process, the technical creativity I unleashed, the problems I wrestled, and the dialogues in my head that shaped it all. Picture us brainstorming late at night, and I'll walk you through every "aha!" moment, every frustration, and how I made this site feel like the campus itself. This is gonna be a long, raw, and interactive ride—grab a snack, and let's get into it! What's a place that's ever made you feel watched? Let's see if this resonates.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">Hey, Let's Build a Campus That Watches You!</h3>
    <p>
      You ever walk through a university campus, feeling like the buildings, the lecture halls, even the pathways are sizing you up? That's where "I Thought I Came Here to Study (But the Campus Studied Me)" came from—a short film and web platform I built solo for Dr. Evi Mansor's Communications Lab in Summer 2025. The film explores how NYU's campus shapes your identity, observes your every move, and leaves you questioning who you are. The website? It's not just a container—it's an extension of that eerie, introspective vibe, with sections like a Landing Page, Film, Analysis carousel, Trace input, and Filmmaker bio that pull you into the story. I'm gonna take you through the chaos of my creative process, the technical wizardry I leaned into, and the problem-solving marathons that made this project sing. Think of this as us geeking out together—me sharing my late-night rants, you nodding along, maybe even sparking ideas for your own projects. Ready? Let's dive in and make you feel like you're coding and dreaming alongside me. What's a space that's shaped you? Drop it in the comments later!
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">The Spark: A Campus That's Alive</h3>
    <p>
      It started one evening on campus, walking through NYU's Washington Square. The arch loomed, the library's windows glinted, and I thought, "This place isn't just bricks—it's watching me." In my head, a student's voice—my voice—whispered, "I came to learn, but this campus is studying my every step." That was the seed: a film about how spaces shape us, paired with a website that makes you feel it. I imagined you, the user, pausing to type in the Trace section, maybe writing, "The campus stole my confidence." I wanted the site to be quiet, dark, and heavy, like the film's mood, with interactive bits to make you think, "Whoa, I'm part of this." My first "aha!" was realizing the website could mirror the film's surveillance vibe—minimal, structured, but intense. Ever felt a place get under your skin? That's what I wanted you to feel.
    </p>
    <p>
      I sketched the site's flow: a Landing Page with a parallax hero image, a Film section for the embedded YouTube video, an About section for context, an Analysis carousel breaking down scenes, a Trace section for your reflections, a Filmmaker bio, and a Farewell screen with a progress bar. In my dorm, I muttered, "This has to feel like the campus—structured but unsettling." I chose a dark #18181b background to evoke that late-night campus hush, with #f59e42 orange-yellow accents for moments of defiance, like the student pushing back. The "aha!" was picturing the Trace section: you typing a single word, like "fear," and feeling seen. What word would you type about a place that's shaped you? That's the vibe I chased.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">Tech Creativity: Crafting the Digital Campus</h3>
    <p>
      Building this solo meant I was director, coder, and debugger all in one. I used semantic HTML, SCSS, and vanilla JavaScript—no frameworks, just raw code to keep it mine. The Landing Page was my first love. I wanted a parallax background (landing.png) that moved subtly as you scrolled, like the campus shifting under your gaze. I coded:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.landing {
  background: url('landing.png') no-repeat center;
  background-attachment: fixed;
  background-size: cover;
}`}
    </code></pre>
    <p>
      Testing it, I grinned, "It's alive!" But on mobile, the parallax broke—too heavy. I swapped it for a static image at 575px with a media query:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`@media (max-width: 575px) {
  .landing {
    background-attachment: scroll;
  }
}`}
    </code></pre>
    <p>
      That was my first "aha!"—making the campus feel dynamic yet accessible. Ever tweaked a design to feel just right? That was my high.
    </p>
    <p>
      The Analysis carousel was where I got creative. I wanted it to break down film scenes with a glitch text effect, mimicking the campus's fractured gaze. I used CSS animations:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.glitch {
  animation: glitch 0.3s infinite;
}
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
}`}
    </code></pre>
    <p>
      When the text flickered on my screen, I was like, "This is the campus's stare!" But it lagged on low-end devices. I optimized with will-change: transform and reduced keyframes, cutting render time. That fix felt like cracking a code—pure thrill. What's a tech trick you've pulled off that made you pump your fist?
    </p>
    <p>
      The Trace section was my heart. I coded an input field where you type one word about what the campus "stole." I imagined you typing "sleep," echoing my late-night coding sessions. The JavaScript was simple but powerful:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const traceInput = document.getElementById('trace-input');
traceInput.addEventListener('input', (e) => {
  const word = e.target.value;
  localStorage.setItem('trace', word);
});`}
    </code></pre>
    <p>
      Seeing my test word "doubt" persist across refreshes was a quiet "aha!"—it felt like the site was listening. Ever built something that felt personal? That was Trace for me.
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">Problem-Solving: Wrestling the Bugs</h3>
    <p>
      The biggest beast was responsiveness. At 767px, the navigation bar overflowed, and I was like, "This is a disaster!" I debugged with Chrome's DevTools, spotting a flexbox issue. I added:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.nav {
  flex-wrap: wrap;
  gap: clamp(10px, 2vw, 15px);
}`}
    </code></pre>
    <p>
      Testing on my phone, it snapped into place, and I cheered, "Take that, breakpoints!" The Analysis section had text overflow at 575px. I ranted, "Why does mobile hate me?" I fixed it with:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.analysis-text {
  overflow-wrap: break-word;
  max-width: 100%;
}`}
    </code></pre>
    <p>
      Another "aha!" was the modal windows for scene details. Early versions flickered on click. I traced it to a z-index clash and set:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.modal {
  z-index: 1000;
}`}
    </code></pre>
    <p>
      Audio integration was tricky too—the YouTube iframe auto-played over ambient sound. I added a mute toggle:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const ambientAudio = document.getElementById('ambient');
const videoPlayer = document.getElementById('film-player');
videoPlayer.addEventListener('play', () => {
  ambientAudio.pause();
});`}
    </code></pre>
    <p>
      That sync was a game-changer. Ever fixed a bug that felt like winning a war? That was my summer.
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">Documentation: My Lifeline</h3>
    <p>
      Documentation kept me sane. I commented every file like a diary. In filmData.ts, I wrote:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`// FILM_SCENES: Array of objects with whatYouSaw, theme, missedDetail, reflection
const FILM_SCENES = [
  { id: 1, whatYouSaw: 'Lecture hall', theme: 'Observation', ... }
];`}
    </code></pre>
    <p>
      In script.js, I detailed every function:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`// handleCarousel: Updates Analysis carousel position
function handleCarousel(direction) { ... }`}
    </code></pre>
    <p>
      When I revisited code at 2 a.m., those comments were like breadcrumbs. I also used Git, committing with messages like "Fixed modal flicker" or "Optimized 575px layout." A merge conflict once made me groan, "Not now!" but I resolved it line-by-line. Ever leaned on docs to save your project? That was my anchor.
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">The Win: A Site That Feels Alive</h3>
    <p>
      When the site launched at [30MFF link], it was magic. Users said the glitch effect felt "like the campus glitching into my brain." The Trace section got responses like "anxiety" and "time," and I was like, "They're feeling it!" It worked on every device, loaded in under 2 seconds, and the carousel slid like butter. My biggest "aha!" was a friend saying, "I typed 'pressure' in Trace—it's like the site knew me." That's when I knew I'd built a digital campus that watched you back. What's a project you've made that felt alive? Share it below—I'm all ears!
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#f59e42]">What's Next, and Your Turn!</h3>
    <p>
      I'm dreaming big for this project. I want to add ARIA roles, picturing a blind user saying, "This is so accessible!" A JSON backend could make updates seamless, and I'm like, "This could scale to millions!" Maybe I'll add more interactive prompts in Trace, letting you write full sentences. But what about you? What story's burning in your heart? Maybe it's a website or a film. My tip: sketch it, code it, test it, and don't fear the bugs—they're your teachers. Check out [30MFF link] and try the Trace section—what word would you type? Drop a comment with your story ideas or a place that's shaped you. Let's keep this convo alive!
    </p>

  </div>
);

export default MFFStory; 