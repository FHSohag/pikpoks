import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import SlidingCards from './components/SlidingCards.jsx';
import QuickAction from './components/QuickAction.jsx';
import PikpokHub from './components/PikpokHub.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl font-medium py-2">PikPoks</h1>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-4 mt-1 px-3">
          <SearchBar />
        </div>
        <hr className="my-4 border-gray-300" />
      </div>
      

      <div className="px-6">
        <SlidingCards />
      </div>

      <QuickAction />
      <PikpokHub />
      <NavBar />
    </>
  )
}

export default App
