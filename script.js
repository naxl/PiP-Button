function findRoots(t) {
  let e = [t, ...t.querySelectorAll("*")]
    .filter((t) => !!t.shadowRoot)
    .flatMap((t) => [t.shadowRoot, ...findRoots(t.shadowRoot)]);
  return [...e, document];
}
function findLargestPlayingVideo() {
  let t = findRoots(document),
    e = t.flatMap((t) =>
      Array.from(t.querySelectorAll("video")).filter((t) => 0 != t.readyState)
    ),
    i = e.sort((t, e) => {
      let i = t.getClientRects()[0] || { width: 0, height: 0 },
        r = e.getClientRects()[0] || { width: 0, height: 0 };
      return r.width * r.height - i.width * i.height;
    })[0];
  if (null != i) return i;
}
async function requestPictureInPicture(t) {
  t.removeAttribute("disablePictureInPicture"),
    await t.requestPictureInPicture();
}
(async () => {
  if (document.pictureInPictureElement) document.exitPictureInPicture();
  else {
    let t = findLargestPlayingVideo();
    if (!t) return;
    await requestPictureInPicture(t);
  }
})();
