import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Hero Section */}
      <section className="text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trust with Knowledge.  
            <span className="text-[#FF6D1F]"> Verify with TAXMIN.</span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Layanan pembelajaran & konsultasi pajak yang simple, cepat, dan mudah dipahami.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link 
              href="/insight"
              className="px-6 py-3 bg-[#FF6D1F] text-white rounded-lg font-medium"
            >
              Mulai Belajar
            </Link>

            <Link 
              href="/question"
              className="px-6 py-3 border border-[#FF6D1F] text-[#FF6D1F] rounded-lg font-medium"
            >
              Tanya Pajak
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <img 
          src="/logo-taxmin.jpg" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-xl shadow-lg"
        />
      </section>

      {/* Features */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">Insight Pajak</h3>
          <p className="text-sm text-gray-600">Materi dan penjelasan pajak dengan bahasa yang mudah dipahami.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">Tanya Pajak</h3>
          <p className="text-sm text-gray-600">Buat ticket dan dapatkan jawaban yang tepat dan cepat.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">Gratis & Fleksibel</h3>
          <p className="text-sm text-gray-600">Belajar dimana saja dan kapan saja dengan TAXMIN.</p>
        </div>
      </section>

    </div>
  );
}
