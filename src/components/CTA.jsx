export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border bg-gradient-to-br from-green-600 to-emerald-600 text-white p-10 md:p-14 shadow-xl">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-extrabold">Launch your practice on VitalFlow</h3>
            <p className="mt-3 text-white/90 text-lg">Simple pricing, no hidden fees. Try all premium features free for 14 days.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex justify-center rounded-lg bg-white text-green-700 px-5 py-3 font-semibold shadow-sm hover:bg-green-50 transition">Start free trial</a>
            <a href="#" className="inline-flex justify-center rounded-lg border border-white/30 bg-transparent text-white px-5 py-3 font-semibold hover:bg-white/10 transition">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
