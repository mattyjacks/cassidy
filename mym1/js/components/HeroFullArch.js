(function() {
  var e = React.createElement;

  window.HeroFullArch = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-blue-50/30 via-white to-slate-50 border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-300 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-blue-600' }),
            'Specialized Full-Arch Zirconia & All-on-X Acquisition Engine'
          ),

          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Fill Your Surgical Operatories With ',
            e('span', { className: 'text-blue-700' }, '$25,000+ Full-Arch'),
            ' Cases.'
          ),

          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Stop burning marketing capital chasing low-margin cleanings and single crowns. Cassidy Torrey engineers high-ticket cinematic acquisition funnels that deliver pre-educated, pre-qualified full-arch implant candidates ready to commit.'
          ),

          // High-Ticket Math Box
          e('div', { className: 'p-6 sm:p-8 rounded-xl border border-slate-200 bg-white max-w-2xl mx-auto text-left shadow-sm flex flex-col sm:flex-row items-center gap-6' },
            e('div', { className: 'w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-xl shrink-0' }, 'ROI'),
            e('div', { className: 'space-y-1' },
              e('div', { className: 'text-slate-900 font-bold text-base' }, 'The Single-Case Retainer Breakeven'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
                'A single All-on-X case ($25,000 to $55,000 gross) covers multiple months of complete media brokerage, production, and ad management. Everything beyond case one is pure surgical production.'
              )
            )
          ),

          e('div', { className: 'pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-blue w-full sm:w-auto text-sm px-8 py-3.5 shadow-sm'
            },
              e('span', null, 'Claim Full-Arch Market Territory'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: basePath + 'calculator.html',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'Simulate Full-Arch Production')
          ),

          e('div', { className: 'pt-4 text-xs text-slate-500 font-medium' },
            'Backed by the 90-Day Iron-Clad Guarantee • Direct Dial: (603) 630-3944'
          )
        )
      )
    );
  };
})();
