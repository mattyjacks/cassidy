(function() {
  var e = React.createElement;

  window.CaseStudyGrid = function(props) {
    var basePath = props.basePath || "";
    var studies = window.CASE_STUDIES || [];
    var metrics = window.AGGREGATE_METRICS || {};

    return e('section', { id: 'case-studies', className: 'py-20 bg-[#07090e]' },
      e('div', { className: 'container-custom' },
        // Header
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'badge-pill' }, 'Empirical Clinical Validation'),
          e('h2', { className: 'text-white' },
            'Over ',
            e('span', { className: 'gold-gradient-text' }, '347+ Dental Practices'),
            ' Scaled Nationwide'
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'From solo restorative dentists to multi-surgeon surgical centers, see the documented financial turnaround when generic agency fluff is replaced with high-production emotional storytelling.'
          )
        ),

        // Aggregate Metrics Banner
        e('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl bg-slate-900/90 border border-yellow-500/30 text-center' },
          e('div', { className: 'p-3' },
            e('div', { className: 'text-3xl md:text-4xl font-extrabold text-amber-300 font-mono' }, metrics.practicesServed || '347+'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold' }, 'Practices Scaled')
          ),
          e('div', { className: 'p-3 border-l border-slate-800' },
            e('div', { className: 'text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono' }, metrics.averageRoas || '7X - 10X'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold' }, '90-Day Target ROAS')
          ),
          e('div', { className: 'p-3 border-l border-slate-800' },
            e('div', { className: 'text-3xl md:text-4xl font-extrabold text-yellow-200 font-mono' }, '100%'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold' }, 'American Production')
          ),
          e('div', { className: 'p-3 border-l border-slate-800' },
            e('div', { className: 'text-3xl md:text-4xl font-extrabold text-sky-400 font-mono' }, '6 Wks'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold' }, 'Average Chair Advance')
          )
        ),

        // Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8' },
          studies.map(function(st) {
            return e(window.CaseStudyCard, {
              key: st.id,
              study: st,
              basePath: basePath
            });
          })
        ),

        // Bottom CTA
        e('div', { className: 'mt-14 text-center' },
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-gold text-sm px-8 py-4 shadow-xl'
          }, 'Get Your Practice Case Study Audit (Free 30-Min Call)')
        )
      )
    );
  };
})();
