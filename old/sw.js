const CACHE_NAME = 'fliw-v1';

const INITIAL_CACHED_RESOURCES = [
    './index.html',
    './feather.ttf',
    './Fliw.webmanifest',
    './sw.js',
    './css/aos.css',
    './css/bootstrap.min.css',
    './css/feature.css',
    './css/slick-theme.css',
    './css/slick.css',
    './css/style.css',
    './js/aos.js',
    './js/bootstrap.js',
    './js/feather.min.js',
    './js/jquery-one-page-nav.js',
    './js/jquery.js',
    './js/main.js',
    './js/modernizer.min.js',
    './js/particles.js',
    './js/particles.json',
    './js/slick.min.js',
    './js/text-type.js',
    './js/wow.js',
    './imgs/klien/alpha.webp',
    './imgs/klien/capcuzz.webp',
    './imgs/klien/erpe.svg',
    './imgs/klien/fany.webp',
    './imgs/klien/ideju.webp',
    './imgs/klien/images.webp',
    './imgs/klien/jonka.webp',
    './imgs/klien/kampus.webp',
    './imgs/klien/kirimpaket.webp',
    './imgs/klien/ksu.webp',
    './imgs/klien/logo_dark.png',
    './imgs/klien/naisha.webp',
    './imgs/klien/telaga.webp',
    './imgs/porto/1.webp',
    './imgs/porto/2.webp',
    './imgs/porto/4.webp',
    './imgs/porto/5.webp',
    './imgs/porto/11.webp',
    './imgs/porto/12.webp',
    './imgs/porto/13.webp',
    './imgs/porto/14.webp',
    './imgs/porto/15.webp',
    './imgs/porto/16.webp',
    './imgs/porto/17.webp',
    './imgs/porto/18.webp',
    './imgs/porto/19.webp',
    './imgs/porto/code2020.webp',
    './imgs/porto/code2021.webp',
    './imgs/porto/coldplay.webp',
    './imgs/porto/erpe.webp',
    './imgs/porto/fanybaby.webp',
    './imgs/porto/fliw3.webp',
    './imgs/porto/fliw4.webp',
    './imgs/porto/fliw5.webp',
    './imgs/porto/funding.webp',
    './imgs/porto/hrms.webp',
    './imgs/porto/idejualan.webp',
    './imgs/porto/islamicapps.webp',
    './imgs/porto/jonka.webp',
    './imgs/porto/kampusjualan_admin.webp',
    './imgs/porto/kampusjualan.webp',
    './imgs/porto/kirimpaket.webp',
    './imgs/porto/medthesaurus.webp',
    './imgs/porto/naisha.webp',
    './imgs/porto/naishaapp.webp',
    './imgs/porto/naishadash.webp',
    './imgs/porto/renda-owner.webp',
    './imgs/porto/renda.webp',
    './imgs/porto/robot.webp',
    './imgs/porto/rotator.webp',
    './imgs/contact1.webp',
    './imgs/fliw.webp',
    './imgs/logo_dark.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(INITIAL_CACHED_RESOURCES);
            })
    );
});

//if fetch request is not in cache, fetch from network, if failed, console log show which request failed
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if(response) {
                    return response;
                }

                return fetch(event.request)
                    .then(response => {
                        if(response.status === 404) {
                            console.log('404');
                        }

                        return caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request.url, response.clone());
                                return response;
                            });
                    });
            })
    );
});

