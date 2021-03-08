'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b69003ecdb67d6bcd212ec275affc3f0",
".git/config": "11c6e9cd40cf23bc0ba6952fb08372a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3114d46c4c46be71b0db21b268f6a0b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a6607d75f3ca0a7b2a8d1f065b6fd18",
".git/logs/refs/heads/main": "6a6607d75f3ca0a7b2a8d1f065b6fd18",
".git/logs/refs/remotes/origin/HEAD": "8b01b849dbee14b571101a9f7c50a62d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/692aa60dcc273df3b42894cb283228c4322189": "cd5a612df9eb91b1fe3ea1f7d83f96d9",
".git/objects/14/4419a6bc56fcb5226ff21b7aeaef352cc4b674": "9e9ee42e531607a523fb1141ff9a81af",
".git/objects/15/ead124bd3d8f4780d3f081e4ba9385eb053bf2": "6902b59a4403998cce44966d34fc5f52",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/bd749d713a2041858e54655a94d2e8d2b2a5eb": "449c4bb110b03940d740509a56c38114",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/1208a0e304b373afa9dd62622bfb0397903e11": "40dc303242c9cb54af4859b6af8f56e6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/f969f4eba887aa22380dc63c4579d56caf5f37": "73d2bb3ebae541fee1facb9dfa5b1cec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/0881ab0017a9196f821a2e56cefd30b4b43623": "5603ff6a4c943ee67d63216965e2b299",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/pack/pack-780ffca65c9fc6ae897041a70dac15878bd9424c.idx": "b6362b1018d2d331ce695fe6c44f3aca",
".git/objects/pack/pack-780ffca65c9fc6ae897041a70dac15878bd9424c.pack": "bc8328ee8dd030f63b04e8ef6b9fd35c",
".git/packed-refs": "79dfea7999e74fcc8739f01c2f626cc4",
".git/refs/heads/main": "e4bace0e5993911218a6448f4ddf62c5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"crentava.github.io/.git/COMMIT_EDITMSG": "73e91a62342e3cad12060fdb3a71c68b",
"crentava.github.io/.git/config": "3cb4f20e7517f33d3d3734f887533c59",
"crentava.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"crentava.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"crentava.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"crentava.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"crentava.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"crentava.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"crentava.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"crentava.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"crentava.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"crentava.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"crentava.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"crentava.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"crentava.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"crentava.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"crentava.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"crentava.github.io/.git/index": "53ef7855cfeff4d9cf9e859282ae41b0",
"crentava.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"crentava.github.io/.git/logs/HEAD": "aebdd97fcc3dbb32a556fc68cf923a7a",
"crentava.github.io/.git/logs/refs/heads/master": "aebdd97fcc3dbb32a556fc68cf923a7a",
"crentava.github.io/.git/logs/refs/remotes/origin/master": "01b88ca2a9c6e478907913bd405ec078",
"crentava.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"crentava.github.io/.git/objects/08/692aa60dcc273df3b42894cb283228c4322189": "cd5a612df9eb91b1fe3ea1f7d83f96d9",
"crentava.github.io/.git/objects/15/ead124bd3d8f4780d3f081e4ba9385eb053bf2": "6902b59a4403998cce44966d34fc5f52",
"crentava.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"crentava.github.io/.git/objects/3d/1c170f255783ca60b9b73b284d635e6edd5abc": "cd19639f2e58da1e3aa2a2bbcb2f36dc",
"crentava.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"crentava.github.io/.git/objects/48/c49ff3369a8dbd04410fd3b3af93ddaea6060e": "aeb0641ada26c2e4cba7fe87daca56eb",
"crentava.github.io/.git/objects/4b/bd749d713a2041858e54655a94d2e8d2b2a5eb": "449c4bb110b03940d740509a56c38114",
"crentava.github.io/.git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
"crentava.github.io/.git/objects/72/c7a8db7e9c1b88c32bc5f4a89d5b67e9fbe6a4": "f11493459b09a23edf7b4ce67c1e3e6a",
"crentava.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"crentava.github.io/.git/objects/7c/f4e7fd150a00ccb90bda92e54399a0dd888a7e": "132983f06a663829e21ce0eb844cccfb",
"crentava.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"crentava.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"crentava.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"crentava.github.io/.git/objects/a6/1208a0e304b373afa9dd62622bfb0397903e11": "40dc303242c9cb54af4859b6af8f56e6",
"crentava.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"crentava.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"crentava.github.io/.git/objects/b1/f969f4eba887aa22380dc63c4579d56caf5f37": "73d2bb3ebae541fee1facb9dfa5b1cec",
"crentava.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"crentava.github.io/.git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
"crentava.github.io/.git/objects/db/1a2392a6f0431ec41adb7070e90ce058f40da7": "69d70bafc302c9d8883aa9b3ca0674f0",
"crentava.github.io/.git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
"crentava.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"crentava.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"crentava.github.io/.git/refs/heads/master": "9551202b3af1004c99255f85b13f9f76",
"crentava.github.io/.git/refs/remotes/origin/master": "9551202b3af1004c99255f85b13f9f76",
"crentava.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"crentava.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"crentava.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"crentava.github.io/assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"crentava.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"crentava.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"crentava.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"crentava.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"crentava.github.io/index.html": "5d29a715340b1717ef9e38a96ceb23cf",
"/": "ad169c672eb67b7cbe5671fcb4affe5e",
"crentava.github.io/main.dart.js": "12a4200be5a5c3b355883f14e8e123b4",
"crentava.github.io/manifest.json": "08a2ee597cf1c36470a61ef72f472aaf",
"crentava.github.io/version.json": "61e80a636aafc6dd9b126c54f35c03c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ad169c672eb67b7cbe5671fcb4affe5e",
"main.dart.js": "12a4200be5a5c3b355883f14e8e123b4",
"manifest.json": "08a2ee597cf1c36470a61ef72f472aaf",
"version.json": "4adc3dbbdfc219e3ef2f917353ed1414"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
