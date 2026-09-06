(function() {
  var e = React.createElement;

  window.IronCladGuaranteeBadge = function(props) {
    var basePath = props.basePath || "";

    return e('section', { id: 'guarantee', className: 'py-20 bg-[#070a0e] border-t border-yellow-600/30' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'glass-card-premium p-8 md:p-14 max-w-4xl mx-auto gold-border-glow relative overflow-hidden' },
          e('div', { className: 'grid grid-cols-1 md:grid-cols-12 gap-8 items-center' },
            // Left Seal
            e('div', { className: 'md:col-span-4 text-center' },
              e('img', {
                src: basePath + 'assets/svg/badge-guarantee.svg',
                alt: '90-Day Iron-Clad Guarantee',
                className: 'w-44 h-44 mx-auto drop-shadow-2xl animate-float'
              }),
              e('div', { className: 'mt-3 text-xs font-bold text-amber-300 uppercase tracking-wider' },
                'Underwritten by Cassidy Torrey'
              )
            ),

            // Right Content
            e('div', { className: 'md:col-span-8 space-y-4' },
              e('div', { className: 'badge-pill bg-emerald-950/80 text-emerald-300 border-emerald-500/40' },
                'Total Risk Reversal Protocol'
              ),
              e('h2', { className: 'text-2xl md:text-3xl text-white font-cinzel' },
                'The 90-Day ',
                e('span', { className: 'text-emerald-400 font-extrabold' }, 'Iron-Clad Guarantee')
              ),
              e('p', { className: 'text-sm text-slate-300 leading-relaxed' },
                'Most digital agencies operate on high retainers with zero contractual accountability. If their ads fail, you pay anyway. At Manifest Media Broker Group, LLC, we reverse the risk entirely.'
              ),
              e('div', { className: 'p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2' },
                e('div', { className: 'text-xs font-bold text-amber-300 uppercase tracking-wider' }, 'The Official Terms:'),
                e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                  '“If your clinical practice does not experience measurable patient growth and confirmed high-ticket implant inquiries within 90 days of launching your customized 5 P\'s campaign, Manifest Media will execute all production, optimization, and media brokerage services entirely free of charge until your targeted metrics are achieved.”'
                ),
                e('div', { className: 'text-[11px] text-emerald-400 font-semibold' },
                  '✓ Zero Hidden Clauses • ✓ Zero Fine Print • ✓ Direct Executive Accountability'
                )
              ),
              e('div', { className: 'pt-2 flex flex-wrap items-center gap-4' },
                e('button', {
                  onClick: function() {
                    if (window.openBookingModal) window.openBookingModal();
                    else window.location.href = basePath + 'strategy-session.html';
                  },
                  className: 'btn-gold text-xs py-3 px-6 shadow-md'
                }, 'Claim Guaranteed Strategy Call'),
                e('a', {
                  href: 'tel:6036303944',
                  className: 'text-xs font-bold text-slate-300 hover:text-yellow-400'
                }, 'Have questions? Call (603) 630-3944')
              )
            )
          )
        )
      )
    );
  };
})();
