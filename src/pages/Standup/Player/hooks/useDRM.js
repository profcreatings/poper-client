// import { useEffect, useState } from 'react';
// import shaka from 'shaka-player/dist/shaka-player.ui.js';
//
// import { useDRMLicenseQuery } from '../../../../queries/player/useDRMLicenseQuery.js';
//
// // TODO: refactor
// export const useDRM = ({ player, videoRef, src }) => {
//     const { data: licenseURL } = useDRMLicenseQuery();
//     const [assetLoaded, setAssetLoaded] = useState(false);
//
//     function load() {
//         player.load(src).then(function () {
//             setAssetLoaded(true);
//         });
//     }
//
//     async function loadAssetWithWidevine() {
//         player.configure({
//             drm: {
//                 servers: {
//                     'com.widevine.alpha': licenseURL,
//                 },
//                 advanced: {
//                     'com.widevine.alpha': {
//                         videoRobustness: 'SW_SECURE_CRYPTO',
//                         audioRobustness: 'SW_SECURE_CRYPTO',
//                     },
//                 },
//             },
//         });
//
//         load();
//     }
//
//     async function loadAssetWithFairplay() {
//         const req = await fetch(/* fairplayCertificateURI */);
//         const cert = await req.arrayBuffer();
//
//         player.getNetworkingEngine().registerRequestFilter((type, request) => {
//             if (type !== shaka.net.NetworkingEngine.RequestType.LICENSE) {
//                 return;
//             }
//
//             const spc_string = btoa(
//                 String.fromCharCode.apply(null, new Uint8Array(request.body)),
//             );
//
//             request.headers['Content-Type'] = 'application/json';
//             request.body = JSON.stringify({
//                 spc: spc_string,
//             });
//         });
//
//         player
//             .getNetworkingEngine()
//             .registerResponseFilter((type, response) => {
//                 if (type !== shaka.net.NetworkingEngine.RequestType.LICENSE) {
//                     return;
//                 }
//
//                 const responseText = shaka.util.StringUtils.fromUTF8(
//                     response.data,
//                 );
//                 const parsedResponse = JSON.parse(responseText);
//
//                 response.data = shaka.util.Uint8ArrayUtils.fromBase64(
//                     parsedResponse.ckc,
//                 ).buffer;
//             });
//
//         player.configure({
//             drm: {
//                 servers: {
//                     'com.apple.fps': licenseURL,
//                 },
//                 advanced: {
//                     'com.apple.fps': {
//                         serverCertificate: new Uint8Array(cert),
//                     },
//                 },
//             },
//         });
//
//         load();
//     }
//
//     useEffect(() => {
//         if (assetLoaded || !licenseURL) {
//             return;
//         }
//
//         if (!videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
//             loadAssetWithWidevine();
//         } else if (
//             videoRef.current.canPlayType('application/vnd.apple.mpegurl')
//         ) {
//             loadAssetWithFairplay();
//         } else {
//             load();
//         }
//     }, [assetLoaded, licenseURL]);
// };
