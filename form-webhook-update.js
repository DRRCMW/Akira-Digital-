// ═══════════════════════════════════════════════════════════════
// PASTE THIS INSIDE YOUR EXISTING <script> TAG IN index.html
// OR ADD IT JUST BEFORE THE CLOSING </body> TAG
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ── Your Make.com Webhook URL ──────────────────────────────
  const WEBHOOK_URL = 'https://hook.us2.make.com/8j8ifyri8708zz02qqnrtaiwhumqchn';

  // ── Find the contact form ─────────────────────────────────
  // Try common selectors — one of these will match your form
  const form = document.querySelector('form')
    || document.getElementById('contact-form')
    || document.querySelector('[data-form]');

  if (!form) return; // No form found — no problem, script exits cleanly

  form.addEventListener('submit', function (e) {
    // ── Collect all form field values ────────────────────────
    const data = {
      business_name:    getValue(form, ['business-name','businessName','business_name','name','Name']),
      email:            getValue(form, ['email','Email','e-mail']),
      phone:            getValue(form, ['phone','Phone','tel','telephone']),
      business_type:    getValue(form, ['business-type','businessType','business_type','industry','type','Industry']),
      package_interest: getValue(form, ['package','Package','package-interest','packageInterest']),
      city:             getValue(form, ['city','City']),
      message:          getValue(form, ['message','Message','notes','Notes','anything','details']),
    };

    // ── Send to Make.com (fire-and-forget — won't block form) ─
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'no-cors' // Prevents CORS errors — Make.com still receives the data
    }).catch(function() {
      // Silent fail — form submission continues even if webhook fails
    });

    // ── Let the form continue its normal submission ───────────
    // (don't call e.preventDefault() — your existing email notification still works)
  });

  // ── Helper: tries multiple field name variations ──────────
  function getValue(form, names) {
    for (const name of names) {
      const el = form.querySelector('[name="'+name+'"]')
        || form.querySelector('[id="'+name+'"]')
        || form.querySelector('[placeholder*="'+name+'"]');
      if (el) return el.value || '';
    }
    return '';
  }

});
