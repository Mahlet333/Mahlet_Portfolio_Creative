import React from 'react';

const TemptationStory = () => (
  <div className="prose prose-invert max-w-none text-lg text-gray-300">
    <p>
      You ever wake up before dawn, your alarm screaming, but your bed's whispering, "Stay here, it's warm"? That's where "Temptation" was born—a sound-based interactive narrative I crafted with Enock Mecheo and Ahmad Hijazi for Dr. Evi Mansor's Communications Lab. It's about a guy at 6 a.m., torn between his call to pray and the seductive pull of sleep. We wanted you, the listener, to feel his struggle, like you're in his head, hearing every doubt and divine nudge. I'm gonna take you through every step of this project, from the spark in my brain to the final website, focusing on how I flexed my technical creativity and tackled problems like a puzzle master. Think of this as us geeking out together—grab a snack, and let's talk about how we made sound tell a story, code come alive, and a website feel like a spiritual journey. Ready to join me? What's a moment in your life where you felt torn—let's see if "Temptation" resonates!
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">The Spark: A Sound That Feels Like a Soul</h3>
    <p>
      It all started one groggy morning in my dorm. I hit snooze, and my mind wandered: "What if this moment—wanting to pray but craving sleep—was a story?" I pictured a guy, half-awake, his thoughts battling. In my head, he muttered, "It's Sunday… I should pray." But a darker voice crept in, like a shadow: "Sleep, you're too tired." I bolted upright, thinking, "We can make this a sound story!" I pitched it to Enock and Ahmad: "Let's use audio to pull people into his soul—bird chirps for calm, whispers for doubt, a church bell for hope." They were in, and we decided to make it interactive, letting you choose his path: pray or sleep. My big "aha!" was realizing sound could be the star. I imagined Satan's voice so close it gave you chills, and God's voice warm, like a hug. Ever heard a sound that gave you goosebumps? That's what I was chasing.
    </p>
    <p>
      We storyboarded ten scenes, each a sonic snapshot. Scene 1: birds chirping, him snoring, setting the dawn vibe. Scene 4: a faint church bell, him whispering, "Is that the bell?" Scene 6: Satan's creepy voice, "Just sleep…" with a low rumble. Scene 8: God's voice, "You're enough," with angelic choir tones. I sketched it out, muttering, "Every sound needs to hit like a punch." We used Audacity to layer it all, and I spent hours tweaking Satan's whisper with reverb to feel invasive. When I played it back and shivered, I was like, "Yes, that's the vibe!" How would you make a sound feel evil or holy? That was my creative playground.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">Tech Creativity: Building the Audio World</h3>
    <p>
      The sound design was where my technical creativity kicked into high gear. Recording voices was step one. I played the narrator, framing the story with a calm, reflective tone. For the main character, I channeled raw emotion, letting my voice shake as he says "God, help me!" in Scene 7. Satan's voice was my favorite—I lowered my pitch, added distortion, and whispered so close to the mic it felt like he was in your ear. God's voice was softer, layered with a choir effect from Pixabay's "Gentle Choir of Angels." I was like, "This needs to feel like light breaking through." Ambient sounds were key: I recorded my own alarm clock, sourced birdsong, and found a church bell that echoed just right. The heartbeat in Scene 7? I tapped my desk rhythmically, then amplified it. My dorm was a sound studio, and I was geeking out, thinking, *"I'm building a world with audio!"*
    </p>
    <p>
      Editing in Audacity was a puzzle. I layered tracks like a DJ, ensuring the bell in Scene 4 didn't drown out the narrator's "His mind says stay in bed." I hit a snag when transitions felt choppy, so I added crossfades, timing them to 0.5 seconds for smoothness. My "aha!" moment was using a low-frequency rumble for Satan's scenes—it made my headphones buzz, and I grinned, "That's pure tension!" But file sizes ballooned to 200MB, slowing Audacity. I compressed tracks to MP3 at 128kbps, balancing quality and speed, muttering, "Don't you dare crash now." It worked, and I felt like a tech wizard. Ever solved a tech glitch that made you fist-pump? That was me, all day.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">The Website: A Dawn-Like Interface</h3>
    <p>
      The website was our stage, and I wanted it to feel like stepping into dawn—dark, quiet, but with glimmers of hope. We used HTML, CSS, and JavaScript, keeping it lightweight. I told Ahmad, "The homepage should be #1a1a1a, like the sky before sunrise." He mocked up wireframes in Figma, and I pushed for Creepster font for navigation: "It's eerie, like the story's mood." The layout had horizontal scrolling panels, each tied to a scene's audio. Panel 4 was the big moment—you choose "Pray" or "Sleep," branching to different endings. I imagined you clicking "Pray," hearing God's voice, and feeling relief. What would you choose in that moment?
    </p>
    <p>
      My technical creativity shone in the CSS. I used Flexbox for panel alignment and CSS Grid for the audio controls, ensuring they stayed centered. I added fade-in animations for panels, coding transition: opacity 0.3s to mimic the story's pacing. Media queries at 480px, 768px, and 1024px made it responsive, but mobile was tricky—panels overlapped at 480px. I was like, "This is a mess!" I tweaked width: 100% and padding: clamp(10px, 2vw, 20px), testing on my phone until it flowed. The "aha!" was seeing it work on my roommate's iPhone, and I yelled, "We're golden!" Accessibility was huge—I added ARIA labels like aria-label="Play audio" for screen readers, thinking, "Everyone should feel this story."
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">JavaScript: Making It Interactive</h3>
    <p>
      JavaScript was where I solved the toughest problems. The biggest headache? Browser autoplay restrictions. Audio wouldn't play without a user click, breaking immersion. I groaned, "This is killing the vibe!" Enock suggested an unlock button, but I was like, "It's gotta blend in." I coded a "Start Story" button that triggered an audio context, using:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const unlockAudio = () => {
  const audio = new Audio();
  audio.play().then(() => {
    startNarrative();
  });
};`}
    </code></pre>
    <p>
      It worked, and I was like, "Take that, browsers!" Synchronizing audio with panels was another beast. I used setTimeout to match audio durations, like 10 seconds for Scene 4's bell. When it misfired, I debugged with console.log(audio.currentTime), pinpointing a 0.2-second lag. I adjusted timings, and when the bell rang perfectly, I thought, "This is magic."
    </p>
    <p>
      The decision point at Panel 4 was my proudest moment. I built a state object to track choices:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const state = {
  currentPanel: 1,
  choice: null,
};`}
    </code></pre>
    <p>
      Clicking "Pray" or "Sleep" updated state.choice, loading the right branch. I added keyboard navigation with arrow keys, coding:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextPanel();
});`}
    </code></pre>
    <p>
      Testing showed lag on low-end devices, so I used event delegation and debounced scrolling with:
    </p>
    <pre className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"><code>
{`const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};`}
    </code></pre>
    <p>
      Load times dropped to under 2 seconds, and I was like, "Smooth as butter!" Ever coded something that finally clicked? That's the rush I lived for.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">Challenges: Wrestling with Tech</h3>
    <p>
      Problems were everywhere. Mobile responsiveness was a nightmare—controls stacked weirdly at 768px. I spent hours tweaking media queries, muttering, "Why can't you just work?" I fixed it with flex-direction: column and tested across Chrome, Safari, and Firefox. Audio sync issues kept me up, especially when Scene 6's rumble overlapped Scene 7's heartbeat. I used Audacity's timeline to trim 0.1 seconds, and it snapped into place. The branching logic was complex—early tests sent users to the wrong panel. I mapped it out on paper, coding a state machine to handle transitions, and when it worked, I danced, "No more bugs!"
    </p>
    <p>
      GitHub saved our sanity. I committed changes like "Fixed audio sync" or "Mobile layout tweak," using branches for audio and UI. Ahmad's pull requests for wireframes and Enock's for navigation logic kept us in sync. When a merge conflict hit, I resolved it line-by-line, thinking, "Teamwork makes the dream work." Ever had a project where collaboration was the glue? That was us.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">The Win: A Story That Moves You</h3>
    <p>
      When we launched, users loved it. They said the whispers in Scene 6 felt "too real," and the "Pray" path's choir made them tear up. The site loaded fast, worked on every device, and let you replay to try both paths. My biggest "aha!" was watching a classmate choose "Sleep," hear the fading music, and say, "I felt his regret." That's when I knew we'd done it—created a story that wasn't just heard but felt. What's a story that stuck with you? I bet you've got one—share it in the comments!
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FFD23F]">What's Next, and Your Turn!</h3>
    <p>
      I'm not stopping here. I want to add ARIA roles for better accessibility, imagining a blind user saying, "This is seamless!" A JSON backend could let us update scenes easily, and I'm dreaming of more branches—maybe a "Doubt" path. I'm like, "This could be huge!" But what about you? What story's burning in you? Maybe it's a sound piece or a website. My advice: sketch it, code it, test it, and embrace the chaos. Visit [Temptation link] to hear it yourself. Drop a comment—what's a choice you've faced like our guy's, and how would you tell it? Let's keep this vibe going!
    </p>
  </div>
);

export default TemptationStory; 