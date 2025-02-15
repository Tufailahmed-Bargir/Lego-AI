import CodeHistoryCard from "@/app/components/HistoryCard";

const historyData = [
  {
    id: 1,
    legacyLang: "COBOL",
    modernLang: "Python",
    legacyCode: "IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.",
    convertedCode: "print('HELLO, WORLD!')",
    documentation: "A simple COBOL to Python conversion.",
    createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: 2,
    legacyLang: "Fortran",
    modernLang: "JavaScript",
    legacyCode:
      "      PROGRAM HELLO\n      PRINT *, 'HELLO, WORLD!'\n      END",
    convertedCode: "console.log('HELLO, WORLD!');",
    documentation: "A simple Fortran to JavaScript conversion.",
    createdAt: "2025-02-16T12:00:00Z",
  },
];

const HistoryDetailPage = ({ params }: { params: string }) => {
  const history = historyData.find((item) => item.id === Number(params.id));

  if (!history) return <p>History not found</p>;

  return (
    <div className="p-6 mt-20">
      <CodeHistoryCard history={history} />
    </div>
  );
};

export default HistoryDetailPage;
