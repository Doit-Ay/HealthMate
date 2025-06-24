import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, LayoutDashboard, PlusCircle, Info, Mail } from 'lucide-react';

// Import all the pages
import Dashboard from './pages/Dashboard';
import AddMedicinePage from './pages/AddMedicinePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // State to manage the current active page
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        // FIX: Pass the setActivePage function as a prop
        return <Dashboard setActivePage={setActivePage} />;
      case 'add':
        return <AddMedicinePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // FIX: Also pass the prop in the default case
        return <Dashboard setActivePage={setActivePage} />;
    }
  };
  
  const NavLink = ({ pageName, icon, children }) => (
    <button 
      className={`nav-link ${activePage === pageName ? 'active' : ''}`}
      onClick={() => setActivePage(pageName)}
    >
      {icon}
      <span className="nav-text">{children}</span>
      {activePage === pageName && <motion.div className="active-nav-indicator" layoutId="activeNav" />}
    </button>
  );

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-logo">
          <Pill size={32} />
          <h1>HealthMate</h1>
        </div>
        <nav className="header-nav">
          <NavLink pageName="dashboard" icon={<LayoutDashboard size={20} />}>Dashboard</NavLink>
          <NavLink pageName="add" icon={<PlusCircle size={20} />}>Add Medicine</NavLink>
          <NavLink pageName="about" icon={<Info size={20} />}>About Us</NavLink>
          <NavLink pageName="contact" icon={<Mail size={20} />}>Contact</NavLink>
        </nav>
      </header>
      
      <main className="app-main">
        <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
        </AnimatePresence>
      </main>

      <footer className="app-footer">
        <p>HealthMate &copy; 2025 - Built by Lakshya Sabharwal</p>
      </footer>
    </div>
  );
}

export default App;