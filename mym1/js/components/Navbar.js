(function() {
  var e = React.createElement;

  window.Navbar = function(props) {
    var basePath = props.basePath || "";
    var currentPath = props.currentPath || "";
    var [mobileOpen, setMobileOpen] = React.useState(false);

    var navLinks = [
      { name: "About Cassidy", href: basePath + "about.html" },
      { name: "The 5 P's", href: basePath + "five-ps.html" },
      { name: "Clinical Slider", href: basePath + "before-after.html" },
      { name: "Case Studies (347+)", href: basePath + "case-studies.html" },
      { name: "Video Vault", href: basePath + "video-vault.html" },
      { name: "90-Day Guarantee", href: basePath + "guarantee.html" },
      { name: "ROI Calculator", href: basePath + "calculator.html" },
      { name: "DSO Defense", href: basePath + "dso-defense.html" },
      { name: "New Hollywood", href: basePath + "new-hollywood.html" },
      { name: "Disambiguation", href: basePath + "disambiguation.html" },
      { name: "Contact", href: basePath + "contact.html" }
    ];

    return e('header', { className: 'sticky top-0 z-50 bg-[#07090e]/95 backdrop-blur-md border-b border-yellow-600/25 shadow-xl' },
      e('div', { className: 'container-custom flex items-center justify-between py-2.5' },
        // Logo
        e('a', { href: basePath + 'index.html', className: 'flex items-center gap-3 group shrink-0' },
          e('img', {
            src: basePath + 'assets/svg/logo-manifest.svg',
            alt: 'Manifest Media Broker Group',
            className: 'h-11 w-auto'
          })
        ),

        // Desktop Nav
        e('nav', { className: 'hidden 2xl:flex items-center gap-5 text-xs font-semibold text-slate-300' },
          navLinks.map(function(link, i) {
            return e('a', {
              key: i,
              href: link.href,
              className: 'hover:text-yellow-400 transition tracking-wide uppercase ' +
                (currentPath.includes(link.href) ? 'text-yellow-400 border-b-2 border-yellow-400 pb-0.5' : '')
            }, link.name);
          })
        ),

        // Compact Desktop Nav for medium/large screens (Dropdown or highlights)
        e('div', { className: 'hidden xl:flex 2xl:hidden items-center gap-4 text-xs font-semibold text-slate-300' },
          e('a', { href: basePath + 'about.html', className: 'hover:text-yellow-400' }, 'About'),
          e('a', { href: basePath + 'five-ps.html', className: 'hover:text-yellow-400' }, 'The 5 P\'s'),
          e('a', { href: basePath + 'before-after.html', className: 'hover:text-yellow-400 text-amber-300' }, 'Transformations'),
          e('a', { href: basePath + 'case-studies.html', className: 'hover:text-yellow-400' }, 'Case Studies'),
          e('a', { href: basePath + 'video-vault.html', className: 'hover:text-yellow-400' }, 'Reels'),
          e('a', { href: basePath + 'guarantee.html', className: 'hover:text-yellow-400 text-emerald-400' }, 'Guarantee'),
          e('a', { href: basePath + 'calculator.html', className: 'hover:text-yellow-400' }, 'Calculator'),
          e('a', { href: basePath + 'disambiguation.html', className: 'hover:text-yellow-400' }, 'Disambiguation')
        ),

        // Direct Dial & CTA
        e('div', { className: 'hidden lg:flex items-center gap-3' },
          e('a', {
            href: 'tel:6036303944',
            className: 'flex items-center gap-2 text-xs font-bold text-amber-200 hover:text-white transition px-2.5 py-1.5 rounded border border-yellow-600/30 bg-slate-900/60'
          },
            e('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-ping' }),
            'DIRECT: (603) 630-3944'
          ),
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-gold text-xs py-2 px-3.5 shadow-md'
          }, 'Claim Strategy Call')
        ),

        // Mobile burger toggle
        e('button', {
          onClick: function() { setMobileOpen(!mobileOpen); },
          className: '2xl:hidden xl:hidden text-yellow-400 p-2 focus:outline-none'
        },
          e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            mobileOpen ?
              e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' }) :
              e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' })
          )
        )
      ),

      // Mobile Menu
      mobileOpen ? e('div', { className: '2xl:hidden bg-slate-950 border-b border-yellow-600/30 px-6 py-4 space-y-2.5 max-h-[80vh] overflow-y-auto' },
        navLinks.map(function(link, i) {
          return e('a', {
            key: i,
            href: link.href,
            onClick: function() { setMobileOpen(false); },
            className: 'block py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-yellow-400 border-b border-slate-800/60'
          }, link.name);
        }),
        e('div', { className: 'pt-2 flex flex-col gap-2.5' },
          e('a', {
            href: 'tel:6036303944',
            className: 'text-center py-2 text-xs font-bold text-amber-300 border border-yellow-600/40 rounded bg-slate-900'
          }, 'Direct Line: (603) 630-3944'),
          e('button', {
            onClick: function() {
              setMobileOpen(false);
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-gold w-full text-xs py-2.5'
          }, 'Claim 30-Min Strategy Call')
        )
      ) : null
    );
  };
})();
