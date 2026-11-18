const CACHE = 'calma-25fc222b40';
const BASE = ['./', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'].concat(["voz/0073a2a6f285.mp3", "voz/00aedc388037.mp3", "voz/04b6944ae40e.mp3", "voz/077dfda562a6.mp3", "voz/07fbb47a9b48.mp3", "voz/0911d6582954.mp3", "voz/092cf9e906ef.mp3", "voz/0f89956d9119.mp3", "voz/109cc7737772.mp3", "voz/1a402d513028.mp3", "voz/1cedc1e5b8b0.mp3", "voz/1d365b26872b.mp3", "voz/1d611aefa384.mp3", "voz/23d3f1368d5f.mp3", "voz/253c86adec59.mp3", "voz/2546eef4a971.mp3", "voz/262bdd885d85.mp3", "voz/2cd4ed4de1fd.mp3", "voz/2dec06098f62.mp3", "voz/31bf6a04b17b.mp3", "voz/33c62b441eec.mp3", "voz/3c84ca4816fd.mp3", "voz/3e1468f64feb.mp3", "voz/3ef9a8d944be.mp3", "voz/4032e67ff104.mp3", "voz/44c54f3ab6f3.mp3", "voz/452da36788e4.mp3", "voz/46404fa15148.mp3", "voz/489a747ebade.mp3", "voz/4ab4c5794fba.mp3", "voz/4c122d018149.mp3", "voz/4e53820cba50.mp3", "voz/4f7255f0c517.mp3", "voz/52c37073be6e.mp3", "voz/53c73e64b5da.mp3", "voz/553acb00e156.mp3", "voz/58a60f552083.mp3", "voz/5d87a9953546.mp3", "voz/5e44690f04fc.mp3", "voz/602aee477ed6.mp3", "voz/6680c513910f.mp3", "voz/6a4a9d4baabc.mp3", "voz/6a8679be702e.mp3", "voz/759f3e5f7147.mp3", "voz/75f11b7b169e.mp3", "voz/7d092b43ee64.mp3", "voz/7f738fcbff8e.mp3", "voz/819930309c6e.mp3", "voz/822b0dc1bd69.mp3", "voz/8589c6d76852.mp3", "voz/8615a8005db3.mp3", "voz/86f7e42c0f2e.mp3", "voz/88eddae625fa.mp3", "voz/893795d494d8.mp3", "voz/8a4143700c11.mp3", "voz/8abcd1458a9b.mp3", "voz/8b96a39b8457.mp3", "voz/8cb26e81b5de.mp3", "voz/8d8c0ae55963.mp3", "voz/8e8fdffd12f6.mp3", "voz/911678c3b907.mp3", "voz/947ecb86bfe4.mp3", "voz/9561683d20c3.mp3", "voz/975cee90af4a.mp3", "voz/998dd1d54e3d.mp3", "voz/9a37d94da33c.mp3", "voz/9b889bbdc7ed.mp3", "voz/9d7e9177079b.mp3", "voz/a49b7b20293a.mp3", "voz/a4ce2bb5e004.mp3", "voz/a748b4fcf6ab.mp3", "voz/a8b7328c8bcf.mp3", "voz/ad5712a70592.mp3", "voz/aee773a62892.mp3", "voz/b4654a0e0740.mp3", "voz/b49f144cc94a.mp3", "voz/b4e1397d7313.mp3", "voz/b7bcddba18fc.mp3", "voz/b85f7f721b92.mp3", "voz/b89520b3aca6.mp3", "voz/be3a281091c4.mp3", "voz/bf9eceed8e1b.mp3", "voz/c08281720de0.mp3", "voz/c0be550e2086.mp3", "voz/c433e4f2d5af.mp3", "voz/c57aebfed519.mp3", "voz/c64147f5402d.mp3", "voz/c6dc37079a08.mp3", "voz/caceac98fa98.mp3", "voz/cc6424ed9ca0.mp3", "voz/d0016ef8c259.mp3", "voz/d123de053b16.mp3", "voz/d1ffdb6e6a38.mp3", "voz/d307dcc30585.mp3", "voz/d318f11e9cec.mp3", "voz/d340c5eb9a73.mp3", "voz/d3ecc170472e.mp3", "voz/d88b3d381708.mp3", "voz/db49babbf786.mp3", "voz/dbc80a7ac531.mp3", "voz/dc03168ce731.mp3", "voz/dc2e984e5e71.mp3", "voz/dc7728aee13d.mp3", "voz/dd866968ff4e.mp3", "voz/ddfcd839e33d.mp3", "voz/e01d4ba8c072.mp3", "voz/e0560dccb20d.mp3", "voz/e1cd17625198.mp3", "voz/e21bd9d2cbe5.mp3", "voz/e33c709f3bbf.mp3", "voz/e4aaf3a3e1c6.mp3", "voz/ec295c77c830.mp3", "voz/ecf12872de0b.mp3", "voz/ecfbbb7f7fe3.mp3", "voz/ed38c85389e0.mp3", "voz/edce68bc113e.mp3", "voz/ef7c6791efc1.mp3", "voz/efb7e002523e.mp3", "voz/f1848f81819c.mp3", "voz/f319bd192bc4.mp3", "voz/f65dcdbc100e.mp3", "voz/f79b2061ecad.mp3", "voz/f7da43cc928c.mp3", "voz/f8e63ff50765.mp3", "voz/fcfdb193f23b.mp3", "voz/fd4a6db1ddd4.mp3", "voz/fe31c271739a.mp3"]);
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate' || (url.origin === location.origin && url.pathname.endsWith('/'))) {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./', cp)); return r; })
      .catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  })));
});
