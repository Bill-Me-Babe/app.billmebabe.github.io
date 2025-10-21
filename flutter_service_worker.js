'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8e802e4493015224cc126d11737f11bc",
"version.json": "9178c1c4446004d74fc2b1781a858d41",
"index.html": "82293fce20a5fbb2f08ba3adb8464879",
"/": "82293fce20a5fbb2f08ba3adb8464879",
"CNAME": "d6e1ff38b1cc292a9dace82ed60b8164",
"main.dart.js": "1a1bd7b158bf46f77416dcfeafbd94df",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "fd762520ecf9edf4f1817d3250ff3779",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "31fe3d22ce214caa8830e45ed1b49c1d",
"manifest.json": "a8436f9fd1a2f7fe86cb633e65d908bd",
"main.dart.wasm": "b04a4ccadc0053c00b39e10e6b6a2fb1",
".git/ORIG_HEAD": "209382dee98ac08299c5c1351dc62818",
".git/config": "1d1aef04d4f000feb5991d3858eaf69c",
".git/objects/95/0e566ab6919ae9d4fb9f054aee9e8b856402f1": "fbc88f1aea91dd6996a20f1cd8b0f267",
".git/objects/95/fda8d5fd35d9363fcacd036062249a677f3839": "1364c3371780f753d342c9459b4403eb",
".git/objects/92/bc73251a0360d88c5aea9586e0b047ad80464e": "d200218f0827c06c4065b3f0794a19cf",
".git/objects/0c/e2ee4a7c4306ce004bff0314242c4f3a2a2cbe": "f12fc48391b6bf19743f8fd483151dec",
".git/objects/3e/c5233afff90e8154bc4cbaf1a9658d07d6b36a": "a1b0e77cab7081e6d1b965a40f453437",
".git/objects/6f/3d58ffce017f2fa600d398230745c41d07571d": "51f7a846d741fa638ce200645f5b0914",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/12dade9ad6f5bcc608636e964d2e0bce250200": "f14939579aed1ea0f4c1589a83a1c376",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/8f5e0e0a45fb2588b15ebb986bb80af0616475": "6403586f6f97a04b763cb9b30431c566",
".git/objects/6a/1745615d97fb49d12ca658ea5350cc1a9615c3": "3cf4dc1b0afb699423075a1678429795",
".git/objects/32/d2ce2211fd12cc8f9deb16c1f8048d2ff38c6a": "e1acf70ed13b8a862b8f7d248ee7e3d5",
".git/objects/32/7556e5585765ee8c49049e8f148c148b2ea879": "748dd45e2db94842f0f2ddc857d5a706",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/125d79fc767ff108c50af96f1511d3e58e4763": "3adfd73205e219623f7061315fbccb29",
".git/objects/58/c20005349cf52de9c84a25e76d87fd6aa44bcd": "68b2e31640e454f43e5bf57d5ff48c93",
".git/objects/93/03577b863552eb9fd6a4193265c97fbb2798f1": "138b8681f967dd832f7f32a369f4bfdc",
".git/objects/94/db9ddaa0428aaf23c17b1b4d9e5c731ef8d48a": "d622f5ea9a9a0060ac8f29519d1ccc0e",
".git/objects/60/9863896ea1d3c4de7d405363c380c3c4386b04": "c3b57b4e1f9abb9e93e7ff3409fddc42",
".git/objects/33/904b56f7bbd3e5c907d2d2325590aa6fef2e7f": "edad0bf52918d2e59a2d971a2d2979b6",
".git/objects/9d/e7de7149c89e62f0d3baa78eabc65bffde1622": "664e0f94523e3dda31d9cdb39cd5efd5",
".git/objects/9d/38092c880a677fcaba4bbefab0e18b9d30368f": "3e5f83d8d67bf1bd963c87558d3e170b",
".git/objects/a4/45e65fbb4f6de4767b7724876b39b12a32d62f": "efe81930b8e9ab57b9a231962b3d0481",
".git/objects/a3/69cec508c7d325fa8095a5cc8e78a4ba079602": "7ffe31b53492e43f6be83e34bc901b2b",
".git/objects/d9/0fb6b878fcc374d8e40a86c6c8f8146be47ff0": "2a34ddde1a6bd51a9619d911a3d90efb",
".git/objects/d9/536b5afb065243de3743199f483a164b9cee46": "6c49d809e10c5945fc7047c6cba4b4c8",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/cca14c4233d4965501c9f426afbe567a12a9c5": "fe2c1019f6abb61bea9b4c512d2e0699",
".git/objects/be/cb717045a58bbced07777723efbde3e502fccb": "f339e05c9487a3a6b296ca1d806ea51a",
".git/objects/b3/4a610637a5723e817e34362356b737bfbaf78f": "b13d3807dd657116b2fea247630d9e99",
".git/objects/b3/c1599dd5c9071343959b525ab8969ce08ea12d": "311ba6b9fafadafe7e2ac857ac8a76d1",
".git/objects/df/c101ed07fc2158798fb5c25952f3d0a8fd0100": "6866c0bcd06ae04bdfaf2d059dec2b08",
".git/objects/df/5de94fc120392b16d632fc945ac890317c4d75": "9bd1881e423adf462294d4e7b94618c4",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/f2624abe7691d5e8825da3e04d8c645f39a2db": "e68ef440d210a23cd57427f9a5519877",
".git/objects/b4/7f094929c1054f50ed448cbf49b858d6700462": "d762cbc22c4aeba708721b7bb61f9872",
".git/objects/a2/3155cad4a0aa4931557ecc6f78d5867cceedfb": "1e4c6455623a9ae4fdf393105ffbf007",
".git/objects/a5/d9b268c40660113e972f4f29114b5d7b153b58": "5903f3a940bbf9ebfe9ae4666979ed81",
".git/objects/bd/c5244d921e51d7ad8d40bec505664067dea832": "8aca0fcd475b9216eac0a16c6e6306c0",
".git/objects/d1/68b1403f9044f955d0a169c6e08d980b55f5bb": "4ad11d1a07e02e5e3c7baf8ba437980d",
".git/objects/d6/4d482c97001db0913e748a5a3e5bd004db2e3c": "e24c1b831366c6c453f1e4c628e60053",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/01ddb77c63b7aac5589340dcb2d664f2397b41": "417b45ca4ae686b4b0c680dd086f0c60",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e2/9900b6eefd91e87539e486f00eb79e216d9c40": "f770f27f7375f4baf112028a1554171b",
".git/objects/f4/30a11a8115750256b5a85d7a269488f62d1718": "f2553788a7ee3514836e7a4c1c8fb225",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b465204355fc2a887f1efac33e8b23f0c19cc8": "f67716f63e431ad26badaaaf3068bdd5",
".git/objects/c9/4e7caa58bc5a36b63ad3bd8e3452c4dfe04c21": "557b8e6ebc765452c73878447e609804",
".git/objects/c9/b5aabec6ce19a6f33525629c63d826b0aa2951": "ad07fc62b32c2c0c0a70ec0e6fa1df53",
".git/objects/fc/5dcac2c0ef0370db02fe751d6da688124e7fec": "aa35186961116ef482c2385121ac49b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f2/3bd4c8e4f2c323fd5c73525ffa29bf0196f14c": "44222790acd24b0e0132f7402857fc8e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/5f13f0989b31c585c3d5e05d955dce0b8891cd": "abd57d188125c8ce6c824bcce0e268ea",
".git/objects/ed/00440bd3437c6a776962c0e3a16185aae79451": "472ae4eb7c6a4398d41f93b655d87060",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/c0d4722f6143d2ac1f27c84b07bf3146e4db71": "df4cfaa729a952097685664d0999d986",
".git/objects/c1/f62b07d9662a1dcd293b8baf4c3e9fc465df11": "199e0383ceaddf73db0f1cf453bb09c4",
".git/objects/4e/700590106c30f5e0f4dc701c6d3810b618c06f": "fdb7180a171481f6184cdadfbd13bf38",
".git/objects/20/c329990b707195fada026130670ae8ded3516a": "d7335c2ec905efb233da04466af312c9",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/521ab149bd8f452cde39516b33a83330cb8f71": "259b74c33f0952756edc73570e663a2a",
".git/objects/27/57268f12860171133e69fbdec3fbd5e7191ead": "e2a9874fe06b3f31b5d8c51e2bec9193",
".git/objects/7d/a6cd89dcc160965728b93cb26b16d706930fe5": "5e240cbc9cc31b993e072b200095e979",
".git/objects/7d/43202aef760998d4bd9515981ad568efe5bee0": "d2cc4b69e06fe5c8defb9eec006e6772",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/c87156b78b0172077eabc686112ddc09178905": "b07c4c1f972d2b61ad62e038dd6752b2",
".git/objects/16/bd902aef9d7858af360e0d6f3aef3352bd114f": "32174f37c0be92bc780d27dcffe25840",
".git/objects/16/a394e61effd8d7152a4db882962a453b5aed44": "889010d32cedee75e48cb21d0c284911",
".git/objects/42/1e6af35e759e0c4e1584e6b43c88096c5c2c5b": "918a7c293d43a00198c2f1a8c8618332",
".git/objects/89/99c074684a8534cd5363b6521c86d9c375eee1": "546089aa5711b33b1855e70d6284518e",
".git/objects/89/aa5d6555ee59000cabdf6fc27f19c3ac142460": "07987dcc65d6e5e9ebfc93473a6a4a4c",
".git/objects/45/a2b46cc9244c80627e068dcb821e619b59f21d": "f8d5fb997b0e8be6c4b469ac0c5d9bbc",
".git/objects/1a/b9681ebc686c0eff27419ee9e0aac1d006aa81": "24a48bbaf5eea93c47e536f825db8327",
".git/objects/17/eb82764aafb331be4c1d7a5b59d4447d2cd3d5": "43f5c0b21144945615e7b1a3c8693f6e",
".git/objects/7b/d5c19e2f450c354674b58746efb92f66a3e72a": "89f96989c9e41f3cb26a75366492ad6a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/cb37a006830eeb6d7cd2c37292b97f627e7f82": "23aa723a63b6924be33b17207fabb436",
".git/objects/19/470b6304dbdf0b3294018118eb2a88662ebb8c": "b3a2cab2d3abea315fb3425b35d32c82",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/44/734cc817aad1fb0fb967a110514c428e37c505": "e65ccbb13854fcad85d5c16a6b200f65",
".git/objects/88/532ea36184cd48d32c8833402ad98f96875d4b": "2c69fb2ed0027cfe2959a6337ec5c265",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/1f3e5923618b4dd8c64f0bd05fd607aec97bd3": "c5d68671e70535c8f753dc4c5a69ed87",
".git/objects/5c/6701f8a6de9551fdbe2f09641474fa2d562faf": "16e33f18a1e590b6fa3af3ed059011c0",
".git/objects/5c/3ad1f40f5e16dc404add674d375479a3578cd4": "e8ed3707db9750754ee5c64ffff0237f",
".git/objects/5d/21bd03775bf7e61a44bf094c210f35eb32ea24": "0b6c95ab410dc5c946636ad0d55bdae2",
".git/objects/3a/ecc48d4c8aa9aa8960eb17880345c0d9f6e6e2": "44de687c2517d86723315e6625952375",
".git/objects/54/b44689f27a87c69d20eb6e8d7bfc0ce2c78a06": "77813261acccf2e51265449b8b583dae",
".git/objects/54/94479cc0b9957a2b236f21b8e82b8ef8d8169f": "9e074b896fd47669d20d5e42c568d797",
".git/objects/98/9dc4817aee64746b5183ccf0935ee95df1d227": "34d0d4c8cebb6cbd11b549cd7ecab1ea",
".git/objects/98/93a1c6a7cf967e51e51234ccee52f8fa1e4c77": "5a42629e817dcd7ff00eb7b215790c72",
".git/objects/98/bf3921d18e19637bf60c8d68e7d8a9cd59cb11": "cc0aa28180ca61f824bbd65b0d442c16",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/3f/9c19ab77bfe1d1492649c3dc2f9e9ed01570d8": "5787f8e92ca7f56ec1b8bae3b6ba313a",
".git/objects/6c/375246cffaf84f9e692a1d754f22b21a48cabc": "bd8aae89437ab1bd4acac3422d6dc703",
".git/objects/6c/33c2c95c5d665f860f8c8475f405d913f4f82f": "b131bbc4d9336c17926ca7609e1e6cbf",
".git/objects/39/c62433c4860b38849e87036c4e36a2aa9cb089": "3288f38ff1effb1aa225e8e60f3bd613",
".git/objects/39/e43f87e2dce8ca0355640eb1101f45f2cd8c3d": "be32e40fcd00f80a7cf54a78f2944ad6",
".git/objects/52/b9bedc0c1f4b66a50d3aa220e1e8cf26e8a150": "83155e510fa5386372bf55c852497fd8",
".git/objects/63/6ea8623e38924fcffc7e983250b675000c1966": "054a7fd268153012db40778a6686d7bb",
".git/objects/0f/5cc1a3a6632db027d4b45a0421bf634bce7df5": "6e84a753c9dd200686cfa43ea49ec2e5",
".git/objects/64/56fed71a492577183ef47df5344437fc51fbf4": "fef19715517435012b3979b81654b15d",
".git/objects/64/ffc73ac13db8fd0ade27284760d6583512996f": "4c199a14e51439f57ffabee33afdb1ca",
".git/objects/d3/79df674aff6a9e24728e73e4fccbe5513cf02f": "ca1a020dda54e6f9834da592383a7a33",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/eefa13c52dc0972b5c6b966212445903e02dc9": "8021216b76e1184393babe7810f17218",
".git/objects/a0/eebe6c82ce6220053b39e275d5ee3c924bf70b": "04a8152a9428c2b3e86e0d8148a49e6b",
".git/objects/dd/2719bff6b0ef719c8ed2ced5971200b7b8cc56": "15ed0660558048628bef76b49eec7fa1",
".git/objects/dd/20019e9fd14c855a4a0de5ddd6677198500e96": "122cc5ffc4a41319871f9d7a42a1cc5b",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/b1567c704cd255d61fcf5e368b481bd3821cfd": "32adef40bb907d43db0bcf11218c7745",
".git/objects/a9/a3df9a162e20fa73ca75542abf53b7e4431a0c": "bac2bea33ee6808dffa6ce900f392c2f",
".git/objects/aa/9cf3068c5efe28b64e7aaed4ec19bf72868c26": "3c3585044ae718d6e638c1bfc3920649",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/203112ea23ce048661e226b3fe7cad16cad0d1": "8fb1911f58a55d109587336df1d4f516",
".git/objects/c3/dd51fcf979bae56f68ea153ba75bf474389634": "70f613494b6f209d337eafb57f52d53c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e1/eb52f76fa40463b5e50bf5c01da5351693907d": "2ab74e5c0924b9eeb691ea95059f8fec",
".git/objects/e6/aa33410b0227be859073f70d032c154c510a82": "2749c673b80c3c2eaca765a8c4c2fcd6",
".git/objects/f0/e99184ace3c64fee526865445fc7cc75d8a4bf": "6b347e0ff8132e5e4d5270be2411f251",
".git/objects/f7/347ae6354d036f6d3d25f32739b0085c941574": "2961622bffbaba2941d7553b6f6e4d9a",
".git/objects/e8/1afc0db7fcba053170988f85ecfc84e48b71c4": "fb3eed5e9be22f57c578de1021f2442b",
".git/objects/ff/38da96eeba6b4196e17da6545c3e358462529d": "0d9e7a30db30c7c3996d8843eb66b260",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/8f52373be21f84372f9c869bc14646674d5ef7": "7f9e6556c3afb455e52934afa7b94dfd",
".git/objects/cb/20f56ad5362a1e67e0ac35a337b7cd555cee10": "e0c37478ffb19ca537744996cfe10a50",
".git/objects/cb/60d1a45a72dd7c420a7b7ba379545010edeb1e": "afe4e9c13a49f81fe3a7d9b6a2988ff6",
".git/objects/e0/38e1510fba949180789f98ad66e1b14c8c851a": "0d0d0787057ac0b866f50973dd537945",
".git/objects/46/500f5182f12069b78d0b5a4db477da07dd3f14": "6bd4365c11411d9fe746b5eaeb84cf1d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b213f28375a8fb05e42d9284c15dc44a0dce18": "70e9aaae9090d8b9f6edbdf5f7dc5a1d",
".git/objects/2d/6ac007b6a55e856eb21e2a3051044715458849": "c77824f8ab91757f59216444ef8c4363",
".git/objects/41/05e04655b74ed99b4c8e37c713cb28e009952a": "28afac438042f3d86bc4f6b29bc17077",
".git/objects/77/e4ecda70d9d951a3ecffd44f92d00e24e854ea": "0764a6066977124fcf62c86c8f3bf954",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/12/f844dd17280f8b78a0c04f573eeccd4c23d4a4": "8c8426dcb368fd73b34800ed2f834d7d",
".git/objects/12/898f3ff3b4be63554bedcc122fa3390df809cb": "5b68ce14ec3ebb89f2e51d5b4ed704c9",
".git/objects/8c/d6ab2c8163c9017ed85f6d3f5418e5be773b6e": "e5a34b4fb47b0edd39b2c95610414fb7",
".git/objects/1d/c41bad93aaba7738b4f2f686103b870fe1d867": "2880e629e134c3ec024352237bdfc64d",
".git/objects/71/2b22f48acb3f3e27ff3bbcb1ce60eded945c7e": "79edd592745cb1dd55c8294f4fd0e096",
".git/objects/76/a162b684a4f04713dd1e401fd60529f7554dc9": "0a7b3c0d176d9d4152bdc53115635fcb",
".git/objects/82/03bfb5f6ac765f14587971c768feb56a60dab4": "183047a040cd2b8cee98e9d207ff8fa9",
".git/objects/82/0740ea372b35ff1461e13b862976d5f55a3300": "55875f60ee3c7f3e047f937719de41d2",
".git/objects/82/b96b1b9c78f5bfb8ee1d244aa6696bc813fcf5": "0d0e26612f5234184cce63b561a02086",
".git/objects/78/2065e79cfeb717697fdf388246b556e7a02157": "c63cd350bac2237f176e7960c2f37463",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/221dcb48124147192ba0f43b44d3dc8509d741": "cd8ee1be805ee960cf0066fd075e2ff6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b7e01ae130dbce54a65d7a923779dd0",
".git/logs/refs/heads/main": "7b7e01ae130dbce54a65d7a923779dd0",
".git/logs/refs/remotes/origin/HEAD": "b6045819724a24ded72bc30e5313154e",
".git/logs/refs/remotes/origin/main": "d798eeead8ee9e93e03a6d3d48625163",
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
".git/refs/heads/main": "84946d4466003ba68f91500eca6b5851",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "84946d4466003ba68f91500eca6b5851",
".git/index": "2613a77dc839b6b658ea825f8990a8c6",
".git/COMMIT_EDITMSG": "aff6825819b6c9d95412d3ff983f45a2",
".git/FETCH_HEAD": "62d28e6d82d986b5199cac0872145408",
"assets/AssetManifest.json": "5ac2640e69011a08c47db2d4389abda6",
"assets/NOTICES": "fa13ecd22c4205ba6474aa43694ff51f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bce74a79402898cbdcccdf763a58863e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/pages/privacy_policy/privacy_policy.md": "eb5a35d0669fcbacb2f6290774398cec",
"assets/AssetManifest.bin": "44c08e9dc848f4290b36041768307340",
"assets/fonts/MaterialIcons-Regular.otf": "7c30ce93be109eb992affb6fda8b22bc",
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
