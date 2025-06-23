import React from 'react';

const FeedrStory = () => (
  <div className="prose prose-invert max-w-none text-lg text-gray-300">
    <h2 className="text-3xl font-bold text-center mb-2 text-white">Feedr: From Food Waste to Food Access</h2>
    <h4 className="text-xl text-center text-gray-400 mb-8">A lead developer's reflection on building a scalable system to turn surplus into opportunity</h4>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">Where It Started</h3>
    <p>
      I didn't start with code. I started with a question.
    </p>
    <p>
      How is it that restaurants, grocery stores, and cafeterias are throwing out huge volumes of perfectly edible food — while so many people are looking for affordable meals, every day?
    </p>
    <p>
      I live in the UAE, where food waste is a massive problem. Over 3.27 million tonnes of food are wasted annually here, adding up to $3.5 billion in losses. During Ramadan, up to 60% of prepared food goes uneaten. An average person in the UAE throws out 224kg of food per year. That's nearly double the global average.
    </p>
    <p>
      This is not just a sustainability issue. It's a logistical one. A systems one. And to me, it sounded like a software problem that hadn't yet been solved the right way.
    </p>
    <p>
      So I decided to build something that could.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">What I Built</h3>
    <p>
      Feedr is a real-time mobile platform where verified businesses can list surplus food, and consumers can buy it at reduced prices. The platform also connects to local couriers, who deliver those meals. Everyone has their own role, dashboard, and workflow.
    </p>
    <p>
      This wasn't a class project for me. It became a chance to design and build something with real-world logic, impact, and complexity. I was the lead developer, and from day one, I knew I didn't want to just write functional code. I wanted to engineer a system that could scale — both technically and socially.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">Designing the Architecture</h3>
    <p>
      Every system begins with structure. Feedr had three main user types: businesses, consumers, and couriers. I needed a platform where each of them could interact asynchronously, safely, and reliably. And I knew that meant shared logic, shared data models, and consistent patterns — not a patchwork of apps and services.
    </p>
    <p>
      The first thing I committed to was a monorepo.
    </p>
    <p>
      I've worked on multi-repo projects before. They get messy fast. A simple change to a backend endpoint becomes three pull requests. Shared validation logic gets duplicated and drifts. Things break quietly. So for Feedr, I kept it all in one place: frontend, backend, types, utilities. I chose pnpm for package management because of its correctness and speed. I used Turborepo for build orchestration and caching, because I knew that as the platform grew, so would the CI/CD time. Turborepo helped future-proof the dev loop.
    </p>
    <p>
      For the backend, I used NestJS. I needed strong patterns and testability. Nest gave me modular architecture out of the box: services, modules, dependency injection, guards, middleware — all cleanly separated. It was built on TypeScript, which meant I could enforce end-to-end type safety.
    </p>
    <p>
      I paired that with Prisma as the ORM. Prisma changed the way I thought about the database layer. Defining models in one schema file and having a fully typed client auto-generated from it meant I could trust my database logic. When something changed in the schema, the compiler told me what needed to change elsewhere. That made iteration safe.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">Building the Frontend</h3>
    <p>
      I didn't want to choose between iOS and Android. I wanted both. I chose React Native, with Expo's managed workflow, because I wanted to move fast, test early, and update easily. Expo gave me hot reloading, over-the-air updates, and abstracted away all the native build complexity that slows teams down.
    </p>
    <p>
      The frontend architecture needed to stay stable as features were added. State management was the riskiest part, so I made a rule: no useEffect for server data. For anything fetched from the backend, I used React Query. It handled caching, loading states, error retries, and more. For lightweight client state — like auth status or theme — I used Zustand, which gave me a simple, reliable store with very little boilerplate.
    </p>
    <p>
      The result was a frontend that felt smooth, stayed predictable, and didn't pile on unnecessary complexity.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">The Actual Product</h3>
    <p>
      Feedr supports real users, real listings, and real workflows. Here's what I built:
    </p>
    <ul className="list-disc pl-8">
      <li>A business dashboard where verified sellers can upload surplus food with photos, pricing, expiration dates, and categories</li>
      <li>A consumer-facing marketplace with filters, listing previews, and cart functionality</li>
      <li>A courier interface to accept delivery jobs and update real-time status</li>
      <li>An authentication system that supports role-based access and secure session flows</li>
      <li>A payment simulation system with support for cash, Visa, Mastercard, and PayPal</li>
      <li>Image uploads through Cloudinary, with fallback logic</li>
      <li>Admin tools for monitoring, approval, and compliance tracking</li>
    </ul>
    <p>
      I also enforced security and privacy standards aligned with UAE regulations, including food safety requirements and data protection.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">Who It's For</h3>
    <p>
      Feedr is designed for multiple users, but each with their own needs:
    </p>
    <ul className="list-disc pl-8">
        <li>Businesses want to reduce waste and make back some revenue</li>
        <li>Consumers want affordable, convenient food options</li>
        <li>Couriers want quick, location-based deliveries with earnings tracking</li>
        <li>Admins and regulators want visibility and compliance tools</li>
    </ul>
    <p>
      Everyone gets a dashboard built for their tasks. Everyone sees only what's relevant to them. Everyone's data is validated, synced, and protected.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">What I Learned</h3>
    <p>
      This project taught me how to think beyond individual features. I had to think about systems. Contracts. Boundaries. Developer experience. Feedback loops. I learned how much design work happens before any code is written. How the right architectural decision at the start — like using Prisma, or keeping everything in a monorepo — can save hours or days down the road. And I learned how to pace complexity. Some problems were solved with existing tools. Others I had to build myself.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">What Feedr Isn't</h3>
    <p>
      Feedr is not a charity. It doesn't store or prepare food. It doesn't process real payments (yet). It's not meant to be a clone of an e-commerce app.
    </p>
    <p>
      It's a targeted system to match supply and demand in a responsible, local, and legally compliant way. It's not everything, but it is exactly what it needs to be.
    </p>

    <h3 className="text-2xl font-bold mt-8 mb-4 text-[#9D4EDD]">Final Thoughts</h3>
    <p>
      This project is personal. I didn't just design the backend or contribute to the UI. I built the system from the ground up — from database schema to error messages. Every architectural choice was deliberate. Every tool was chosen based on how it would affect speed, safety, and maintenance. Feedr isn't flashy, but it works. And more importantly, it's built to keep working even as more users, listings, and complexity are added.
    </p>
    <p>
      It's easy to throw together an app that runs. It's harder to design one that holds up — to user needs, to developer pressure, to scale, to change. Feedr does.
    </p>
    <p>
      If you want to see the code, the diagrams, or the full report, just ask.
    </p>
    <p>
      I'll stand by every part of it.
    </p>
  </div>
);

export default FeedrStory; 