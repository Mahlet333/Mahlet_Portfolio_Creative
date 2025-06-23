import { BarChart, Feather, Brain, Cpu, FileText } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: 'The Philosophy of Neural Networks',
    date: 'October 26, 2023',
    category: 'Tech',
    icon: BarChart,
    color: '#3498db',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    content: `
      <p>Neural networks are more than just mathematical models; they represent a fundamental shift in how we approach problem-solving. Unlike traditional algorithms, which require explicit instructions, neural networks learn from data, identifying patterns and making decisions in a way that mimics human intuition.</p>
      <p>This post explores the philosophical implications of this shift, from the nature of creativity to the definition of intelligence itself.</p>
    `
  },
  {
    id: 2,
    title: 'A Journey Through Creative Coding',
    date: 'November 15, 2023',
    category: 'Creative',
    icon: Feather,
    color: '#9b59b6',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    content: `
      <p>Creative coding is where art and technology intersect. It's about using code as a medium for expression, creating visuals, sounds, and experiences that are both beautiful and interactive.</p>
      <p>We'll delve into the tools and techniques that power this exciting field, from p5.js to TouchDesigner, and explore how you can start your own creative coding journey.</p>
    `
  },
  {
    id: 4,
    title: 'The Tyranny of the Loss Function: Rethinking What It Means to Learn',
    date: 'July 24, 2024',
    category: 'AI/ML',
    icon: Brain,
    color: '#00D4FF',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=1287&q=80',
    content: `
      <p>The first time I understood what a loss function was, it felt like the most natural thing in the world. You define an objective, compute the error, and let the optimizer do its job. Clean. Mathematical. Elegant.</p>
      <p>But over time, I started wondering: why this loss function? Why mean squared error and not something else? Why cross-entropy and not an asymmetric measure of surprise? And more importantly: what are we teaching our models to care about?</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">The Assumptions We Don't Talk About</h3>
      <p>Let's take the standard cross-entropy loss for classification. It assumes:</p>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li>The classes are mutually exclusive and exhaustive.</li>
        <li>The cost of misclassifying class A as B is the same as misclassifying B as A.</li>
        <li>The ground truth is infallible.</li>
      </ul>
      <p>These are huge assumptions. In practice, most real-world data violates at least one of these. Consider facial emotion classification. Is confusing "fear" with "surprise" equally bad as confusing "fear" with "happiness"? What if the label itself came from a noisy human annotator who disagreed with others?</p>
      <p>Mathematically, the loss is symmetric. Ethically, it might be catastrophic.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Risk, Information, and Human Consequences</h3>
      <p>To dig deeper, I turned to information theory and decision theory. Cross-entropy loss is derived from Kullback-Leibler divergence, which assumes we penalize model distributions that diverge from the true distribution. But what if we don't care about distributional divergence per se, but about the consequences of a wrong decision?</p>
      <p>A loss function implicitly defines a value system over outcomes. Minimizing loss is not just reducing error. It's deciding what kinds of errors are tolerable, and which ones are not.</p>
      <p>In healthcare, this distinction matters. In autonomous driving, it can mean life or death. In credit scoring, it's a matter of dignity and access.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">A New Family of Losses: Cognitive-Aligned Objectives</h3>
      <p>Instead of fixing the ground truth and punishing deviations, what if we modeled the uncertainty of human cognition itself? Imagine a loss function that doesn't treat all samples equally, but weights them by annotator confidence, variance in interpretation, or ethical significance.</p>
      <p>This repositions machine learning as not just a statistical fit to data, but a negotiation between epistemology and consequence.</p>
    `
  },
  {
    id: 5,
    title: 'What If Convergence Is the Wrong Goal? Toward Open-Ended Models',
    date: 'July 24, 2024',
    category: 'AI/ML',
    icon: Cpu,
    color: '#9D4EDD',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1740&q=80',
    content: `
      <p>Machine learning has always been about convergence. Minimize the loss. Reduce the error. Stabilize the weights. Stop training when the curve flattens.</p>
      <p>But is that how learning works in nature? Does a child "converge" on language? Does evolution "converge" on a perfect species?</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">The Convergence Trap</h3>
      <p>Convergence gives us comfort. A sense that the model is done learning. But what if that is the problem? A model that converges is also a model that stops adapting. It assumes that the world has stopped changing. It becomes brittle.</p>
      <p>In reinforcement learning, we sometimes see agents get stuck in local optima because they converge too early. In large language models, fine-tuning risks overriding generalization with narrow specialization.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Inspiration from Biology and Cognition</h3>
      <p>In contrast, biological systems rarely seek convergence. The brain retains plasticity. The immune system is constantly updating. Culture evolves.</p>
      <p>Even in mathematics, we see the value of divergence. The Fourier series of a square wave never truly converges pointwise. But it still gives us meaningful approximations.</p>
      <p>I propose an alternative: divergent modeling. Instead of convergence, we aim for perpetual refinement.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">From Optimization to Exploration</h3>
      <p>Let the model continue training under a changing objective. Or better: let the objective itself be a function of time. In effect, we make the learning problem non-stationary on purpose. This might sound chaotic, but it reflects real learning: continuous, dynamic, and self-adjusting.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Applications</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li>In open-world RL: agents that never stop exploring.</li>
        <li>In creative AI: models that generate novel solutions instead of optimal ones.</li>
        <li>In meta-learning: systems that evolve their own objectives.</li>
      </ul>
      <p>This doesn't mean we abandon convergence forever. But we challenge its dominance. We recognize that the most interesting systems in the universe are the ones that keep changing.</p>
    `
  },
  {
    id: 6,
    title: "How Language Models Remember What We Don't Say",
    date: 'July 24, 2024',
    category: 'AI/ML',
    icon: FileText,
    color: '#FFD23F',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1740&q=80',
    content: `
      <p>I started this experiment with a strange question: if I fine-tune a language model on nothing, will it still learn?</p>
      <p>Of course, not literally nothing. But I mean low-entropy data. Blanks. Underspecified prompts. Corrupted text. Minimal supervision. What happens when you train a model not with signal, but with silence?</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Hallucinations in the Void</h3>
      <p>Surprisingly, the model still responded. It generated completions. It produced assumptions. It filled in the gaps.</p>
      <p>This suggests something important: large language models are not just learning from the data. They are projecting from priors embedded in architecture and pretraining.</p>
      <p>When you fine-tune on corrupted inputs and still get coherent outputs, you're not seeing generalization. You're seeing hallucination.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Where Do Priors Live?</h3>
      <p>In Bayesian terms, we often think of priors as parameters in the model. But in LLMs, the architecture itself encodes strong structural biases:</p>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li>Positional encodings assume locality</li>
        <li>Attention heads encode compositionality</li>
        <li>Layer norms shape scaling assumptions</li>
      </ul>
      <p>These are not learned. They are built in.</p>
      <p>What I found is that these priors dominate when the data goes quiet. The less signal we provide, the more the model reveals its internal beliefs.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Implications for Safety and Bias</h3>
      <p>This has deep consequences. If a model fills in missing data with its own assumptions, we must ask: Whose assumptions?</p>
      <p>This matters in:</p>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li>Medical diagnosis (underspecified symptoms)</li>
        <li>Legal language (ambiguity)</li>
        <li>Social contexts (cultural defaults)</li>
      </ul>
      <p>Bias is not just in the data. It is in the voids between data.</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-white">Designing Models That Respect Silence</h3>
      <p>I propose a method: Entropy-Aware Training. Penalize overconfident outputs when the input is ambiguous. Force the model to acknowledge uncertainty.</p>
      <p>This way, we teach models to know what they don't know.</p>
      <p>These three essays form a trilogy of sorts. Not about performance, but about philosophy. Not about tricks, but about thinking clearly about what it means to learn.</p>
      <p>If we take machine learning seriously as a field of science, then we need to ask the deeper questions. These are mine.</p>
    `
  }
];

export const blogFilters = [
  { id: 'all', label: 'All Posts', color: '#FFFFFF' },
  { id: 'Tech', label: 'Tech', icon: BarChart, color: '#3498db' },
  { id: 'Creative', label: 'Creative', icon: Feather, color: '#9b59b6' },
  { id: 'AI/ML', label: 'AI/ML', icon: Brain, color: '#00D4FF' },
]; 