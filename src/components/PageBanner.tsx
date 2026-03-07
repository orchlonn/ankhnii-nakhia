export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#00AC94] via-[#008F7A] to-[#005C4F]">
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-white/3" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px]">
        <div className="py-16 sm:py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
