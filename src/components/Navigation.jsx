import React from 'react';

const Navigation = ({ activeTab, setActiveTab, setActiveSubTab, setShowProfile, setShowSettings }) => {
  const tabs = [
    { id: 'projects', label: '📋 Projetos & Metas' },
    { id: 'calendar', label: '📅 Agenda & Metas' },
    { id: 'finances', label: '💰 Finanças' },
    { id: 'career', label: '💼 Carreira' },
    { id: 'travels', label: '✈️ Viagens' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Limpar estados de Perfil e Configurações quando navegar para outras abas
    setShowProfile(false);
    setShowSettings(false);
    
    if (tabId === 'calendar') {
      setActiveSubTab('calendar');
    } else if (tabId === 'finances') {
      setActiveSubTab('transactions');
    } else {
      setActiveSubTab('');
    }
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-4">
      <div className="flex space-x-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
