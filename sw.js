const CACHE = 'calma-a835c51a7c';
const BASE = ['./', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'].concat(["voz/00aedc388037.mp3", "voz/04709317369b.mp3", "voz/04b6944ae40e.mp3", "voz/0911d6582954.mp3", "voz/0c6eb82d4bd5.mp3", "voz/0e0a6620be4d.mp3", "voz/0f5f7d6bcc1c.mp3", "voz/16d00aec9d22.mp3", "voz/1bffd425bf6b.mp3", "voz/1c1fb270c0d3.mp3", "voz/1c5729efbfd7.mp3", "voz/1e2381405c7c.mp3", "voz/23d3f1368d5f.mp3", "voz/262bdd885d85.mp3", "voz/28bfbf21390f.mp3", "voz/326ef32add65.mp3", "voz/335df9a5d049.mp3", "voz/33c62b441eec.mp3", "voz/33f6d94d60cd.mp3", "voz/3438738bd050.mp3", "voz/3695c6a2e862.mp3", "voz/3c8c67867149.mp3", "voz/3d784a6d5fe9.mp3", "voz/3fc30574997d.mp3", "voz/41e83fc1e6c3.mp3", "voz/42dc7886aebc.mp3", "voz/44d7d2b2e466.mp3", "voz/46404fa15148.mp3", "voz/49e1433816ab.mp3", "voz/4c122d018149.mp3", "voz/52c37073be6e.mp3", "voz/57285e429c68.mp3", "voz/609a71720a32.mp3", "voz/60caf549ccf0.mp3", "voz/6ffc2bb35054.mp3", "voz/7a3a56240058.mp3", "voz/86f7e42c0f2e.mp3", "voz/88eddae625fa.mp3", "voz/8cb26e81b5de.mp3", "voz/8e2b535b2d0c.mp3", "voz/92a6f3d79d26.mp3", "voz/93360d169f37.mp3", "voz/944ffd22790e.mp3", "voz/96b5d6943cd2.mp3", "voz/9b889bbdc7ed.mp3", "voz/9c3a64db0c94.mp3", "voz/9d7e9177079b.mp3", "voz/9fbd4cfb3270.mp3", "voz/a49b7b20293a.mp3", "voz/a748b4fcf6ab.mp3", "voz/aa3f7fcf3794.mp3", "voz/ab0237a2b391.mp3", "voz/abdfcff66c67.mp3", "voz/adc57a05cd79.mp3", "voz/ae8792918808.mp3", "voz/b25ee484d4c0.mp3", "voz/b4e1397d7313.mp3", "voz/b85c9dbd65e1.mp3", "voz/c08281720de0.mp3", "voz/c1b2070efca3.mp3", "voz/c20e898eda24.mp3", "voz/c252bb07f88d.mp3", "voz/c433e4f2d5af.mp3", "voz/c5dd640c2dee.mp3", "voz/c6dc37079a08.mp3", "voz/c9933c8896cd.mp3", "voz/ce0153f475d3.mp3", "voz/d14d18756583.mp3", "voz/d167df495587.mp3", "voz/d3ecc170472e.mp3", "voz/d6d4b91a398e.mp3", "voz/d7d695d07f47.mp3", "voz/db49babbf786.mp3", "voz/dc2e984e5e71.mp3", "voz/ddfcd839e33d.mp3", "voz/e1cd17625198.mp3", "voz/e33c709f3bbf.mp3", "voz/e5ea8875e3ee.mp3", "voz/e6c1b3447691.mp3", "voz/ea32697ea337.mp3", "voz/ec295c77c830.mp3", "voz/ecfbbb7f7fe3.mp3", "voz/ed9a07f44ec8.mp3", "voz/edce68bc113e.mp3", "voz/f1848f81819c.mp3", "voz/f53f8aa60f59.mp3", "voz/f59e17d53e5c.mp3"]);
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
