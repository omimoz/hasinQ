//this is sample code of service worker but already for next js and vite js pwa library exist they are powerful and easy to use
export default function swDev() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/sw.js")
        .then(function (registration) {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch(function (err) {
          console.error("Service Worker registration failed:", err);
        });
    });
  }
}
