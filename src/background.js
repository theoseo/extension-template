chrome.action.onClicked.addListener(async (tab)=> {
    const { id: tabId, title, url: pageUrl } = tab
    chrome.tabs.sendMessage(tabId, { method: 'popupModal', data: tab })
});
