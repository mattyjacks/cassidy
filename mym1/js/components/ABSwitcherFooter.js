(function() {
  var e = React.createElement;

  window.ABSwitcherFooter = function(props) {
    var activeId = props.activeId || "master";
    var depth = props.depth || 0; // 0 for root, 2 for ab/1, etc.
    var [isExpanded, setIsExpanded] = React.useState(true);

    var variants = window.AB_TEST_REGISTRY || [];

    var getTargetUrl = function(targetRel) {
      if (depth === 2) {
        if (targetRel === "index.html") return "../../index.html";
        return "../../" + targetRel;
      } else if (depth === 1) {
        if (targetRel === "index.html") return "../index.html";
        return "../" + targetRel;
      } else {
        return "./" + targetRel;
      }
    };

    var currentVariant = variants.find(function(v) { return v.id === activeId; }) || variants[0];

    return e('div', { className: 'ab-switcher-deck text-white' },
      e('div', { className: 'container-custom' },
        // Bar header with Toggle
        e('div', { className: 'flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800' },
          e('div', { className: 'flex items-center gap-3' },
            e('span', { className: 'w-3 h-3 rounded-full bg-yellow-400 animate-pulse' }),
            e('span', { className: 'font-cinzel text-xs uppercase tracking-widest text-amber-300 font-bold' },
              'A/B Testing Conversion Lab & Index Engine'
            ),
            e('span', { className: 'text-[11px] px-2 py-0.5 rounded bg-yellow-950/80 border border-yellow-500/40 text-yellow-300 font-mono' },
              'ACTIVE: ' + (currentVariant ? currentVariant.code : 'CONTROL-00')
            )
          ),

          e('div', { className: 'flex items-center gap-3 text-xs' },
            e('span', { className: 'text-slate-400 hidden sm:inline' }, 'Switch between high-converting index variants:'),
            e('button', {
              onClick: function() { setIsExpanded(!isExpanded); },
              className: 'text-xs text-yellow-400 hover:text-white px-2 py-1 rounded bg-slate-800 border border-slate-700'
            }, isExpanded ? 'Hide Details ▲' : 'Show All Variations ▼')
          )
        ),

        // Quick button row
        e('div', { className: 'py-3 flex flex-wrap items-center justify-center sm:justify-start gap-2' },
          variants.map(function(v) {
            var isActive = v.id === activeId;
            return e('a', {
              key: v.id,
              href: getTargetUrl(v.relativePath),
              className: 'ab-quick-btn ' + (isActive ? 'current' : ''),
              title: v.angle
            },
              e('span', { className: 'w-2 h-2 rounded-full', style: { backgroundColor: v.color } }),
              v.name
            );
          })
        ),

        // Detailed Cards Accordion
        isExpanded ? e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 pt-3' },
          variants.map(function(v) {
            var isActive = v.id === activeId;
            return e('div', {
              key: v.id,
              className: 'ab-variant-card ' + (isActive ? 'active' : '')
            },
              isActive ? e('span', { className: 'ab-pill-active' }, 'Live Now') : null,
              e('div', null,
                e('div', { className: 'text-[10px] font-mono font-bold tracking-wider mb-1', style: { color: v.color } }, v.code),
                e('div', { className: 'text-xs font-bold text-white mb-1 leading-snug' }, v.name),
                e('div', { className: 'text-[11px] text-amber-200/90 font-medium mb-2 italic leading-tight' }, '“' + v.headline + '”'),
                e('p', { className: 'text-[10px] text-slate-400 leading-relaxed mb-3' }, v.hypothesis)
              ),
              e('div', { className: 'pt-2 border-t border-slate-800 flex items-center justify-between' },
                e('span', { className: 'text-[9px] text-slate-500 uppercase tracking-wider' }, 'Target: ' + v.targetVisitor.split(',')[0]),
                isActive ?
                  e('span', { className: 'text-[10px] font-bold text-yellow-400' }, 'Viewing') :
                  e('a', {
                    href: getTargetUrl(v.relativePath),
                    className: 'text-[10px] font-bold text-amber-300 hover:text-white underline'
                  }, 'Launch Test →')
              )
            );
          })
        ) : null,

        e('div', { className: 'text-center pt-3 text-[11px] text-slate-400' },
          'Engineered for Cassidy Torrey • Manifest Media Broker Group LLC • Direct Booking: ',
          e('a', { href: 'tel:6036303944', className: 'text-yellow-400 font-bold hover:underline' }, '(603) 630-3944')
        )
      )
    );
  };
})();
