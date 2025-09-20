import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      return;
    }

    // Start a view transition
    document.startViewTransition(() => {
      // The DOM update (rendering of the new page content)
      // will happen here as React re-renders the Outlet due to location.pathname change.
      // We don't need to explicitly do anything here, just let React do its job.
    });
  }, [location.pathname]); // Re-run this effect whenever the path changes

  return (
    <div className="dark:bg-slate-900">
      <main>
        {/* The key prop forces React to re-mount the Outlet and its children
            when the pathname changes, which effectively triggers the DOM update
            that document.startViewTransition() needs to observe. */}
        <Outlet key={location.pathname} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
