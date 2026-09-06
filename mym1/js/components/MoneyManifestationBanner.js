(function() {
  var e = React.createElement;

  window.MoneyManifestationBanner = function(props) {
    var notifications = [
      "Manifest Media Broker Group • Q3/Q4 Surgical Territory Allotments (Scottsdale & Mesa, AZ)",
      "Clinical Metric: Dr. Mitchell (Austin, TX) added $340k in full-arch surgical production",
      "Territorial Cap: Strictly limited to 4 new practices onboarded per month nationwide",
      "Empirical Record: Dr. Brooks (Phoenix, AZ) verified 10.4X capital return within 60 days",
      "Veteran-Owned • HIPAA Secure • Strictly 100% Domestic American Cinematography"
    ];

    var [currentIdx, setCurrentIdx] = React.useState(0);

    React.useEffect(function() {
      var interval = setInterval(function() {
        setCurrentIdx(function(prev) { return (prev + 1) % notifications.length; });
      }, 6000);
      return function() { clearInterval(interval); };
    }, [notifications.length]);

    return e('div', { className: 'bg-[#0f172a] text-slate-200 border-b border-slate-800 text-xs py-2 px-4 shadow-sm' },
      e('div', { className: 'container-custom flex items-center justify-between' },
        e('div', { className: 'flex items-center gap-2.5 overflow-hidden whitespace-nowrap' },
          e('span', { className: 'px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase' }, 'NOTICE'),
          e('span', { className: 'text-xs text-slate-300 font-medium' }, notifications[currentIdx])
        ),
        e('div', { className: 'hidden md:flex items-center gap-3 shrink-0 ml-4 text-[11px] font-semibold text-slate-400' },
          e('span', { className: 'text-slate-300' }, 'Direct Line:'),
          e('a', { href: 'tel:6036303944', className: 'text-blue-400 hover:text-white font-bold' }, '(603) 630-3944'),
          e('span', { className: 'text-slate-600' }, '|'),
          e('span', { className: 'uppercase tracking-wider text-[10px]' }, 'Scottsdale & Mesa, AZ')
        )
      )
    );
  };
})();
