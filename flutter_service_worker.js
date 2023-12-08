'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6df9b41e92752e8e75c62f84fecd41ca",
"assets/AssetManifest.json": "9d0bebb28e951efe4a30361bb1fc2c80",
"assets/assets/dialog_flow_auth.json": "79639339733eb33dd43adf2ae5cf1d76",
"assets/assets/images/ani_cart.json": "e3fb296af5ce6b0887b9778c12f2d46a",
"assets/assets/images/ani_loading.json": "ee9a48c1ef46023e22b9f5ae10e702a9",
"assets/assets/images/ani_location.json": "f8c75fe971cbcbada29f778562ec8510",
"assets/assets/images/ani_nothing.json": "bd249723c5635c7f6ec1623f5b1be06a",
"assets/assets/images/avatar.png": "4491e84d823cc08ecfb45c4dcd65dbc0",
"assets/assets/images/bgdesktop.jpg": "52b7ab9ce0cdd53a095cca637eb5c552",
"assets/assets/images/bill1.png": "b16d436dbe1600a85eb84c8082e2bc3c",
"assets/assets/images/br.png": "f0a7f14e2d2ec1fe8705200cfcfd0fc2",
"assets/assets/images/br_login.jpg": "eef485e9535ca7803519f74485c8b07a",
"assets/assets/images/cashier.json": "3afc7d97ad11dbf8ca0e3742193d34d3",
"assets/assets/images/cf1.json": "40284bb503dfb613837e94a0afff50c2",
"assets/assets/images/eating.png": "f42e9a2aec92e593c08cf5df45ca2cc5",
"assets/assets/images/location.json": "bb5ae7f04b1f11ec7f64fd1e57c05f0b",
"assets/assets/images/logocf.json": "c1c2666e06d5a386d026af6db78363c6",
"assets/assets/images/logo_dola.png": "b67a1cc2f8775da8d8f58be357daa5f5",
"assets/assets/images/logo_g.png": "c01b7fdbcc70a26e36605b7b75d43840",
"assets/assets/images/logo_momo.png": "be6b1671772b2220e8bb12cb9dbf5fb7",
"assets/assets/images/logo_vnpay.png": "eda473124145d544efc91a7885ccac56",
"assets/assets/images/nodata.json": "8ef83d0c31a4e70faf016013a2db1739",
"assets/assets/images/order.json": "fcc4b35f964395b108a9790f48a5831f",
"assets/assets/images/order.png": "32a33563a3265827d66d7782e8895b42",
"assets/assets/images/qr.json": "d3994b5cd8fa0e6535ecc2ea64a98552",
"assets/assets/images/splash_screen.jpg": "7def5a6947ce04495112cc4503a211c2",
"assets/assets/images/table.png": "22ea8475c02704d1a78aa77cfa079ac4",
"assets/assets/images/table1.png": "2c31607ea04ad344c353440f8c31baa9",
"assets/assets/images/thongke.json": "b6bdf6fe1045b71d3921eac5ad68e0b6",
"assets/assets/images/thongke2.json": "4d0e511bac420a8fb18b33a11f92b69d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4cfe29a7b662c0f0d9b994ad7eaf9192",
"assets/NOTICES": "da680391a2164905686f8358da66e6da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1d3fc4cf55ebf33e407bde6159cb88c0",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "6e950b8d858091584008f595415b2ec1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8d38d7bb51ecbf8e931c6c2c1b24fe2d",
"/": "8d38d7bb51ecbf8e931c6c2c1b24fe2d",
"latte-art.png": "deed9286982588f132eeb35e93f8b3d0",
"main.dart.js": "75d0a15d8163b2388b9317b332527f61",
"manifest.json": "bd547fa2ebbd510f2bf371e13c7de3c2",
"splash/img/dark-1x.png": "658dbdd997ece2bba63b0abcef13b80c",
"splash/img/dark-2x.png": "e7292be296e72cfb2fcd4a18ba204710",
"splash/img/dark-3x.png": "6ada06ece1ba40c26c47672c15364d90",
"splash/img/dark-4x.png": "dba102308d8ccd2815e7c215aac307f0",
"splash/img/light-1x.png": "658dbdd997ece2bba63b0abcef13b80c",
"splash/img/light-2x.png": "e7292be296e72cfb2fcd4a18ba204710",
"splash/img/light-3x.png": "6ada06ece1ba40c26c47672c15364d90",
"splash/img/light-4x.png": "dba102308d8ccd2815e7c215aac307f0",
"version.json": "797b4416ee9dbfe45aa712f154ff75d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
