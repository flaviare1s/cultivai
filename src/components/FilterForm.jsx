// eslint-disable-next-line react/prop-types
export const FilterForm = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <select name="cropType" onChange={handleChange} className="p-2 border rounded">
        <option value="">Tipo de Plantio</option>
        <option value="milho">Milho</option>
        <option value="tomate">Tomate</option>
        <option value="alface">Alface</option>
      </select>
      <select name="irrigationType" onChange={handleChange} className="p-2 border rounded">
        <option value="">Tipo de Irrigação</option>
        <option value="gotejamento">Gotejamento</option>
        <option value="aspersão">Aspersão</option>
        <option value="manual">Manual</option>
      </select>
      <select name="growthStage" onChange={handleChange} className="p-2 border rounded">
        <option value="">Fase da Plantação</option>
        <option value="muda">Muda</option>
        <option value="vegetativa">Vegetativa</option>
        <option value="floração">Floração</option>
      </select>
      <select name="region" onChange={handleChange} className="p-2 border rounded">
        <option value="">Região</option>
        <option value="nordeste">Nordeste</option>
        <option value="sudeste">Sudeste</option>
        <option value="sul">Sul</option>
      </select>
    </div>
  );
};
