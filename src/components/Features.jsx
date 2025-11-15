import { ShieldCheck, CalendarClock, MessageSquare, FileText, HeartPulse, Activity } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance built-in',
    desc: 'Access controls, audit logs, and encryption help you meet HIPAA requirements with confidence.'
  },
  {
    icon: CalendarClock,
    title: 'Smart scheduling',
    desc: 'Provider and room scheduling with waitlists, reminders, and rescheduling flows.'
  },
  {
    icon: MessageSquare,
    title: 'Telehealth & chat',
    desc: 'Secure patient messaging, file sharing, and video visits in a single workspace.'
  },
  {
    icon: FileText,
    title: 'E-prescriptions',
    desc: 'EHR-friendly prescription flows and pharmacy directory integrations.'
  },
  {
    icon: HeartPulse,
    title: 'Patient intake',
    desc: 'Customizable forms, signatures, and insurance capture from any device.'
  },
  {
    icon: Activity,
    title: 'Insights & reports',
    desc: 'Operational dashboards, revenue summaries, and clinical metrics at a glance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50/60 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to run your practice</h2>
          <p className="mt-3 text-gray-700">A unified, secure platform that scales with your team.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-green-600/10 text-green-700 grid place-items-center group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
