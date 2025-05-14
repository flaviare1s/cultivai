
// eslint-disable-next-line react/prop-types
export const GenerateReportButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-azul2 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      Gerar Checklist
    </button>
  );
};
