(function() {
  var e = React.createElement;

  window.HeroDsoSlayer = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-blue-700' }),
            'The Independent Practice Defense: Countering Private-Equity DSO Consolidation'
          ),

          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Stop Losing High-Ticket Patients to ',
            e('span', { className: 'text-blue-700' }, 'Corporate Dental Chains'),
            '.'
          ),

          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Private-equity DSOs are flooding your community with generic advertising, commoditizing surgery, and stealing your chairs. Generic digital agencies cannot stop them. Cassidy Torrey gives independent practices the ',
            e('strong', { className: 'text-slate-900 font-semibold' }, 'cinematic storytelling authority'),
            ' to expose corporate chains as soulless mills and capture high-paying surgical patients.'
          ),

          // Tactical Comparison Box
          e('div', { className: 'p-6 sm:p-8 rounded-xl border border-slate-200 bg-white max-w-2xl mx-auto text-left shadow-sm' },
            e('div', { className: 'flex items-center justify-between border-b border-slate-200 pb-3 mb-3' },
              e('span', { className: 'text-xs uppercase font-bold text-red-600 tracking-wider' }, 'Corporate DSO Pitfalls:'),
              e('span', { className: 'text-xs uppercase font-bold text-blue-700 tracking-wider' }, 'The Manifest Media Solution:')
            ),
            e('div', { className: 'grid grid-cols-2 gap-4 text-xs' },
              e('div', { className: 'space-y-2 text-slate-500' },
                e('div', null, '✕ Rushed 10-minute throughput'),
                e('div', null, '✕ Bait-and-switch implant pricing'),
                e('div', null, '✕ Stock photos & generic actors'),
                e('div', null, '✕ High staff turnover')
              ),
              e('div', { className: 'space-y-2 text-slate-800 font-medium' },
                e('div', null, '✓ Authentic doctor life story'),
                e('div', null, '✓ Transparent surgical fee schedules'),
                e('div', null, '✓ Real local patients on camera'),
                e('div', null, '✓ 90-Day Guaranteed Patient Fill')
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
              e('span', null, 'Reclaim Your Local Market (Free Strategy Call)'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: basePath + 'case-studies.html',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'See How 347+ Practices Won')
          ),

          e('div', { className: 'pt-4 text-xs text-slate-500 font-medium' },
            'Direct Access to Cassidy Torrey • Direct Line: (603) 630-3944'
          )
        )
      )
    );
  };
})();
