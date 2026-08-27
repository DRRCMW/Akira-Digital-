// Vendor React + ReactDOM locally so the site has no runtime CDN dependency.
// This file must load before support.js so window.__resources exists when the
// DC runtime tries to fetch React.
window.__resources = {
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js": "react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js": "react-dom.production.min.js"
};
// Baseline timestamp used by the contact form spam guard (bots submit forms in
// under ~2 seconds; humans take longer).
window.__akMountedAt = Date.now();
