export default function InsightPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Insight Pajak</h1>

      <p className="text-gray-700">
        Kumpulan materi dan informasi seputar perpajakan Indonesia.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Apa itu PPh?</h3>
          <p className="text-sm text-gray-600">Penjelasan mengenai PPh dasar...</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">PPN untuk UMKM</h3>
          <p className="text-sm text-gray-600">Bagaimana PPN bekerja pada usaha skala kecil...</p>
        </div>
      </div>
    </div>
  );
}
