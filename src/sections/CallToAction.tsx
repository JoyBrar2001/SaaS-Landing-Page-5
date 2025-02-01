export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4">
        <div className="flex flex-none gap-16">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl font-medium">
                &#10038;
              </span>

              <span className="text-7xl md:text-8xl font-medium text-nowrap">
                Try it for free
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}