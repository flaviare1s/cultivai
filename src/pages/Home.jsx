import { useState } from 'react';
import { FilterForm } from '../components/FilterForm';
import { GenerateReportButton } from '../components/GenerateReportButton';
import { IllustrationPanel } from '../components/IllustrationPanel';
import { SmartChecklist } from '../components/SmartCheckList';

const checklistRules = (filters) => {
  const regras = [];

  // Tipo de cultura
  if (filters.cropType === 'milho') {
    regras.push('Evite irrigar nas horas de sol mais forte');
    regras.push('Prefira irrigação no início da manhã ou final da tarde');
    regras.push('Mantenha a irrigação constante durante a fase de floração');
    regras.push('Verifique a qualidade da água, evitando excesso de sal');
    regras.push('Cuidado com o excesso de água que pode afetar as raízes');
    regras.push('Utilize cobertura morta para reduzir a evaporação');
    regras.push('Evite o uso de pesticidas no pico de calor');
    regras.push('Aplique fertilizantes balanceados na fase inicial');
    regras.push('Monitore as plantas para doenças e pragas comuns');
    regras.push('Considere variedades resistentes à seca');
  }
  if (filters.cropType === 'soja') {
    regras.push('Evite irrigar nas horas de maior radiação solar');
    regras.push('Regule a quantidade de água para evitar encharcamento');
    regras.push('Irrigue de forma uniforme, sem áreas secas');
    regras.push('Use sistemas eficientes para reduzir desperdício');
    regras.push('Pratique rotação de culturas para saúde do solo');
    regras.push('Aplique fertilizantes orgânicos');
    regras.push('Monitore a umidade do solo com sensores');
    regras.push('Não irrigue se o solo já estiver saturado');
    regras.push('Realize drenagem se houver risco de alagamento');
    regras.push('Mantenha calendário regular de irrigação');
  }
  if (filters.cropType === 'arroz') {
    regras.push('Mantenha lâmina d’água constante na fase de crescimento');
    regras.push('Use irrigação controlada para evitar desperdício');
    regras.push('Certifique-se da boa retenção de água no solo');
    regras.push('Prefira variedades tolerantes à seca');
    regras.push('Evite excesso de fertilizantes nitrogenados');
    regras.push('Faça controle de pragas específico para arroz');
    regras.push('Verifique salinidade da água de irrigação');
    regras.push('Não aplique pesticidas na floração');
    regras.push('Use manejo integrado de pragas');
    regras.push('Considere arroz orgânico para mercado premium');
  }

  // Tipo de irrigação
  if (filters.irrigationType === 'gotejamento') {
    regras.push('Use mangueiras de gotejamento ao nível do solo');
    regras.push('Faça manutenção periódica para evitar entupimentos');
    regras.push('Verifique distribuição uniforme da água');
    regras.push('Ajuste vazão conforme necessidade das plantas');
    regras.push('Evite irrigar em excesso para não apodrecer raízes');
    regras.push('Instale filtros eficientes no sistema');
    regras.push('Monitore a pressão da água regularmente');
    regras.push('Irrigue pela manhã para reduzir evaporação');
    regras.push('Use válvulas de controle de fluxo');
    regras.push('Integre sensores de umidade no solo');
  }
  if (filters.irrigationType === 'aspersão') {
    regras.push('Não irrigue em dias de vento forte');
    regras.push('Irrigue nas primeiras ou últimas horas do dia');
    regras.push('Ajuste pressão para distribuição uniforme');
    regras.push('Faça manutenção nos bicos de aspersão');
    regras.push('Use aspersores de alta eficiência');
    regras.push('Monitore volume aplicado no solo');
    regras.push('Não use alta pressão para não danificar plantas');
    regras.push('Prefira aspersores de baixo ângulo');
    regras.push('Irrigue em etapas para reduzir evaporação');
    regras.push('Use cobertura morta após aspersão');
  }

  // Fase de plantação
  if (filters.growthStage === 'muda') {
    regras.push('Mantenha solo úmido mas não encharcado');
    regras.push('Irrigue com menor pressão para não deslocar mudas');
    regras.push('Use chuva fina nos dias mais quentes');
    regras.push('Evite molhar as folhas para prevenir fungos');
    regras.push('Aplique água diretamente na base da planta');
    regras.push('Monitore a umidade com palheta de solo');
    regras.push('Proteja mudas do sol direto');
    regras.push('Use sombrite nos horários de pico de calor');
    regras.push('Não deixe o solo secar completamente');
    regras.push('Conserve a umidade com cobertura leve');
  }
  if (filters.growthStage === 'vegetativa') {
    regras.push('Aumente gradualmente o volume de água');
    regras.push('Irrigue em intervalos regulares');
    regras.push('Verifique profundidade de umidade');
    regras.push('Use sensores para ajustar frequência');
    regras.push('Evite poças que favoreçam pragas');
    regras.push('Mantenha solo arejado após cada irrigação');
    regras.push('Adicione matéria orgânica ao solo');
    regras.push('Faça reidratação em solo seco antes de irrigar');
    regras.push('Proteja sistema de irrigação de entupimentos');
    regras.push('Use cobertura pesada para conservar água');
  }
  if (filters.growthStage === 'floração') {
    regras.push('Irrigue antes do amanhecer');
    regras.push('Evite molhar flores diretamente');
    regras.push('Aumente frequência para suprir demanda extra');
    regras.push('Verifique presença de fungos após irrigar');
    regras.push('Use ventilação natural para secar folhas');
    regras.push('Mantenha fluxo suave para não danificar flores');
    regras.push('Adapte volume de acordo com temperatura');
    regras.push('Não irrigue em temperaturas elevadas');
    regras.push('Monitore a umidade do ar');
    regras.push('Use aspersão indireta para cobrir toda área');
  }

  // Região
  if (filters.region === 'nordeste') {
    regras.push('Capte água da chuva em reservatórios');
    regras.push('Use técnicas de conservação de solo');
    regras.push('Prefira gotejamento para alta eficiência');
    regras.push('Irrigue à noite para reduzir perda');
    regras.push('Plante espécies tolerantes à seca');
    regras.push('Use cobertura morta para conservar umidade');
    regras.push('Aplique práticas de semeadura direta');
    regras.push('Monitore solo e clima diariamente');
    regras.push('Gerencie pastagens para preservar água');
    regras.push('Considere energia solar para bombas');
  }
  if (filters.region === 'sul') {
    regras.push('Evite irrigar em dias muito úmidos');
    regras.push('Use sistemas tradicionais se adequados');
    regras.push('Aplique drenagem em solos argilosos');
    regras.push('Prefira variedades que toleram excesso de água');
    regras.push('Irrigue com moderação para não encharcar');
    regras.push('Faça monitoramento de fungos com alta umidade');
    regras.push('Use compostagem para melhorar drenagem');
    regras.push('Mantenha calendário regular de irrigação');
    regras.push('Adapte frequência ao regime de chuvas');
    regras.push('Use sensores para evitar superirrigação');
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
