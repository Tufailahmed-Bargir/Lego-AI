const CodeHistoryCard = ({ history }: { history: any }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 max-w-3xl w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Legacy Code Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 font-medium">Legacy Language:</p>
          <p className="text-gray-800 bg-gray-100 p-2 rounded-lg">
            {history.legacyLang}
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-medium">Modern Language:</p>
          <p className="text-gray-800 bg-gray-100 p-2 rounded-lg">
            {history.modernLang}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600 font-medium">Legacy Code:</p>
          <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto">
            {history.legacyCode}
          </pre>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600 font-medium">Converted Code:</p>
          <pre className="bg-green-900 text-white p-3 rounded-lg overflow-x-auto">
            {history.convertedCode}
          </pre>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600 font-medium">Documentation:</p>
          <p className="text-gray-800 bg-gray-100 p-2 rounded-lg">
            {history.documentation}
          </p>
        </div>
      </div>
      <div className="mt-4 text-right text-gray-500 text-sm">
        <p>Created on: {new Date(history.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CodeHistoryCard;
