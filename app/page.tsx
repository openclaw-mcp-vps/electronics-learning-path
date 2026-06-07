export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Education
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Your Personalized<br />
          <span className="text-[#58a6ff]">Electronics Curriculum</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Tell us your goals and experience level. Our AI builds a custom learning path with hands-on projects, curated resources, and clear milestones — so you actually make progress.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Learning — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>AI-generated personalized curriculum</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Hands-on project recommendations</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Curated resources & reading lists</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Progress tracking & milestones</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Unlimited curriculum regenerations</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do I need prior electronics experience?</h3>
            <p className="text-[#8b949e]">No. The AI tailors your curriculum to your current level — whether you're a complete beginner or an intermediate hobbyist looking to level up.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the AI generate my learning path?</h3>
            <p className="text-[#8b949e]">You describe your goals and experience. Our system uses OpenAI to create a structured curriculum with sequenced topics, real projects, and hand-picked resources matched to your objectives.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e]">Yes, anytime. There are no long-term contracts. Cancel from your account dashboard and you won't be charged again.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Electronics Learning Path. All rights reserved.
      </footer>
    </main>
  );
}
