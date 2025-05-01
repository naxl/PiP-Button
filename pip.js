(async () => {
  let { pictureInPictureEnabled: e, pictureInPictureElement: r } = document,
    t = document.querySelector("video");
  if (!e || !t) return console.warn("PiP not available or no video.");
  document.onfullscreenchange = async () => {
    document.fullscreenElement && r && (await document.exitPictureInPicture());
  };
  try {
    r
      ? await document.exitPictureInPicture()
      : await t.requestPictureInPicture();
  } catch (i) {
    console.error("PiP error:", i);
  }
})();
