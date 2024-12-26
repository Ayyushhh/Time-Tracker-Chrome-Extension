chrome.storage.local.get(['timeData'], (result) => {
    const reportDiv = document.getElementById('report');
    const timeData = result.timeData || {};
    let reportHTML = '<ul>';
    for (const site in timeData) {
        reportHTML += `<li>${site}: ${Math.round(timeData[site] / 1000)} seconds</li>`;
    }
    reportHTML += '</ul>';
    reportDiv.innerHTML = reportHTML;
});