(function() {
  var e = React.createElement;

  window.MoneyManifestationBanner = function(props) {
    var notifications = [
      "✨ Wealth & Abundance: Dr. M*** from Austin, TX just added $340k in full-arch production",
      "⚡ Only 3 practice onboarding slots remaining for Southwest & National deployments this month",
      "💰 Dr. C*** from Denver booked 14 surgical consults in 14 days under the 5 P's Engine",
      "🎯 Dr. B*** from Phoenix reached 10.4X verified ROAS — chairs booked 6 weeks in advance",
      "🏆 Veteran-Owned • 100% American Film Crews • Backed by the 90-Day Iron-Clad Guarantee"
    ];

    var [currentIdx, setCurrentIdx] = React.useState(0);

    React.useEffect(function() {
      var interval = setInterval(function() {
        setCurrentIdx(function(prev) { return (prev + 1) % notifications.length; });
      }, 5000);
      return function() { clearInterval(interval); };
    }, [notifications.length]);

    return e('div', { className: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 text-slate-950 font-sans py-1.5 px-4 text-xs font-bold tracking-wide shadow-md overflow-hidden relative' },
      e('div', { className: 'container-custom flex items-center justify-between' },
        e('div', { className: 'flex items-center gap-2 overflow-hidden whitespace-nowrap' },
          e('span', { className: 'w-2 h-2 rounded-full bg-red-600 animate-ping inline-block' }),
          e('span', { className: 'font-extrabold uppercase text-[10px] bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded mr-1' }, 'LIVE'),
          e('span', { className: 'transition-opacity duration-500' }, notifications[currentIdx])
        ),
        e('div', { className: 'hidden md:flex items-center gap-3 shrink-0 ml-4 font-extrabold text-[11px]' },
          e('a', { href: 'tel:6036303944', className: 'hover:underline text-slate-950' }, 'DIRECT: (603) 630-3944'),
          e('span', null, '•'),
          e('span', { className: 'uppercase' }, 'SCOTTSDALE & MESA, AZ')
        )
      )
    );
  };
})();
