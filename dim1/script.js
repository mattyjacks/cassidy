if (typeof window !== 'undefined') {
    window.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {

    // ===== FORM SUBMISSION =====
    var contactForm = document.getElementById('lead-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var inputs = this.querySelectorAll('input');
            var data = {};
            inputs.forEach(function(input) { data[input.placeholder] = input.value; });
            console.log('Lead submitted:', data);
            this.innerHTML = '<div style="text-align:center;padding:2rem;"><h3 style="color:var(--accent);font-size:1.5rem;margin-bottom:1rem;">You\'re In!</h3><p style="font-size:1.1rem;">Cassidy will personally reach out within 24 hours to schedule your free strategy session.</p><p style="margin-top:1rem;font-size:0.95rem;opacity:0.8;">Check your phone - we like to call first.</p></div>';
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href.length > 1) {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close exit popup if open
                    var popup = document.getElementById('exit-popup');
                    if (popup) popup.classList.remove('active');
                }
            }
        });
    });

    // ===== ANIMATED COUNTERS #24 =====
    var countersStarted = false;
    function animateCounters() {
        if (countersStarted) return;
        var statNumbers = document.querySelectorAll('.stat-number');
        if (!statNumbers.length) return;

        var statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        var rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersStarted = true;
            statNumbers.forEach(function(el) {
                var target = parseFloat(el.getAttribute('data-target'));
                var suffix = el.getAttribute('data-suffix') || '';
                var prefix = el.getAttribute('data-prefix') || '';
                var isDecimal = target % 1 !== 0;
                var duration = 2000;
                var startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var current = eased * target;
                    el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }
                requestAnimationFrame(step);
            });
        }
    }
    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // ===== COUNTDOWN TIMER #7 =====
    function startCountdown() {
        var now = new Date();
        var endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
        function update() {
            var now = new Date();
            var diff = endOfMonth - now;
            if (diff <= 0) {
                endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
                diff = endOfMonth - now;
            }
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((diff % (1000 * 60)) / 1000);

            var daysEl = document.getElementById('cd-days');
            var hoursEl = document.getElementById('cd-hours');
            var minsEl = document.getElementById('cd-mins');
            var secsEl = document.getElementById('cd-secs');

            if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
            if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
            if (minsEl) minsEl.textContent = mins < 10 ? '0' + mins : mins;
            if (secsEl) secsEl.textContent = secs < 10 ? '0' + secs : secs;
        }
        update();
        setInterval(update, 1000);
    }
    startCountdown();

    // ===== FAQ ACCORDION #31 =====
    document.querySelectorAll('.faq-question').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var item = this.parentElement;
            var isActive = item.classList.contains('active');
            // Close all
            document.querySelectorAll('.faq-item').forEach(function(faq) {
                faq.classList.remove('active');
            });
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ===== EXIT INTENT POPUP #19 =====
    var exitShown = false;
    document.addEventListener('mouseout', function(e) {
        if (e.clientY <= 0 && e.relatedTarget === null && !exitShown) {
            exitShown = true;
            var popup = document.getElementById('exit-popup');
            if (popup) popup.classList.add('active');
        }
    });

    var exitClose = document.getElementById('exit-close');
    var exitOverlay = document.getElementById('exit-overlay');
    var exitCtaBtn = document.getElementById('exit-cta-btn');

    function closePopup() {
        var popup = document.getElementById('exit-popup');
        if (popup) popup.classList.remove('active');
    }

    if (exitClose) exitClose.addEventListener('click', closePopup);
    if (exitOverlay) exitOverlay.addEventListener('click', closePopup);
    if (exitCtaBtn) exitCtaBtn.addEventListener('click', closePopup);

    // ===== SCROLL ANIMATIONS =====
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    var animatedElements = document.querySelectorAll('.p-card, .testimonial-card, .pain-card, .step-card, .transform-card, .american-card, .stat-card');
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== NAVBAR HIDE URGENCY BAR ON SCROLL =====
    var urgencyBar = document.querySelector('.urgency-bar');
    var lastScroll = 0;
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;
        if (urgencyBar) {
            if (currentScroll > 200) {
                urgencyBar.style.transform = 'translateY(-100%)';
                urgencyBar.style.transition = 'transform 0.3s ease';
            } else {
                urgencyBar.style.transform = 'translateY(0)';
            }
        }
        lastScroll = currentScroll;
    });

});
