(function() {
  var e = React.createElement;

  window.CaseStudyGrid = function(props) {
    var basePath = props.basePath || "";
    var studies = window.CASE_STUDIES || [];
    var metrics = window.AGGREGATE_METRICS || {};

    return e('section', { id: 'case-studies', className: 'py-20 bg-[#f8fafc] border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        // Header
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Empirical Clinical Verification'),
          e('h2', { className: 'text-slate-950' },
            'Documented Turnarounds Across ',
            e('span', { className: 'text-blue-700' }, '347+ Practices Nationwide')
          ),
          e('p', { className: 'text-slate-600 text-sm sm:text-base leading-relaxed' },
            'From independent restorative doctors to high-volume surgical centers, review the verified financial performance generated when clinical care is presented with cinematic narrative gravity.'
          )
        ),

        // Aggregate Metrics Banner
        e('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-center' },
          e('div', { className: 'p-3' },
            e('div', { className: 'text-3xl sm:text-4xl font-extrabold text-blue-900 font-sans' }, metrics.practicesServed || '347+'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-500 mt-1 font-semibold' }, 'Practices Scaled')
          ),
          e('div', { className: 'p-3 border-l border-slate-200' },
            e('div', { className: 'text-3xl sm:text-4xl font-extrabold text-emerald-700 font-sans' }, metrics.averageRoas || '7X - 10X'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-500 mt-1 font-semibold' }, '90-Day Target ROAS')
          ),
          e('div', { className: 'p-3 border-l border-slate-200' },
            e('div', { className: 'text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans' }, '100%'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-500 mt-1 font-semibold' }, 'American Production')
          ),
          e('div', { className: 'p-3 border-l border-slate-200' },
            e('div', { className: 'text-3xl sm:text-4xl font-extrabold text-blue-700 font-sans' }, '6 Wks'),
            e('div', { className: 'text-xs uppercase tracking-wider text-slate-500 mt-1 font-semibold' }, 'Average Chair Advance')
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
        e('div', { className: 'mt-12 text-center' },
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-blue text-sm px-8 py-3.5 shadow-sm'
          }, 'Get Your Practice Case Study Audit (Free 30-Min Call)')
        )
      )
    );
  };
})();
