import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="dark:bg-slate-900">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
