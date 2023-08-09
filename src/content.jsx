import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { twind, cssom, observe, setup } from "@twind/core";
// support shadowroot.adoptedStyleSheets in all browsers
import "construct-style-sheets-polyfill";
// mention right path for twind.config.js
import config from './twind.config.js'

const showModal = () => {
    console.log("show modal")
    
    // Create separate CSSStyleSheet
    const sheet = cssom(new CSSStyleSheet());

    // Use sheet and config to create an twind instance. `tw` will
    // append the right CSS to our custom stylesheet.
    const tw = twind(config, sheet);

    const existingRoot = document.getElementById('summary-extension-root')
    if (existingRoot) return
  
    const rootElement = document.createElement('div')
    rootElement.id = 'summary-extension-root'
    //const shadowRoot = rootElement.attachShadow({ mode: 'open' })
    const root = document.body.appendChild(rootElement)
    const shadowRoot = root.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet.target];
    observe(tw, shadowRoot);
    
    ReactDOM.createRoot(shadowRoot).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      )
      
}

const initialize = () => {
    console.log("initialized!!!")
    
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
        console.log(sender);
        const { method } = request;
        console.log(method);
        if (method === 'popupModal') {
            showModal();
        }
    });
}

;(function () {
    if (window.top === window){
        const setLoaded = () => initialize();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setLoaded);
        } else {
            setLoaded();
        }
    }
})()