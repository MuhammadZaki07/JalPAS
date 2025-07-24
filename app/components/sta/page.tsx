import React from "react";

export const Sta = ({ data }: any) => {
  if (!data) {
    return <p className="text-gray-500 italic">Tidak ada data yang dipilih.</p>;
  }

  const formatKoordinat = (coordinates: number[][][]) => {
    const titik = coordinates?.[0] ?? [];
    return titik.map((point, index) => ({
      id: index + 1,
      long: point[0],
      lat: point[1],
    }));
  };

  const titikKoordinat = formatKoordinat(data.coordinates);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">STA:</span>
          <p className="text-gray-800 dark:text-white font-medium">
            {data.sta}
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Kondisi:</span>
          <p className="text-gray-800 dark:text-white font-medium">
            {data.kondisi}
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Perkerasan:</span>
          <p className="text-gray-800 dark:text-white font-medium">
            {data.perkerasan}
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">
            Tanggal Input:
          </span>
          <p className="text-gray-800 dark:text-white font-medium">
            {new Date(data.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mt-6 mb-2">
          Titik Koordinat ({titikKoordinat.length} titik)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {titikKoordinat.map((point) => (
            <div
              key={point.id}
              className="bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Titik {point.id}
              </p>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                <p>Lat: {point.lat.toFixed(6)}</p>
                <p> Long: {point.long.toFixed(6)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
