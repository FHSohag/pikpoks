import React, { useState } from 'react';
import { HomeIcon, CreditCardIcon, QrCodeIcon, CalendarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function BottomNavbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    {
      id: 'home',
      name: 'Home',
      icon: HomeIcon,
      color: 'text-purple-600'
    },
    {
      id: 'my-cards',
      name: 'My Cards',
      icon: CreditCardIcon,
      color: 'text-purple-600'
    },
    {
      id: 'scan',
      name: 'Scan',
      icon: QrCodeIcon,
      color: 'text-purple-600'
    },
    {
      id: 'events',
      name: 'Events',
      icon: CalendarIcon,
      color: 'text-purple-600'
    },
    {
      id: 'chat',
      name: 'Chat',
      icon: ChatBubbleLeftIcon,
      color: 'text-white',
      bgColor: 'bg-purple-600'
    }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-20 bg-gray-100">
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.name;
            const isChat = item.id === 'chat';
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.name)}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
                  isChat 
                    ? 'bg-purple-600' 
                    : isActive 
                    ? 'text-purple-600' 
                    : 'text-gray-500 hover:text-purple-600'
                }`}
              >
                <div className={`p-1 rounded ${isChat ? 'bg-purple-600' : ''}`}>
                  <IconComponent 
                    className={`w-6 h-6 ${
                      isChat 
                        ? 'text-white' 
                        : isActive 
                        ? 'text-purple-600' 
                        : 'text-gray-500'
                    }`} 
                  />
                </div>
                <span className={`text-xs mt-1 ${
                  isChat 
                    ? 'text-purple-600' 
                    : isActive 
                    ? 'text-purple-600' 
                    : 'text-gray-500'
                }`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}