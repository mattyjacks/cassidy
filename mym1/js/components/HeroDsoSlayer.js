(function() {
  var e = React.createElement;

  window.HeroDsoSlayer = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#1c0d12] via-[#0e080b] to-[#07090e]' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          // Top pill
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/40 bg-rose-950/60 text-rose-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-rose-500 animate-pulse' }),
            'The Independent Practice Defense: Defeating Private-Equity DSO Monopolies'
          ),

          // Main Headline
          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Stop Losing High-Ticket Implant Patients to ',
            e('span', { className: 'text-rose-400 font-extrabold' }, 'Corporate Dental Chains'),
            '.'
          ),

          // Subheadline
          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Private-equity DSOs are flooding your community with cheap retail ads, commoditizing surgery, and stealing your chairs. Generic marketing agencies can\'t stop them. Cassidy Torrey gives independent practices the ',
            e('strong', { className: 'text-amber-300' }, 'cinematic storytelling firepower'),
            ' to expose corporate chains as soulless mills and capture high-paying surgical patients.'
          ),

          // David vs Goliath Box
          e('div', { className: 'p-6 rounded-xl border border-rose-500/30 bg-slate-900/80 max-w-2xl mx-auto text-left' },
            e('div', { className: 'flex items-center justify-between border-b border-slate-800 pb-3 mb-3' },
              e('span', { className: 'text-xs uppercase font-bold text-rose-400 tracking-wider' }, 'Corporate DSO Tactics:'),
              e('span', { className: 'text-xs uppercase font-bold text-emerald-400 tracking-wider' }, 'The Manifest Media Antidote:')
            ),
            e('div', { className: 'grid grid-cols-2 gap-4 text-xs text-slate-300' },
              e('div', { className: 'space-y-1.5 text-slate-400' },
                e('div', null, '❌ Sterile stock photos & actors'),
                e('div', null, '❌ 10-minute rushed consultations'),
                e('div', null, '❌ Bait-and-switch implant pricing'),
                e('div', null, '❌ High churn corporate staff')
              ),
              e('div', { className: 'space-y-1.5 text-amber-200 font-medium' },
                e('div', null, '✓ Authentic cinematic doctor stories'),
                e('div', null, '✓ Real local patients crying tears of joy'),
                e('div', null, '✓ Transparent surgical fee presentation'),
                e('div', null, '✓ 90-Day Guaranteed Patient Fill')
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
              e('span', null, 'Reclaim Your Local Market (Free Strategy Call)'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: basePath + 'case-studies.html',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'See How 347+ Practices Won')
          ),

          e('div', { className: 'pt-4 text-xs text-slate-400' },
            'Direct Access to Cassidy Torrey • Direct Phone: (603) 630-3944'
          )
        )
      )
    );
  };
})();
