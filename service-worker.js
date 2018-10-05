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
    "revision": "e668b8e40fba16194873ef79e51f1920"
  },
  {
    "url": "1.0/how-to/index.html",
    "revision": "1ddacf58ea6aa1c767460d817d7933e3"
  },
  {
    "url": "1.0/index.html",
    "revision": "d9fd6d7cd29125a22f2a74cd2f320c6d"
  },
  {
    "url": "1.0/installation.html",
    "revision": "d118aa8dd7d9a14fd9a5997ab62f1fb5"
  },
  {
    "url": "404.html",
    "revision": "023f668f88c11a561dc20ca509372eed"
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
    "url": "assets/css/styles.cc621ca5.css",
    "revision": "40debc336cceb485660cd96ef8075458"
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
    "url": "assets/js/app.cc621ca5.js",
    "revision": "4a07f5e99fcf84d9f18c5f72b4d8ada5"
  },
  {
    "url": "assets/js/vendors~docsearch.c63bd649.js",
    "revision": "6a0564e250e85869cff64637c2d8aae9"
  },
  {
    "url": "index.html",
    "revision": "e3a7d771ebf3e17787cc0111f8925cb1"
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
