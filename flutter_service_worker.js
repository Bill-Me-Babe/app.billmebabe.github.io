'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "926bcca909f9dcda7ed486b4ea722743",
"version.json": "9178c1c4446004d74fc2b1781a858d41",
"index.html": "2c844730d9a0d1e65b3b739bfab8602f",
"/": "2c844730d9a0d1e65b3b739bfab8602f",
"main.dart.js": "22b30d1a0d2611820fe46b0e8598bde9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "0ea547829bfd33f348172ebb5728625d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "31fe3d22ce214caa8830e45ed1b49c1d",
"manifest.json": "a8436f9fd1a2f7fe86cb633e65d908bd",
"main.dart.wasm": "4589c633c562cdc9d4cf126b5b2044f1",
".git/ORIG_HEAD": "4078d93f2f1aaa6fb18243ddac214f70",
".git/config": "1d1aef04d4f000feb5991d3858eaf69c",
".git/objects/95/0e566ab6919ae9d4fb9f054aee9e8b856402f1": "fbc88f1aea91dd6996a20f1cd8b0f267",
".git/objects/92/bc73251a0360d88c5aea9586e0b047ad80464e": "d200218f0827c06c4065b3f0794a19cf",
".git/objects/0c/e2ee4a7c4306ce004bff0314242c4f3a2a2cbe": "f12fc48391b6bf19743f8fd483151dec",
".git/objects/3e/c5233afff90e8154bc4cbaf1a9658d07d6b36a": "a1b0e77cab7081e6d1b965a40f453437",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/8f5e0e0a45fb2588b15ebb986bb80af0616475": "6403586f6f97a04b763cb9b30431c566",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/a3/69cec508c7d325fa8095a5cc8e78a4ba079602": "7ffe31b53492e43f6be83e34bc901b2b",
".git/objects/d9/0fb6b878fcc374d8e40a86c6c8f8146be47ff0": "2a34ddde1a6bd51a9619d911a3d90efb",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/f2624abe7691d5e8825da3e04d8c645f39a2db": "e68ef440d210a23cd57427f9a5519877",
".git/objects/a2/3155cad4a0aa4931557ecc6f78d5867cceedfb": "1e4c6455623a9ae4fdf393105ffbf007",
".git/objects/d6/4d482c97001db0913e748a5a3e5bd004db2e3c": "e24c1b831366c6c453f1e4c628e60053",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/5dcac2c0ef0370db02fe751d6da688124e7fec": "aa35186961116ef482c2385121ac49b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/00440bd3437c6a776962c0e3a16185aae79451": "472ae4eb7c6a4398d41f93b655d87060",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/c0d4722f6143d2ac1f27c84b07bf3146e4db71": "df4cfaa729a952097685664d0999d986",
".git/objects/4e/700590106c30f5e0f4dc701c6d3810b618c06f": "fdb7180a171481f6184cdadfbd13bf38",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/521ab149bd8f452cde39516b33a83330cb8f71": "259b74c33f0952756edc73570e663a2a",
".git/objects/7d/43202aef760998d4bd9515981ad568efe5bee0": "d2cc4b69e06fe5c8defb9eec006e6772",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/16/bd902aef9d7858af360e0d6f3aef3352bd114f": "32174f37c0be92bc780d27dcffe25840",
".git/objects/89/99c074684a8534cd5363b6521c86d9c375eee1": "546089aa5711b33b1855e70d6284518e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/cb37a006830eeb6d7cd2c37292b97f627e7f82": "23aa723a63b6924be33b17207fabb436",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/6701f8a6de9551fdbe2f09641474fa2d562faf": "16e33f18a1e590b6fa3af3ed059011c0",
".git/objects/54/b44689f27a87c69d20eb6e8d7bfc0ce2c78a06": "77813261acccf2e51265449b8b583dae",
".git/objects/98/bf3921d18e19637bf60c8d68e7d8a9cd59cb11": "cc0aa28180ca61f824bbd65b0d442c16",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/3f/9c19ab77bfe1d1492649c3dc2f9e9ed01570d8": "5787f8e92ca7f56ec1b8bae3b6ba313a",
".git/objects/d3/79df674aff6a9e24728e73e4fccbe5513cf02f": "ca1a020dda54e6f9834da592383a7a33",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/2719bff6b0ef719c8ed2ced5971200b7b8cc56": "15ed0660558048628bef76b49eec7fa1",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/b1567c704cd255d61fcf5e368b481bd3821cfd": "32adef40bb907d43db0bcf11218c7745",
".git/objects/a9/a3df9a162e20fa73ca75542abf53b7e4431a0c": "bac2bea33ee6808dffa6ce900f392c2f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/dd51fcf979bae56f68ea153ba75bf474389634": "70f613494b6f209d337eafb57f52d53c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e1/eb52f76fa40463b5e50bf5c01da5351693907d": "2ab74e5c0924b9eeb691ea95059f8fec",
".git/objects/e6/aa33410b0227be859073f70d032c154c510a82": "2749c673b80c3c2eaca765a8c4c2fcd6",
".git/objects/f0/e99184ace3c64fee526865445fc7cc75d8a4bf": "6b347e0ff8132e5e4d5270be2411f251",
".git/objects/e8/1afc0db7fcba053170988f85ecfc84e48b71c4": "fb3eed5e9be22f57c578de1021f2442b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/8f52373be21f84372f9c869bc14646674d5ef7": "7f9e6556c3afb455e52934afa7b94dfd",
".git/objects/cb/60d1a45a72dd7c420a7b7ba379545010edeb1e": "afe4e9c13a49f81fe3a7d9b6a2988ff6",
".git/objects/e0/38e1510fba949180789f98ad66e1b14c8c851a": "0d0d0787057ac0b866f50973dd537945",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b213f28375a8fb05e42d9284c15dc44a0dce18": "70e9aaae9090d8b9f6edbdf5f7dc5a1d",
".git/objects/41/05e04655b74ed99b4c8e37c713cb28e009952a": "28afac438042f3d86bc4f6b29bc17077",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/82/03bfb5f6ac765f14587971c768feb56a60dab4": "183047a040cd2b8cee98e9d207ff8fa9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/221dcb48124147192ba0f43b44d3dc8509d741": "cd8ee1be805ee960cf0066fd075e2ff6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "133670a223030787309ac4771a02bddc",
".git/logs/refs/heads/main": "133670a223030787309ac4771a02bddc",
".git/logs/refs/remotes/origin/HEAD": "b6045819724a24ded72bc30e5313154e",
".git/logs/refs/remotes/origin/main": "b3a84c25a04750326307ecf79b3692b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ddace535ddd46dd6409b89ed6011ee38",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ddace535ddd46dd6409b89ed6011ee38",
".git/index": "79deccc8546adea26aba08ef279a8660",
".git/COMMIT_EDITMSG": "731f9204d87db506229874a94af4efb1",
".git/FETCH_HEAD": "9dbdd3b2cb947d43b231db93b522f1de",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "6471bffddd0a7862689fea2f991dfc84",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "a3e7ff5403279d498ce3dd41548b6b0d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
