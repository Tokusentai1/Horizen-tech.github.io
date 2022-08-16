'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6ab111f4da571d8146adec4fdcffda7",
".git/config": "e3a729178b0b8df07ca6969d4cf64363",
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
".git/index": "e2fcdf16061977455de29ff8f28aeb59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a7c712c29552b153ff5233f689a4016",
".git/logs/refs/heads/main": "ec836c96f828a78ba7d55c820572e27f",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/07/f28c61004fe9af9ff4f5c473797194eba7db05": "2c53a944af83f2575ff1d54ddb696cc6",
".git/objects/09/fcf20e2ef3a332bef1a7ba299ecfa4210db79b": "5d6d26a02f3bdf4287b5cc0248da8ba9",
".git/objects/0a/84e004953f07b03f2ed1acbe783319e53b43ba": "2104f1314076f8198eae962b23a9aebf",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0e/3a2e131c170e6184da2aaf178f877e904f804d": "e40532aafb3935a688c215baa1ae33d1",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/11/3fd7137fc3be07d181803286ff16b5a332112e": "5cddac667473c1fc88faf129ee172ff7",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/12/aff4c4e1ae99372fd46c83bb18d461795fa8ec": "4ecc4969754586c8a1de1f3c714efc54",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/274dd7a5e4038075aafa9d4c1d02750984bf24": "0534fbbb4d67b42e406714cc9932aa91",
".git/objects/16/9d3620595c1b6e1aecfe90807ebf34bf63c256": "9c3ea24f9420741c7136117fae5b956b",
".git/objects/16/d4b659f69b41efcdef93b167c136c1b1947e02": "e690fd02406abe952fcb29d91229eb95",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1a/e816b3dae5afc9a327cc30859a6d977cdec989": "fe8f74e39d546696efa195b526cf99a1",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/1d/0c50e605173cda6987c0fe283d42dcff23a1f4": "aa6011e539c5a8962be254ca4a8491e2",
".git/objects/1e/eeae2c217440693269fa82a5c6f37716220518": "d3e8e5fc98d7c2d81e1b79f6b7b003f4",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/05cc233bdbdb8ff6064042d0340531e820f21e": "3f9f28b194fd7ae245e5e36499ac57b9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/e6dd4700b0fcdb450841415123bfce37dbecca": "71dc1161bb67d982fceaa8aecf56de0b",
".git/objects/24/9eebf97c1a1a2aa0cc01e3323c9c5dc8cd47aa": "e34fa339c42661c9f7a32e4cca96b972",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/0cbc83b461a2f2096d3bdcf0fecaa8c0e6a04a": "54e8fb50899ed791526ae040b6a1ff83",
".git/objects/31/1d5734f75510c4c216f2eb0080aa05ac300b67": "f1a0df8c5886d0ac8f316f152a02a4f1",
".git/objects/32/6352d35b274abf7b421cd0cce029ed338f8a3c": "515ae77c7f97f8772dacda08a1148198",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/33/69aa2937593a827e8ddb48b352a751172e00ea": "5920cd7ff0e759e4d71159d66e19fc08",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/3f/989357804e127c2a9896c805eed8adfa7c8345": "8b491934231052e0f89c6deb6f85be53",
".git/objects/44/b9c5172c6767af0e9e027d9c776066e00d4c8d": "dfa9da23894cf595379fdf72aa0ff011",
".git/objects/4b/d84a24385f37c8d1df034dc8dc27647cbedbf4": "c0f5d4054248365a56274c04d977f969",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/c796325b13c0d361996b072d70249a53b9c324": "c0864f395513b6c1447e0536fc13f97c",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/57/2d56411c9d0a95ec27fe60d0f36772820202fd": "f512c492f11f0c0b81cac3d79569cc01",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5c/854c8dc33b1b098da093150f03f92542c2ee6e": "a38bb375df2816a1995c77a2da77190d",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5e/8d0d95b608de8267005cd4ceb796cbc2e53d19": "807adf4e132a02a7061dbfa862463231",
".git/objects/5e/c6ef7fc8c469d3eec195168b49ddb7dd76157d": "990057e09e43051fb563c27d849c8a96",
".git/objects/60/0bc11b4e262c86e6948147bb2d5fb5d8e624c3": "ab6aae26029d11266e6e57cf7245444a",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/64/2504f9662673ae7ce73e3ebdedd3aaa5b38b69": "0ccd2a28ab825146762580ea64512b0f",
".git/objects/66/7c83205e7904293d4958d779ff4c4d50b145a5": "037957c538905f68de6ddb00b8a9ce3d",
".git/objects/69/7186a983a9291db9570137f2a82b867c98db53": "d9aabc6d499c7c330e14d155d9b36a13",
".git/objects/6a/969195ff6edabf7c458645a12f3f2dcb2ddfdd": "e079d4a3d5b81d27aebf0f539223c2ae",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/71/4284a30ab68633ad8107385f9d4828c738660f": "43a5375c294d214bc3cdf00f400d9c65",
".git/objects/71/6af3baf9c1d69063152f768cceae7d23936d27": "0b6556a3aa2928df23b04e2c527637bb",
".git/objects/73/127066e969aea00831afc7ab084812d14e770d": "e9a9e7ede5c88ba5bbf2b5d5fccadb89",
".git/objects/73/34512dafb33582f8ddfe6d0094860701ffdd07": "04a32c7270f8a5401b7334ef5b2798bb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/7a/ac23587d9ad5efbb5ee36f313730dfc5f60fdc": "44349c4f581c14844e48d364b65696cc",
".git/objects/7e/abe8aac9cab1cdfc2ab3cf1cc6eed8d00fa3c2": "63077cd7793a66b552e6907300d18717",
".git/objects/80/24483e8c983bf36b843e54194bfedbc1141624": "7b24052a1ae9cbd01d2583d737dd1d52",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/471ac0c6ff918c80446650d99472e308033c1e": "413e293fff0c03c157425921309c7f85",
".git/objects/83/1b88dfbfdb6db19e443e9c5d6c5096ed8337ab": "dd2ec839090e12d2902f78222334b8c0",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/c5ad9b42f2d1f194bfcd15b1f3fc036ee1b2ed": "e8dec591c7d5331557b114771fcd0631",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/c7f3037d71872ee8d8a1b049960da79a9eae5a": "29ec178c41b7b60b75714de2fa3cce1b",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/9a/be08db8b9de18bf86b220ff555530c64ec71ea": "2d3f949b5447e6deeb5613b42500f03f",
".git/objects/9d/94752eabd7c2497db237dc933a95f563f3edba": "b0fe3b8cda6379e8070de0df651df91a",
".git/objects/a3/6beaf640d72ed720e216f179eb78a9cf0ff4f7": "db4442f275b5cbc04030e2164f87e15f",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a7/d36e656d6ee962275e14c0ba573c3243bf1260": "f953a9e03f0356c911bc9794c8bb2e80",
".git/objects/aa/74f47ef715d7d520a03cc24fcf7051709d6003": "583cc2c242c778ca274273ded2606864",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b2/232d882b85ec7a3aebb60adf13a4ff97b91822": "521627a5a70afb743773168d6b076cc4",
".git/objects/b5/62a90ddbc2a54e73c9c8d7bfda060c0f768005": "407dfd1c4f1de6519cb2c6f1758582a5",
".git/objects/b6/9f7dddc3f5bf710b1a1fea622e40cb813881e1": "f6395a2768cf290d27430e9517ea8cdb",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/bb/c36d941cc0698240af47200a75ac054dc13665": "d7b3d73c107c8c75e9763e4498526a84",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/bc/763cc6f000a5e464d311d2cafa38cfd3b703c0": "17e77fe5b323006fe43bfae21ba5f4f6",
".git/objects/bd/edd2fccfaeff4c00800f16123e9759fce098db": "7780dc0a5f4f565731a3ce108a88a8d9",
".git/objects/c2/9e9dadea23de1d0a64c129216b2618cb0001a3": "a55e7f3fba75da35a263e73426374fa2",
".git/objects/c3/d75a81134a8c4162c9b6419c6867557db40e94": "79cb4f3c3e40c4aea7b1fd7bcf979864",
".git/objects/c4/8591b3b7c45256227d2472368bd835fd4b616b": "d5e2e38f5188f2bcce826a895271e031",
".git/objects/c8/561421ddd2e189ee814186cb79564646cda211": "7e8ccfd41f291846ee3df6c14877f172",
".git/objects/c8/93e5bc33a5e4c78527ad537e3b21bb02c68621": "ecea97a3bf996fc9ea151cfc4890f4c2",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/ca/b9c34a0ae71b02f73eb68653c845ff9258357f": "3b4add2e2875afa217d3faca0706a252",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/b655cfd17a06b707afa13363c0dbd09c36913d": "ca85759402decd9bee67b5a7e5c558eb",
".git/objects/d3/a7e5df809d34b84a084e176ed9cd593a160c21": "d3c5b25d71008816d5aa08950dbca3aa",
".git/objects/d4/4401c1f70278c1babc040489479e3366a55b29": "7ca1b85e15ff844cc25fbc9dbadffd7a",
".git/objects/d5/db72c7c5058e9fa28ce4ddaa75c0ceccfa8ec2": "de8418034b07b7e86e68936c8b9c27d6",
".git/objects/d5/fbdb67b07aaa58c0fd0fb2487c301974f735f4": "0afe67181ca230a947f605647338ac37",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/1bea8db84745c5a2d52bb63d264a4562481d90": "30d6b5c4aa9d4e6e1d057a9f461e208f",
".git/objects/dd/d96bb3cabb5bb24367af9660b635d70a1c9a52": "8c4987a6f4ac89b8f73dd0e2a68e704a",
".git/objects/de/09ea1678ba5215ffffa32f98981fa924ef6494": "d8e13de96a0fdc8f68e9efca674da7e9",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/f9c0e130c5e15deb6e9a181d4ace78978c65bd": "6eaf39eb9172af98bb17b8f49097e7cb",
".git/objects/e3/12b629c81dc0c4993488ac1568af6b4400cd31": "574799ce73124a6b4f8e98676eef7c0a",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4017415aba67d8ec8b6b102d3d71232d6b56d0": "1507c5c7f4df97845f1fefa0d29331d0",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/f9/005ea1d3ad7f25ae1e0ff8c8454e5ed401e42a": "c0bec0690ab9ac4a9d288456d6601e52",
".git/objects/fb/77da0acd52fae1ab19745371969ec0f762cf9d": "2b21657bdadb0562ec0138a28c8925ae",
".git/objects/fc/52000012541fa28b063df09a3392235fdf9400": "92e70e2765e023e94a8b3e0cc1ff1399",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/f858cb98fb60635dfa712eb7cb0fe7a0b49979": "ff4c028114e2627692812faf0e78b483",
".git/objects/fe/0d4ef3bfc233e848c36d7213d705cd254725ca": "dfc861732f953b01f414507bb2f92313",
".git/refs/heads/main": "26e2c30e116a4c5e02791da23d4eb825",
"assets/AssetManifest.json": "7b686f0b07586434ca1c47cd409dc7dd",
"assets/assets/animation/96084-arrow.json": "f1828068f72a69693ea4bfd6458aae08",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/basel.png": "ae73f1c5a02af4f5f132e80e62615ab9",
"assets/assets/images/basel_profile_img.jpg": "12608735da99c41b096bc1a9d4936ef3",
"assets/assets/images/bg.jpg": "89e5da6af1c18489d72622b22b845310",
"assets/assets/images/bg2.jpg": "8f7aee275950cd036451915b72907cca",
"assets/assets/images/bg3.jpg": "20f93ca7892708cd33666dd90db6abdb",
"assets/assets/images/bg4.jpg": "b98761e5c6914637202819c60bb98fd3",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/ehab.png": "46ebb2acdd78879146182b26f7ec656a",
"assets/assets/images/ehab_profile_img.jpg": "34ff89d2fd5e125f8f2942420b12290c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/logo_b.png": "d88fb2201895fa32f80f0fbc2a417673",
"assets/assets/images/machine-learning.png": "0945bb9758105f60ac1359942fc0cb4a",
"assets/assets/images/mamdouh.png": "8d53d31f9410b3e8f647d60aae8e7752",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/mobile_development.png": "49f3dab84be57d6cc8307177d61faa3b",
"assets/assets/images/people.png": "faffdaa2aee19d3fddacc822c2b31be2",
"assets/assets/images/person.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/resized_mobile_development.png": "9459f64d68e13b97bcc17837b54ec386",
"assets/assets/images/resized_mobile_development_white_bg.png": "4b089a98a4b40ad7d00f44f94b2678f0",
"assets/assets/images/resized_sp.png": "1762c1d2fa20626fcbc7ca1e02672e69",
"assets/assets/images/resize_ehab_profile_img.jpg": "e0472c720f1ff3e93fe632d4180b03ae",
"assets/assets/images/sp.png": "c5eb9b5164715a6b469f67dbd5dc36dc",
"assets/assets/images/SyriaJoy.png": "ddeb5c8b51d618cdf7516ae6732a5c22",
"assets/assets/images/syriajoy_logo.png": "12a9d1ddd394b6f7ccfc88d1a7c08d7a",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/web-development.png": "89b20cf7746ae0c2100354f0fda1fbd1",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/logo/logo%25201.png": "13e644a9411e20ce91df9c41b34dc821",
"assets/assets/logo/logo%25202.png": "9b784b6c4e223e26d8db8b4c8c42bbec",
"assets/assets/logo/logo%25203.png": "6f92eba1495ce2cba6b4000939e09aa2",
"assets/assets/logo/logo%25204.png": "8f97d45456fd90c8ef6613225e767202",
"assets/assets/logo/logo%25205.png": "a024f912a014d031dedf58cbf0f4225c",
"assets/assets/logo/logo%25206.png": "f4f39acdd50b0cd880289415563673dc",
"assets/assets/logo/logo%25207.png": "a31b9dca1cb7f9acc924467b3193b21a",
"assets/assets/logo/logowithcircle.png": "88e072ceee88d4f008a4a50db1038a48",
"assets/assets/spredditimages/spreddit_categorys.jpg": "27aca1574dce9dc32451f9e96ed76fbf",
"assets/assets/spredditimages/spreddit_drawer.jpg": "2f72b3fd5024ea5d1753bd6fe4861829",
"assets/assets/spredditimages/spreddit_favorite.jpg": "2536e61f2abb983fb66a44eefa9ef468",
"assets/assets/spredditimages/spreddit_home.jpg": "ae586d55a655383f23744c1bf7bf22e2",
"assets/assets/spredditimages/spreddit_login.jpg": "0af5927375e178e97b5a890bb0acb5bb",
"assets/assets/spredditimages/spreddit_message.jpg": "0aa777b78cc2839493d685683e88e222",
"assets/assets/spredditimages/spreddit_messages.jpg": "8df8a50e9916cbb8c5e89c58b758bab1",
"assets/assets/spredditimages/spreddit_product_by_category.jpg": "5d943455664c05da044ea8f785e58524",
"assets/assets/spredditimages/spreddit_product_history.jpg": "4c33073db54d26fd244186f7e0e0fc23",
"assets/assets/spredditimages/spreddit_search.jpg": "1f91ca6595a6fa30d4821da872d75f91",
"assets/assets/syriajoy%2520images/striajoy_searchForTrip.jpeg": "987a1ea218ee81b486dba422fd2d403d",
"assets/assets/syriajoy%2520images/syriajoy_companyProfile.jpg": "ecf13cf183029842c4e1b6458aee7fd7",
"assets/assets/syriajoy%2520images/syriajoy_drawer.jpg": "73ff1630e206aed99867c962d1eb3987",
"assets/assets/syriajoy%2520images/syriajoy_favorite.jpg": "e2cc94e38e687a382420d2f225d532eb",
"assets/assets/syriajoy%2520images/syriajoy_login.jpg": "61a4d78027e5203a10bd13d5604f10b1",
"assets/assets/syriajoy%2520images/syriajoy_message.jpg": "ea0816e601babf1a5464a6c23fb6ddc4",
"assets/assets/syriajoy%2520images/syriajoy_message_screen.jpg": "1f02c904ae74ae951c56076af2d45510",
"assets/assets/syriajoy%2520images/syriajoy_myprofile.jpeg": "3a1696307572f7b9a0d6714f89cdf998",
"assets/assets/syriajoy%2520images/syriajoy_tripstype.jpg": "0364bc96d7720d1536a23fecea9706d4",
"assets/assets/syriajoy%2520images/syriajoy_trip_by_category.jpg": "aa2de6a1216db88199c78045df3c41e4",
"assets/assets/syriajoy%2520images/syriajoy_trip_detail.jpg": "ac4b580424f54072c130a1ef212a2d67",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5a77beef6536540cd273b7b8f2a8abbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "08bc2da262a8eda0feac5f251fad35a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "0fe03990d0e9cf4459f210bb5c7d36f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "d5957e178281ee87a48ad9526bb81fe0",
"icons/Icon-512.png": "f95f766d7661cee3520c3b18147b5b8d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a2e6fa7e97697a15e8702cf67e3e7daf",
"/": "a2e6fa7e97697a15e8702cf67e3e7daf",
"main.dart.js": "9b04b8324715daa8797a3504e1402042",
"manifest.json": "9ca9b1eefeda8a6b66f25e862dc8f308",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
