// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import CountdownPage from './CountdownPage'
import App from './App' // Import App (Valentine Question Page)
import './index.css'

function AppRouter() {
  const hostname = window.location.hostname;

  let componentToRender;
  if (hostname === 'secret.mikascend.xyz') {
    componentToRender = <CountdownPage />;
  } else if (hostname === 'valentine.mikascend.xyz') {
    componentToRender = <App />;
  } else {
    // Default component if neither subdomain matches (e.g., for local development)
    componentToRender = <CountdownPage />; // Or <App />, or a default landing page
  }

  return (
    <React.StrictMode>
      {componentToRender}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRouter />);