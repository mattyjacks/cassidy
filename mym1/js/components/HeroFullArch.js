(function() {
  var e = React.createElement;

  window.HeroFullArch = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#180e28] via-[#0d0716] to-[#07090e]' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/60 text-purple-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-purple-400 animate-ping' }),
            'Specialized Full-Arch Zirconia & All-on-X Acquisition Engine'
          ),

          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Fill Your Surgical Operatories With ',
            e('span', { className: 'text-purple-400 font-extrabold' }, '$25,000+ Full-Arch'),
            ' Cases.'
          ),

          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Stop burning ad spend chasing low-margin cleanings and single crowns. Cassidy Torrey engineers high-ticket cinematic acquisition funnels that deliver pre-educated, pre-qualified full-arch implant candidates ready to commit.'
          ),

          // High-Ticket Math Box
          e('div', { className: 'p-6 rounded-xl border border-purple-500/30 bg-slate-900/80 max-w-2xl mx-auto text-left flex flex-col sm:flex-row items-center gap-6' },
            e('div', { className: 'w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 flex items-center justify-center font-bold text-2xl font-mono shrink-0' }, '$$$'),
            e('div', { className: 'space-y-1' },
              e('div', { className: 'text-purple-300 font-cinzel text-base font-bold' }, 'The Single-Case Retainer Breakeven'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                'A single All-on-X case ($25,000 to $55,000 gross) covers multiple months of complete media brokerage, production, and ad management. Everything beyond case one is pure surgical EBITDA.'
              )
            )
          ),

          e('div', { className: 'pt-4 flex flex-col sm:flex-row items-center justify-center gap-4' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-gold w-full sm:w-auto text-sm px-8 py-4 shadow-xl'
            },
              e('span', null, 'Claim Full-Arch Market Territory'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: basePath + 'calculator.html',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'Simulate Full-Arch Case Production')
          ),

          e('div', { className: 'pt-4 text-xs text-slate-400' },
            'Backed by the 90-Day Iron-Clad Guarantee • Direct Dial: (603) 630-3944'
          )
        )
      )
    );
  };
})();
