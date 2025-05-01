chrome.action.onClicked.addListener((i) => {
  i.id &&
    chrome.scripting.executeScript({
      target: { tabId: i.id },
      files: ["pip.js"],
    });
}),
  chrome.commands.onCommand.addListener((i) => {
    "pip-toggle" === i &&
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (i) => {
        let e = i[0];
        e &&
          e.id &&
          chrome.scripting.executeScript({
            target: { tabId: e.id },
            files: ["pip.js"],
          });
      });
  });
