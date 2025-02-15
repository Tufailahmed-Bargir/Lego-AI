const historyData = [
  {
    id: 1,
    legacyLang: "COBOL",
    modernLang: "Python",
    createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: 2,
    legacyLang: "Fortran",
    modernLang: "JavaScript",
    createdAt: "2025-02-16T12:00:00Z",
  },
];

const HistoryList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 max-w-3xl w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Code Conversion History
      </h2>
      <div className="space-y-4">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => onSelect(item.id)}
          >
            <p className="text-gray-800 font-medium">
              {item.legacyLang} → {item.modernLang}
            </p>
            <p className="text-gray-600 text-sm">
              Created on: {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
