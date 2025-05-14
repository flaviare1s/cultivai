import { useState } from 'react';
import { FilterForm } from '../components/FilterForm';
import { GenerateReportButton } from '../components/GenerateReportButton';
import { IllustrationPanel } from '../components/IllustrationPanel';
import { SmartChecklist } from '../components/SmartCheckList';

const checklistRules = (filters) => {
  const regras = [];

  if (filters.cropType === 'milho') {
    regras.push('Evite irrigar nas horas de sol mais forte');
  }

  if (filters.irrigationType === 'gotejamento') {
    regras.push('Use mangueiras de gotejamento ao nível do solo para reduzir a evaporação');
  }

  if (filters.region === 'nordeste') {
    regras.push('Considere a captação de água da chuva devido às secas sazonais');
  }

  return regras;
};

export const Home = () => {
  const [filters, setFilters] = useState({});
  const [checklist, setChecklist] = useState([]);
  const [erro, setErro] = useState('');

  const generateReport = () => {
    if (
      !filters.cropType &&
      !filters.irrigationType &&
      !filters.growthStage &&
      !filters.region
    ) {
      setChecklist([]);
      setErro('Por favor, selecione pelo menos uma opção para gerar o checklist.');
      return;
    }

    const regras = checklistRules(filters);
    setChecklist(regras);
    setErro('');
  };

  const removeItem = (index) => {
    setChecklist(checklist.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-2 sm:p-8 font-inter bg-[#eee]">
      <div className="sm::w-1/2 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Checklist Inteligente</h2>
        <FilterForm filters={filters} setFilters={setFilters} />
        <GenerateReportButton onClick={generateReport} />
        {erro && <p className="text-red-500 font-medium mt-2">{erro}</p>}
        <SmartChecklist checklist={checklist} onRemove={removeItem} />
      </div>
      <div className="sm:w-1/2">
        <IllustrationPanel />
      </div>
    </div>
  );
};
