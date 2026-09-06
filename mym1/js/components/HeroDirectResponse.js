(function() {
  var e = React.createElement;

  window.HeroDirectResponse = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0c1613] via-[#080d0d] to-[#07090e]' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          // Top pill
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-ping' }),
            'Zero Financial Risk: 90-Day Iron-Clad Performance Underwriting'
          ),

          // Main Headline
          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Guaranteed ',
            e('span', { className: 'text-emerald-400 font-extrabold' }, '7X to 10X ROAS'),
            ' on Dental Implant Ad Spend — Or We Work 100% Free.'
          ),

          // Subheadline
          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Tired of generic agencies draining your capital on clicks that never book surgery? Cassidy Torrey backs your growth with an ',
            e('strong', { className: 'text-white underline decoration-emerald-500' }, 'unconditional 90-Day Iron-Clad Guarantee'),
            '. If your practice does not see measurable surgical patient growth in 90 days, we continue executing for free until you do.'
          ),

          // Big Guarantee Callout Card
          e('div', { className: 'p-6 rounded-xl border-2 border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 max-w-2xl mx-auto shadow-2xl text-left flex flex-col sm:flex-row items-center gap-6' },
            e('img', {
              src: basePath + 'assets/svg/badge-guarantee.svg',
              alt: '90-Day Guarantee',
              className: 'w-24 h-24 shrink-0 drop-shadow-lg'
            }),
            e('div', { className: 'space-y-2' },
              e('div', { className: 'text-emerald-300 font-cinzel text-lg font-bold' }, 'The Manifest Iron-Clad Contract:'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                '“No fine print. No hidden disclaimers. If our customized 5 P\'s campaign does not generate measurable patient growth within 90 days, Manifest Media Broker Group absorbs 100% of the ongoing management fees until your targets are met.”'
              ),
              e('div', { className: 'text-[11px] text-amber-300 font-bold' },
                '— Cassidy Torrey, Owner & Executive Producer'
              )
            )
          ),

          // CTAs
          e('div', { className: 'pt-4 flex flex-col sm:flex-row items-center justify-center gap-4' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-gold w-full sm:w-auto text-sm px-8 py-4 shadow-lg'
            },
              e('span', null, 'Lock In 90-Day Guaranteed Strategy Session'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: basePath + 'calculator.html',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'Calculate Your Practice ROI (7X - 10X)')
          ),

          // Micro Stats
          e('div', { className: 'pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400' },
            e('span', null, '📞 Direct Dial: (603) 630-3944'),
            e('span', null, '•'),
            e('span', null, 'Only 4 Southwest Practice Slots Open This Month'),
            e('span', null, '•'),
            e('span', null, 'Verified BBB A+ Accredited')
          )
        )
      )
    );
  };
})();
