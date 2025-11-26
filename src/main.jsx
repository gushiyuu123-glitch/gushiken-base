import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
if (
  "serviceWorker" in navigator &&
  location.hostname !== "localhost" &&
  location.hostname !== "127.0.0.1"
) {
  // NOTE: registration is handled in index.html for production; this adds a runtime
  // listener for SW messages so the app can react when a new service worker activates.
  navigator.serviceWorker.addEventListener('message', (evt) => {
    try {
      const data = evt.data;
      if (data && data.type === 'SW_UPDATED') {
        // auto reload to get new assets (can be changed to a user prompt)
        console.info('ServiceWorker updated to', data.version, '- reloading page to refresh cache');
        window.location.reload(true);
      }
    } catch (e) {
      console.warn('SW message handling failed', e);
    }
  });
}
