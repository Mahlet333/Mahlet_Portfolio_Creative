import React from 'react';

const AfternoonNapStory = () => (
  <div className="prose prose-invert max-w-none text-lg text-gray-300">
    <p>
      Let's Stir Up Some Drama!
    </p>
    <p>
      Picture this: you're craving a nap, but your roommate's coffee cup is staring at you from the table, mocking your peace. That's the spark for Afternoon Nap, our interactive short film for Dr. Evi Mansor's Communications Lab. As Group 2—me, Naz, Iqra, and Afra—we wanted to take that everyday annoyance and spin it into a wild, dreamlike tale where I, playing Mahlet, spiral into a surreal fight over that cup. The film lets you decide: does Mahlet wash it or text her roommate Naz? Each choice shifts the vibe, from quiet frustration to operatic chaos. I'm here to spill the beans on how we made this happen, shining a light on our technical creativity, problem-solving hustle, and the chatter that kept us going. Think of this as a behind-the-scenes party—me sharing our highs, lows, and "aha!" moments, you vibing along, maybe even itching to make your own film. Ready to jump in? What's a small thing that's ever pushed your buttons? Share it later—let's connect!
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">The Idea: From Pet Peeve to Dreamworld</h3>
    <p>
      It all kicked off in our dorm, where I was grumbling about dishes piling up. I turned to Afra, eyes wide, and said, "What if a coffee cup becomes, like, the villain in a story?" She laughed, "That's so you, Mahlet!" In my head, Mahlet's voice was already ranting: "Naz left that cup again. I just want to nap!" We brainstormed a film where Mahlet drifts into a dream, and that cup triggers a showdown. Naz pitched the interactive twist: "Let the viewer choose—wash it or text me. It's like they're Mahlet's conscience!" That was our first "aha!"—giving you the power to steer her mood. I imagined you clicking "Text," hearing Mahlet snap, "I'm not your maid!" or choosing "Wash," with her muttering, "Why's it always me?" Either way, the dream ends in a dramatic clash, like a soap opera gone wild. Ever had a tiny annoyance feel like a movie moment? That's what we wanted to capture.
    </p>
    <p>
      We storyboarded it like a fever dream: Scene 1, Mahlet collapses on the couch, cup in view. Scene 3, the dream kicks in, with trippy zooms on the cup. Scene 5, you choose her path. Scene 7, the fight peaks with operatic music and slow-mo cup-throwing. I sketched it, giggling, "This is absurd, but it's us." Afra's storyboards added flair—doodles of Mahlet glaring, Naz dodging a flying cup. Our goal? Make you laugh, feel her frustration, and think, "I've been there." What's a fight you'd stage in a dream? That was our playground.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">Tech Creativity: Filming the Chaos</h3>
    <p>
      Filming was where our creativity went full throttle. We used a BlackMagic Pocket Cinema Camera 4K, aiming for crisp, dreamy visuals. I told Naz, our cinematographer, "Let's open with a tracking shot, like Mahlet's gliding into sleep." We didn't have a dolly, so we rigged a dorm trolley. I pushed it, whispering, "Smooth, smooth..." but the floor was bumpy. After five shaky takes, I groaned, "This trolley's got beef with us!" Afra suggested layering fabric under the wheels, and—boom!—it glided. That was a huge "aha!"—a low-budget fix that saved our shot. Ever MacGyvered a solution on set? That was our vibe.
    </p>
    <p>
      Lighting was my baby. I wanted the nap scene soft, like a cozy haze, using a diffused LED panel at 3200K. The dream scenes? Harsh, with blue gels for an eerie glow. I fiddled with the camera's ISO, settling at 800 for balance. During the fight scene, I called, "Cue the slow-mo!" and Naz cranked the frame rate to 60fps. Watching playback, with me tossing the cup in slo-mo, I cheered, "We're making cinema!" But the 80GB of 422 ProRes footage was a beast. Editing in DaVinci Resolve lagged my laptop, and I whined, "Why didn't we shoot 1080p?" Iqra suggested proxy files, and suddenly, we were flying. That switch was pure genius—our "aha!" for post-production. What's a tech trick you've pulled off under pressure?
    </p>
    <p>
      Sound design was where I got artsy. I recorded Mahlet's voiceovers, channeling her sass: "This cup's mocking me." For Afra's opera aria in the fight, I sourced "Casta Diva" from Pixabay, fading it in as the cup flies. Ambient sounds—couch creaks, coffee drips—grounded it in reality. In Audacity, I layered a heartbeat for Scene 5's choice moment, syncing it to Mahlet's tense pause. When Naz's ghost voice says, "It's my cup!" I added reverb for that dreamlike echo. A glitch made the heartbeat overpower, so I trimmed it to 0.4s crossfades. Hearing it sync perfectly, I thought, "This is tension!"—another "aha!" moment.
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">The Website: Your Ticket to the Drama</h3>
    <p>
      Our website, coded with in HTML, CSS, and JavaScript, was our stage for the film. I wanted it to feel like Mahlet's dream—dark, moody, with pops of playfulness. I picked a #000000 palette with black, #ffffff, white, and #4a90e2 for the "Watch" button, saying, "It's gotta pop like Mahlet's attitude!"* Iqra built wireframes in Figma, and I pushed for Arial font: "It's clean, it's chill, like our vibe." The layout used Flexbox, CSS Grid for the video player and choice buttons, with media queries at 700px, 900px, and 576px and 1024px. I coded a hover effect for the buttons:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`.watch-button {
  background-color: #4a90e2;
  transition: transform 0.2s;
}
.watch-button:hover {
  transform: scale(1.05);
}`}
    </code></pre>
    <p>
      When it bounced on hover, I was like, "That's so fun!"—a That's design "aha!" moment. Accessibility was key: we added ARIA labels like aria-label="Choose to wash the cup"" for screen readers. Testing at 700px, the player buttons stacked messily, weirdly. I sighed, "Mobile's betraying us!" I fixed it with:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`@media (max-width: 720px) {
  .controls {
    flex-direction: column;
    gap: 10px;
  }
}`}
    </code></pre>
    <p>
      Seeing it work on Naz's tablet, I was like, "We're smooth operators!"
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">JavaScript: You Shape the Story</h3>
    <p>
      JavaScript made the site interactive. I coded the choice buttons to load different scenes:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const washButton = document.getElementById('next-button');
washButton.addEventListener('click', () => {
  loadScene('scene-wash');
});`}
    </code></pre>
    <p>
      A bug sent users to the wrong scene, and I was like, "This is sabotage!" I built a state manager:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const state = {
  currentScene: 'home',
  userChoice: null
};`}
    </code></pre>
    <p>
      Testing showed lag, on the scene switch, so I optimized with event delegation:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`document.addEventListener('click', (e => {
  if (e.target.classList.contains('choice-button')) {
    loadScene(e.target.dataset.scene);
  }
}));`}
    </code></pre>
    <p>
      When it loaded instantly, I thought, "I'm a coding rockstar!"—our That biggest "aha!" for interactivity. Ever coded a feature that felt like magic?
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">Challenges: Laughing Through the Pain</h3>
    <p>
      Filming was a comedy of errors. The trolley wobbled, and I joked, "This is our villain!" Naz's steady hands and Afra's fabric fix saved us. Editing was brutal—80GB footage crashed Resolve. Iqra's proxy idea was a lifeline, but syncing voiceovers took hours. I muttered, "This heartbeat's out of rhythm!" Trimming in Audacity fixed it. The website's 900px layout broke once, and I ranted, "Why's CSS so petty?" Debugging with DevTools showed a margin clash; I set margin: auto and it clicked. GitHub kept us sane—I committed "Fixed 900px bug" while Naz pushed "Updated wireframes." A merge conflict had us giggling, "Code's fighting us!" but we sorted it. Ever laughed through a project mess? That was our glue.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">The Win: A Film That Feels Like You</h3>
    <p>
      When Afternoon Nap launched at [Afternoon Nap link], users loved it. They said the opera fight was "hilariously epic," and choosing "Text" felt "so real." The site worked on every device, loaded fast, and let you replay paths. My biggest "aha!" was a classmate saying, "I chose 'Wash' and felt Mahlet's grudge—I've been there!" We'd made a film that wasn't just watched but lived. What's a choice you've made that felt heavy? Share it below!
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#4a90e2]">What's Next, and Your Turn!</h3>
    <p>
      We're dreaming big. I want pro dolly shots, imagining Mahlet's walk as slick as her sass. More ARIA roles could make it super accessible, picturing a user saying, "This rocks!" A JSON backend could add scenes, and I'm like, "This could go viral!" But you—what's your story? Maybe a film or a site. My tip: dream wild, test hard, laugh at the bugs. Check out [Afternoon Nap link] and pick a path—what's your choice? Drop a comment with your pet peeve or a story idea. Let's keep this party going!
    </p>
  </div>
);

export default AfternoonNapStory; 