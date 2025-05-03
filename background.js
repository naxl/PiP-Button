chrome.action.onClicked.addListener((e) => {
  chrome.scripting.executeScript({
    files: ["script.js"],
    target: { tabId: e.id, allFrames: !0 },
  });
});
