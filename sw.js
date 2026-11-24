// Minimal service worker: lets the site be installed on a phone or computer.
// It does not store pages, so members always get the latest version.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
