/* Akira Digital AI Assistant — site init.
 * Same-origin external script (allowed by the site's CSP 'self'); sets the
 * widget config and loads the widget from the Command Center, retrying so a
 * client-side re-render of <body> can't stop it from mounting.
 */
window.AKIRA_CHAT = {
  business: "Akira Digital",
  client: "akira-digital",
  area: "Los Angeles & remote — we work with clients anywhere in the U.S.",
  hours: "Mon-Fri, 9am-6pm PT",
  services: "custom websites, redesigns, local SEO, lead capture, branding & logo design, and 24/7 AI chat assistants",
  accent: "#F0555F",
  greeting: "Hey! 👋 Thanks for checking out Akira Digital. Looking for a quote, a demo of what we build, or a question about your website? I can help — and if you leave your info, we'll follow up fast.",
  // Send chat leads through the SAME automation the contact form uses
  // (00 — Website Lead → Notion + SMS alert + Command Center pipeline).
  leadWebhook: "https://hook.us2.make.com/8j8ifiyri8708zz02qqnrtaiwhumqchn",
  forwardToCC: true,
  endpoint: "https://mercedes-akira-digital.vercel.app/api/chat"
};
(function () {
  function load() {
    if (window.__akiraChatMounted) return;
    var s = document.createElement('script');
    s.src = 'https://mercedes-akira-digital.vercel.app/akira-chat.js';
    s.async = true;
    (document.head || document.documentElement).appendChild(s);
  }
  load();
  document.addEventListener('DOMContentLoaded', load);
  var n = 0, t = setInterval(function () {
    if (window.__akiraChatMounted || ++n > 12) { clearInterval(t); return; }
    load();
  }, 700);
})();
