self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>/space16154/i.test(k)).map(k=>caches.delete(k)));
  await self.registration.unregister();
  const cs=await self.clients.matchAll({type:"window"});
  cs.forEach(c=>c.navigate(c.url));
})()));
self.addEventListener("fetch",()=>{});
