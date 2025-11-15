const logos = [
  'MediCore', 'CareWave', 'PulseOne', 'ClinicOS', 'LabSync', 'PharmaNet'
];

export default function Logos() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white/70 backdrop-blur p-6">
          <p className="text-center text-gray-600 text-sm">Trusted by forward-thinking healthcare teams</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {logos.map((name) => (
              <div key={name} className="text-gray-700 font-semibold tracking-wide opacity-70">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
