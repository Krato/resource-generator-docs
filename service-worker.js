/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.0/how-to/fields.html",
    "revision": "efad6290ace69a96409c184d905cecf9"
  },
  {
    "url": "1.0/how-to/index.html",
    "revision": "c6e13319303edf1f0b65105bba3d057e"
  },
  {
    "url": "1.0/index.html",
    "revision": "621b5e98b5a02ffea69a196391d0cf7e"
  },
  {
    "url": "1.0/installation.html",
    "revision": "9f688f8a14ea6b33245052040286edb2"
  },
  {
    "url": "404.html",
    "revision": "6fc79705c3344cb30e5acfd7830225d5"
  },
  {
    "url": "assets/css/1.styles.7e02c48f.css",
    "revision": "43b322a67c15d445a3527de382cfd834"
  },
  {
    "url": "assets/css/2.styles.77b525d5.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.b93f1032.css",
    "revision": "d355919e22a71c3da858524d4214260d"
  },
  {
    "url": "assets/css/9.styles.c63bd649.css",
    "revision": "3e2e3df3b141da99f3491359fd73baf6"
  },
  {
    "url": "assets/css/styles.8d1e8d67.css",
    "revision": "b2cb26cc293d773a2f7677fe46ba9029"
  },
  {
    "url": "assets/img/fields.12903eb1.png",
    "revision": "12903eb11a1cf253b61bb06eae967bc4"
  },
  {
    "url": "assets/img/generator.0b9f871e.png",
    "revision": "0b9f871e11dc23a80e241b781f9277e2"
  },
  {
    "url": "assets/img/init.6b2c198e.png",
    "revision": "6b2c198e2cd6d507992f50b88114a2e2"
  },
  {
    "url": "assets/img/modal_relations.b7d59f55.png",
    "revision": "b7d59f55134f2962492851fcb56ac0e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/select_extras.3e6ad298.png",
    "revision": "3e6ad298bf73889677753814e2451bbb"
  },
  {
    "url": "assets/img/selection.25ed2c2c.png",
    "revision": "25ed2c2ceb01ec8a0c2aa13348b2808a"
  },
  {
    "url": "assets/js/1.7e02c48f.js",
    "revision": "44dbe0e5361891c6e5ec23bc47dbde09"
  },
  {
    "url": "assets/js/2.77b525d5.js",
    "revision": "b57a713d44a51351bbb4e32f63c0b6e3"
  },
  {
    "url": "assets/js/3.b93f1032.js",
    "revision": "6bb92fb35c9ca92e30aceb992b5219c4"
  },
  {
    "url": "assets/js/4.eaec1409.js",
    "revision": "61fbf1b880f0257b1568d90b8f3a0135"
  },
  {
    "url": "assets/js/5.fc9e8a62.js",
    "revision": "0d9e1406c69f9fe3d88f99fbb8570079"
  },
  {
    "url": "assets/js/6.a167907a.js",
    "revision": "5067f31aca8617da0632528dd0c909af"
  },
  {
    "url": "assets/js/7.65f110fd.js",
    "revision": "197a07e374e9cac864310e7252fe9c11"
  },
  {
    "url": "assets/js/8.e6bbb375.js",
    "revision": "597e50207d2d211293138fb9726c77df"
  },
  {
    "url": "assets/js/app.8d1e8d67.js",
    "revision": "5210d27395f99db92eb7b086ea227b80"
  },
  {
    "url": "assets/js/vendors~docsearch.c63bd649.js",
    "revision": "6a0564e250e85869cff64637c2d8aae9"
  },
  {
    "url": "index.html",
    "revision": "9f91ab3de00d1681a3dc7fe47a437c69"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
