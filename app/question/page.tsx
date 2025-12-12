export default function QuestionPage() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold">
          Punya Pertanyaan Pajak?
        </h1>

        <p className="mt-4 text-gray-700">
          Sampaikan pertanyaanmu. taxmin akan membantu
          memberikan jawaban yang relevan dan terarah.
        </p>

        <form className="mt-10 space-y-6 bg-white p-6 rounded-2xl shadow-sm">

          <select className="w-full border p-3 rounded-lg">
            <option>Jenis Wajib Pajak</option>
            <option>Orang Pribadi</option>
            <option>Badan</option>
          </select>

          <input
            type="text"
            placeholder="Nama"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Deskripsikan permasalahan pajak Anda"
            className="w-full border p-3 rounded-lg h-32"
          />

          <button className="w-full bg-[#FF6D1F] text-white py-3 rounded-xl font-semibold">
            Kirim Pertanyaan
          </button>

        </form>

      </div>
    </div>
  );
}
