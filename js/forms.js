/* ── EMAIL SMART HELPER ── */
function handleEmailInput(el) {
  const val = el.value;
  const suffix = document.getElementById('cf-email-suffix');
  const hint   = document.getElementById('cf-email-hint');
  if (!suffix) return;

  if (val.includes('@')) {
    // User typed their own domain — hide the suffix
    suffix.classList.add('hidden');
    hint.textContent = 'Using the full address you typed';
  } else {
    suffix.classList.remove('hidden');
    hint.textContent = 'Type your Gmail username — we\'ll add @gmail.com for you, or type a full address';
  }
  el.classList.remove('invalid');
}

function finalizeEmail(el) {
  const val = el.value.trim();
  if (!val) return;
  // If no @ typed, append @gmail.com
  if (!val.includes('@')) {
    el.value = val + '@gmail.com';
    const suffix = document.getElementById('cf-email-suffix');
    const hint   = document.getElementById('cf-email-hint');
    if (suffix) suffix.classList.add('hidden');
    if (hint)   hint.textContent = '@gmail.com added automatically ✓';
  }
}

/* ── PHONE PLACEHOLDER ── */
function updatePhonePlaceholder() {
  const sel    = document.getElementById('cf-country-code');
  const input  = document.getElementById('cf-phone-num');
  if (!sel || !input) return;
  const digits = sel.options[sel.selectedIndex].getAttribute('data-digits') || '10';
  input.placeholder = digits + '-digit mobile number';
  input.oninput = function() {
    this.value = this.value.replace(/\D/g,'').slice(0, parseInt(digits) + 2);
  };
}

/* ── VALIDATION HELPER ── */
function markInvalid(id, msg) {
  const el = document.getElementById(id);
  if (el) el.classList.add('invalid');
  showToast('✗ ' + msg, true);
}

function clearInvalid() {
  document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
}

/* ── FORM SUBMIT ── */
function submitForm() {
  const btn = event && event.currentTarget ? event.currentTarget : document.querySelector('.btn-primary');
  clearInvalid();

  const val = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

  const firstName = val('cf-fname');
  const lastName  = val('cf-lname');
  const fullName  = (firstName + ' ' + lastName).trim();

  // Finalize email before reading (handles if user didn't blur)
  const emailEl = document.getElementById('cf-email');
  if (emailEl) finalizeEmail(emailEl);

  const email   = val('cf-email');
  const course  = val('cf-course');
  const message = val('cf-message');

  // Get phone with country code
  const countryCode = val('cf-country-code') || '+91';
  const phoneNum    = val('cf-phone-num');
  const phone       = phoneNum ? countryCode + ' ' + phoneNum : '';

  // ── Mandatory field checks ──
  if (!firstName) { markInvalid('cf-fname', 'Please enter your first name.'); if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; } return; }
  if (!lastName)  { markInvalid('cf-lname', 'Please enter your last name.');  if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; } return; }

  if (!email || !email.includes('@')) {
    markInvalid('cf-email', 'Please enter a valid email address.');
    if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
    return;
  }

  if (!phoneNum) {
    markInvalid('cf-phone-num', 'Please enter your phone number.');
    if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
    return;
  }
  if (!/^\d{6,12}$/.test(phoneNum)) {
    markInvalid('cf-phone-num', 'Please enter a valid phone number.');
    if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
    return;
  }

  if (!course) {
    markInvalid('cf-course', 'Please select a course.');
    if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
    return;
  }

  if (!message) {
    markInvalid('cf-message', 'Please enter a message.');
    if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
    return;
  }

  if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

  const params = {
    to_name:         'Gupta Chess Academy',
    from_name:       fullName,
    reply_to:        email,
    phone_number:    phone,
    course_interest: course,
    message:         message,
  };

  emailjs.send('service_jguyq1t', 'template_d8a00iw', params)
    .then(() => {
      showToast('✓ Message sent! We\'ll contact you within 24 hours.', false);
      if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
      ['cf-fname','cf-lname','cf-email','cf-phone-num','cf-message'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
      });
      const sel = document.getElementById('cf-course'); if (sel) sel.selectedIndex = 0;
      // Reset email suffix
      const suffix = document.getElementById('cf-email-suffix');
      const hint   = document.getElementById('cf-email-hint');
      if (suffix) suffix.classList.remove('hidden');
      if (hint)   hint.textContent = 'Type your Gmail username — we\'ll add @gmail.com for you, or type a full address';
      // Reset country code to India
      const cc = document.getElementById('cf-country-code'); if (cc) cc.value = '+91';
    }, err => {
      showToast('✗ Send failed. Please call +91 86608 13472', true);
      if (btn) { btn.textContent = 'Send Message ♟'; btn.disabled = false; }
      console.error('EmailJS error:', err);
    });
}

function showToast(msg, isError) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = isError ? '#c0392b' : '';
  t.classList.add('show');
  setTimeout(() => { t.classList.remove('show'); t.style.background = ''; }, 3800);
}
