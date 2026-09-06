(function() {
  var e = React.createElement;

  window.HeroScarcity = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-300 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-blue-600' }),
            'OPERATIONAL CAP: ONLY 4 NEW PRACTICES ONBOARDED PER MONTH NATIONWIDE'
          ),

          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Guaranteed Territorial Exclusivity for ',
            e('span', { className: 'text-blue-700' }, 'One Practice Per Market'),
            '.'
          ),

          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Because Cassidy Torrey dispatches expert-vetted American film crews directly on-site to your clinic, we strictly limit client onboarding to four practices per month across the country. Once your local territory is locked, competitors are permanently barred.'
          ),

          // Territory Countdown Box
          e('div', { className: 'p-6 sm:p-8 rounded-xl border border-slate-200 bg-white max-w-2xl mx-auto text-center space-y-4 shadow-sm' },
            e('div', { className: 'text-xs uppercase font-bold text-slate-500 tracking-wider' },
              'Current Monthly Production Allocation:'
            ),
            e('div', { className: 'flex items-center justify-center gap-4 text-center' },
              e('div', { className: 'p-4 rounded-xl bg-slate-50 border border-slate-200 min-w-[120px]' },
                e('div', { className: 'text-3xl font-extrabold font-sans text-slate-800' }, '3 of 4'),
                e('div', { className: 'text-[11px] text-slate-500 uppercase font-semibold mt-0.5' }, 'Slots Claimed')
              ),
              e('div', { className: 'p-4 rounded-xl bg-blue-50 border border-blue-200 min-w-[120px]' },
                e('div', { className: 'text-3xl font-extrabold font-sans text-blue-700' }, '1 Final Slot'),
                e('div', { className: 'text-[11px] text-blue-800 uppercase font-semibold mt-0.5' }, 'Remaining')
              )
            ),
            e('p', { className: 'text-xs text-slate-600 italic' },
              '“We strictly enforce geographic exclusivity: we never represent two competing doctors in the same surgical radius.”'
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
              e('span', null, 'Check Territory Availability & Claim Slot'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: 'tel:6036303944',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'Direct Line: (603) 630-3944')
          )
        )
      )
    );
  };
})();
