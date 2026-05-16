chrome.tabs.onActivated.addListener(async ({ tab }) => {

    console.log("tab activated")
    if (tab !== undefined && tab !== null) {
      console.log(`tab keys: ${Object.keys(tab)}`)
      const { id: tabId, title, url: pageUrl } = tab
  
    }
    /*
    console.log(`tabId: ${tabId}, title: ${title}, url: ${pageUrl}`)
    chrome.tabs.sendMessage(tabId, { method: 'popupModal', data: tab })
  */
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0]; 

      console.log(`currentTab: ${currentTab}`)
      console.log(`corruentTab keys: ${Object.keys(currentTab)}`)
      chrome.tabs.sendMessage(currentTab.id, { method: 'popupModal', data: currentTab })
    });
});
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab)=> {
  if (changeInfo.status === 'complete' && tab.active) {
    console.log("tab updated")
    //const { id: tabId, title, url: pageUrl } = tab
    if (tab !== undefined && tab !== null) {
      console.log(`tab keys: ${Object.keys(tab)}`)
      const { id: tabId, title, url: pageUrl } = tab
  
    }


    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0]; 

      console.log(`currentTab: ${currentTab}`)
      chrome.tabs.sendMessage(currentTab.id, { method: 'popupModal', data: currentTab })
    });    
  }
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));