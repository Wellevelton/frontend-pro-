import React, { useState } from 'react';
import { User, Settings, X } from 'lucide-react';

const Header = ({ activeTab, setActiveTab, setShowUserMenu, showUserMenu, resetToInitialData, onLogout, setShowProfile, setShowSettings }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1"></div>
        
        <div className="flex items-center justify-center flex-1">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Planner Pro</h1>
            <p className="text-gray-400 text-sm">Seu organizador pessoal completo</p>
          </div>
        </div>
        
        <div className="flex items-center justify-end flex-1">
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="text-white text-sm font-medium">wellevelton silva</span>
              <Settings size={14} className="text-gray-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 w-48 z-50">
                <button 
                  onClick={() => {
                    setShowProfile(true);
                    setShowSettings(false);
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <User size={16} />
                  Perfil
                </button>
                <button 
                  onClick={() => {
                    setShowSettings(true);
                    setShowProfile(false);
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <Settings size={16} />
                  Configurações
                </button>
                <hr className="border-gray-700 my-2" />
                <button 
                  onClick={() => {
                    onLogout();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <X size={16} />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
