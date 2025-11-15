import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-600/10 text-green-700 ring-1 ring-green-600/20 px-3 py-1 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Trusted healthcare platform
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Modern healthcare operations, simplified.
          </h1>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Streamline patient intake, scheduling, e-prescriptions, and reporting in one HIPAA-ready workspace. Built for clinics, labs, and telehealth teams.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-green-700 transition">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-800 px-5 py-3 font-semibold hover:bg-gray-50 transition">
              See features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-700">
            {[
              'Patient intake forms',
              'Telehealth & messaging',
              'E-prescriptions',
              'Analytics & reports',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
