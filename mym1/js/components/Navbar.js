(function() {
  var e = React.createElement;

  window.Navbar = function(props) {
    var basePath = props.basePath || "";
    var currentPath = props.currentPath || "";
    var [mobileOpen, setMobileOpen] = React.useState(false);

    var navLinks = [
      { name: "About Cassidy", href: basePath + "about.html" },
      { name: "The 5 P's", href: basePath + "five-ps.html" },
      { name: "Transformations", href: basePath + "before-after.html" },
      { name: "Case Studies", href: basePath + "case-studies.html" },
      { name: "Reels", href: basePath + "video-vault.html" },
      { name: "90-Day Guarantee", href: basePath + "guarantee.html" },
      { name: "ROI Calculator", href: basePath + "calculator.html" },
      { name: "DSO Defense", href: basePath + "dso-defense.html" },
      { name: "Disambiguation", href: basePath + "disambiguation.html" },
      { name: "Contact", href: basePath + "contact.html" }
    ];

    return e('header', { className: 'sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' },
      e('div', { className: 'container-custom flex items-center justify-between py-3' },
        // Logo
        e('a', { href: basePath + 'index.html', className: 'flex items-center gap-3 shrink-0' },
          e('img', {
            src: basePath + 'assets/svg/logo-manifest.svg',
            alt: 'Manifest Media Broker Group',
            className: 'h-10 w-auto'
          })
        ),

        // Desktop Nav
        e('nav', { className: 'hidden xl:flex items-center gap-5 text-[13px] font-semibold text-slate-700' },
          navLinks.map(function(link, i) {
            var isActive = currentPath.includes(link.href);
            return e('a', {
              key: i,
              href: link.href,
              className: 'hover:text-blue-700 transition tracking-normal ' +
                (isActive ? 'text-blue-700 border-b-2 border-blue-700 pb-0.5' : '')
            }, link.name);
          })
        ),

        // Direct Dial & CTA
        e('div', { className: 'hidden lg:flex items-center gap-3' },
          e('a', {
            href: 'tel:6036303944',
            className: 'flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-700 transition px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50'
          },
            e('span', { className: 'w-2 h-2 rounded-full bg-emerald-500' }),
            'Direct: (603) 630-3944'
          ),
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-blue text-xs py-2 px-4 shadow-sm'
          }, 'Claim Strategy Call')
        ),

        // Mobile burger toggle
        e('button', {
          onClick: function() { setMobileOpen(!mobileOpen); },
          className: 'xl:hidden text-slate-800 p-2 focus:outline-none'
        },
          e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            mobileOpen ?
              e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' }) :
              e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' })
          )
        )
      ),

      // Mobile Menu
      mobileOpen ? e('div', { className: 'xl:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-lg max-h-[80vh] overflow-y-auto' },
        navLinks.map(function(link, i) {
          return e('a', {
            key: i,
            href: link.href,
            onClick: function() { setMobileOpen(false); },
            className: 'block py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-blue-700 border-b border-slate-100'
          }, link.name);
        }),
        e('div', { className: 'pt-2 flex flex-col gap-2' },
          e('a', {
            href: 'tel:6036303944',
            className: 'text-center py-2 text-xs font-bold text-slate-800 border border-slate-200 rounded-lg bg-slate-50'
          }, 'Direct Line: (603) 630-3944'),
          e('button', {
            onClick: function() {
              setMobileOpen(false);
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-blue w-full text-xs py-2.5'
          }, 'Claim 30-Min Strategy Call')
        )
      ) : null
    );
  };
})();
