const CACHE_NAME = 'veritas-v2';   // bump version to force re‑cache
const ASSETS = [
  '/',
  '/index.html',
  '/survey.html',
  '/results.html',
  '/methodology.html',
  // '/about.html',         ← remove this if the file doesn't exist (it will break the install)
  '/js/data.js',
  '/js/glossary.js',
  '/js/engine.js',
  '/js/parties.js',
  '/js/dossier.js',        // ← newly added
  '/js/charts.js',         // ← if you use charts.js
  '/assets/images/southa.jpg',
  '/assets/images/southa.ico',   // favicon
  '/assets/videos/hero-intro.mp4',

  // ── Audio files (encoded as in your playlist) ──
  '/assets/audio/' + encodeURI("Asimbonanga (Mandela) - Johnny Clegg & Savuka [UJujyzA2Q1E].mp3"),
  '/assets/audio/' + encodeURI("Bob Marley & The Wailers - Redemption Song (Official Music Video) [yv5xonFSC4c].mp3"),
  '/assets/audio/' + encodeURI("Creedence Clearwater Revival - Fortunate Son [ZWijx_AgPiA].mp3"),
  '/assets/audio/' + encodeURI("Foster The People - Pumped Up Kicks (Official Video) [SDTZ7iX4vTQ].mp3"),
  '/assets/audio/' + encodeURI("Hugh Masekela Bring Back Nelson Mandela [opUElVlG1BQ].mp3"),
  '/assets/audio/' + encodeURI("Nina Simone - Strange Fruit [BnuEMdUUrZQ].mp3"),
  '/assets/audio/' + encodeURI("Sunday Bloody Sunday [Iqlzoz_jH3c].mp3"),
  '/assets/audio/' + encodeURI("The Cranberries - Zombie (Official Music Video) [6Ejga4kJUts].mp3")
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Use addAll with a catch so that one missing file doesn't break the whole install
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(err => {
          console.warn('Failed to cache:', url, err);
        }))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

// Optional: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});