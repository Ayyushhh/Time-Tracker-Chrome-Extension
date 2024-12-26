let activeTab = {};
let timeTracker = {};

chrome.tabs.onActivated.addListener((activeInfo) => {
    const tabId = activeInfo.tabId;
    if (activeTab.id) {
        timeTracker[activeTab.url] = (timeTracker[activeTab.url] || 0) + (Date.now() - activeTab.startTime);
    }
    chrome.tabs.get(tabId, (tab) => {
        activeTab = { id: tab.id, url: tab.url, startTime: Date.now() };
    });
});

chrome.tabs.onRemoved.addListener(() => {
    if (activeTab.url) {
        timeTracker[activeTab.url] = (timeTracker[activeTab.url] || 0) + (Date.now() - activeTab.startTime);
    }
    activeTab = {};
});