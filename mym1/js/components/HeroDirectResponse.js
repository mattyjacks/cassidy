(function() {
  var e = React.createElement;

  window.HeroDirectResponse = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-emerald-600' }),
            'Zero Financial Risk: 90-Day Iron-Clad Performance Underwriting'
          ),

          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Guaranteed ',
            e('span', { className: 'text-blue-700' }, '7X to 10X ROAS'),
            ' on Implant Marketing — Or We Work 100% Free.'
          ),

          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Frustrated by marketing agencies draining capital on clicks that never book surgery? Cassidy Torrey backs your growth with an ',
            e('strong', { className: 'text-slate-900 underline decoration-blue-500' }, 'unconditional 90-Day Iron-Clad Guarantee'),
            '. If your practice does not observe measurable surgical patient growth in 90 days, we continue executing for free until you do.'
          ),

          // Guarantee Callout Card
          e('div', { className: 'p-6 sm:p-8 rounded-xl border border-slate-200 bg-white max-w-2xl mx-auto shadow-sm text-left flex flex-col sm:flex-row items-center gap-6' },
            e('img', {
              src: basePath + 'assets/svg/badge-guarantee.svg',
              alt: '90-Day Guarantee',
              className: 'w-20 h-20 shrink-0'
            }),
            e('div', { className: 'space-y-1.5' },
              e('div', { className: 'text-slate-900 font-bold text-base' }, 'The Manifest Iron-Clad Performance Contract:'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
                '“No fine print. No hidden disclaimers. If our customized 5 P\'s campaign does not generate measurable patient growth within 90 days, Manifest Media Broker Group absorbs 100% of the ongoing management fees until your targets are met.”'
              ),
              e('div', { className: 'text-xs text-blue-700 font-semibold' },
                '— Cassidy Torrey, Owner & Executive Producer'
              )
            )
          ),

          // CTAs
          e('div', { className: 'pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-blue w-full sm:w-auto text-sm px-8 py-3.5 shadow-sm'
            },
              e('span', null, 'Lock In Guaranteed Strategy Session'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: basePath + 'calculator.html',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'Calculate Practice ROI (7X - 10X)')
          ),

          e('div', { className: 'pt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 font-medium' },
            e('span', null, 'Direct Line: (603) 630-3944'),
            e('span', null, '•'),
            e('span', null, 'Only 4 Practice Onboarding Slots Available This Month'),
            e('span', null, '•'),
            e('span', null, 'BBB A+ Accredited Enterprise')
          )
        )
      )
    );
  };
})();
