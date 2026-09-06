(function() {
  var e = React.createElement;

  window.HeroScarcity = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#1a1408] via-[#0d0a04] to-[#07090e]' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/50 bg-amber-950/70 text-amber-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-red-500 animate-ping' }),
            'STRICT OPERATIONAL CAP: ONLY 4 NEW PRACTICES ONBOARDED PER MONTH'
          ),

          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Guaranteed Territorial Exclusivity for ',
            e('span', { className: 'text-amber-400 font-extrabold' }, 'One Practice Per Market'),
            '.'
          ),

          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Because Cassidy Torrey dispatches expert-vetted American film crews directly on-site to your clinic, we strictly limit client onboarding to four practices per month nationwide. Once your zip code is locked, your competitors are permanently barred.'
          ),

          // Territory Countdown Box
          e('div', { className: 'p-6 rounded-xl border-2 border-amber-500/50 bg-slate-900/90 max-w-2xl mx-auto text-center space-y-3 shadow-2xl' },
            e('div', { className: 'text-xs uppercase font-bold text-amber-300 font-mono tracking-widest' },
              'Current Q3/Q4 Production Allocation:'
            ),
            e('div', { className: 'flex items-center justify-center gap-4 text-center' },
              e('div', { className: 'p-3 rounded-lg bg-slate-950 border border-slate-800' },
                e('div', { className: 'text-3xl font-bold font-mono text-emerald-400' }, '3 of 4'),
                e('div', { className: 'text-[10px] text-slate-400 uppercase font-semibold' }, 'Slots Claimed')
              ),
              e('div', { className: 'p-3 rounded-lg bg-slate-950 border border-amber-500/40' },
                e('div', { className: 'text-3xl font-bold font-mono text-amber-300 animate-pulse' }, '1 Final Slot'),
                e('div', { className: 'text-[10px] text-amber-200 uppercase font-semibold' }, 'Remaining This Month')
              )
            ),
            e('p', { className: 'text-xs text-slate-300 italic' },
              '“We never represent two competing doctors in the same surgical territory.”'
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
              e('span', null, 'Check Territory Availability & Claim Slot'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: 'tel:6036303944',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'Emergency Inquiries: (603) 630-3944')
          )
        )
      )
    );
  };
})();
