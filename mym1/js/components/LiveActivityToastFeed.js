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
      e('div', { className: 'bg-white rounded-xl p-3.5 border border-slate-200 shadow-lg flex items-start gap-3 relative group' },
        e('button', {
          onClick: function() { setIsDismissed(true); },
          className: 'absolute top-1.5 right-2 text-slate-400 hover:text-slate-800 text-xs'
        }, '✕'),
        e('div', { className: 'w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5' }),
        e('div', { className: 'space-y-1 pr-3' },
          e('div', { className: 'flex items-center gap-2' },
            e('span', { className: 'text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 font-mono tracking-wider' }, current.tag),
            e('span', { className: 'text-[11px] text-slate-500' }, current.time)
          ),
          e('p', { className: 'text-xs text-slate-800 leading-snug font-medium' }, current.text),
          e('div', { className: 'text-[11px] text-blue-700 font-semibold' },
            'Manifest Media Broker Group • Verified Clinical Metric'
          )
        )
      )
    );
  };
})();
