(function() {
  var e = React.createElement;

  window.LiveActivityToastFeed = function(props) {
    var basePath = props.basePath || "";

    var items = [
      { text: "Dr. L*** from Denver just locked in a 90-Day Full Arch Campaign", time: "3 mins ago", tag: "NEW CLIENT" },
      { text: "Dr. Mitchell (Austin, TX) reported +$340k Q1 revenue under 5 P's Engine", time: "14 mins ago", tag: "CASE RESULT" },
      { text: "Dr. Brooks (Phoenix, AZ) achieved 10.4X verified ROI on $4,000 monthly spend", time: "28 mins ago", tag: "ROAS RECORD" },
      { text: "Only 3 practice onboarding slots remaining for Southwest deployments this month", time: "Just now", tag: "SCARCITY" },
      { text: "American Cinema Unit dispatched for on-location surgical shoot in Scottsdale, AZ", time: "1 hour ago", tag: "PRODUCTION" }
    ];

    var [currentIdx, setCurrentIdx] = React.useState(0);
    var [isVisible, setIsVisible] = React.useState(true);
    var [isDismissed, setIsDismissed] = React.useState(false);

    React.useEffect(function() {
      if (isDismissed) return;
      var interval = setInterval(function() {
        setIsVisible(false);
        setTimeout(function() {
          setCurrentIdx(function(prev) { return (prev + 1) % items.length; });
          setIsVisible(true);
        }, 400);
      }, 7000);
      return function() { clearInterval(interval); };
    }, [isDismissed, items.length]);

    if (isDismissed) return null;

    var current = items[currentIdx];

    return e('div', {
      className: 'fixed bottom-6 left-6 z-40 max-w-xs sm:max-w-sm transition-all duration-500 ease-in-out ' +
        (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
    },
      e('div', { className: 'glass-card-premium p-3.5 border border-yellow-500/30 shadow-2xl flex items-start gap-3 relative group' },
        e('button', {
          onClick: function() { setIsDismissed(true); },
          className: 'absolute top-1.5 right-2 text-slate-500 hover:text-white text-xs'
        }, '✕'),
        e('div', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0 mt-1.5' }),
        e('div', { className: 'space-y-1 pr-3' },
          e('div', { className: 'flex items-center gap-2' },
            e('span', { className: 'text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-300 font-mono tracking-wider' }, current.tag),
            e('span', { className: 'text-[10px] text-slate-400' }, current.time)
          ),
          e('p', { className: 'text-xs text-slate-200 leading-snug font-medium' }, current.text),
          e('div', { className: 'text-[10px] text-amber-300/80 font-semibold' },
            'Manifest Media Broker Group • Verified Clinical Metric'
          )
        )
      )
    );
  };
})();
