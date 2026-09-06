(function() {
  var e = React.createElement;

  window.CaseStudyCard = function(props) {
    var study = props.study;
    var basePath = props.basePath || "";

    return e('div', { className: 'clean-card p-6 sm:p-8 flex flex-col justify-between h-full text-left' },
      e('div', { className: 'space-y-4' },
        // Header row
        e('div', { className: 'flex items-start justify-between gap-4 border-b border-slate-100 pb-4' },
          e('div', null,
            e('h3', { className: 'text-lg sm:text-xl font-bold text-slate-900' }, study.doctor),
            e('div', { className: 'text-xs text-blue-700 font-semibold' }, study.clinic),
            e('div', { className: 'text-[11px] text-slate-500 mt-0.5' }, study.location + ' • ' + study.niche)
          ),
          e('div', { className: 'text-right' },
            e('span', { className: 'inline-block px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold' },
              study.metricHighlight
            ),
            e('div', { className: 'text-[10px] text-slate-400 mt-1 font-medium' }, study.timeframe)
          )
        ),

        // Quote
        e('blockquote', { className: 'p-4 rounded-lg bg-slate-50 border border-slate-200/80 font-editorial text-xs sm:text-sm text-slate-700 italic leading-relaxed' },
          '“' + study.quote + '”'
        ),

        // Before & After summary
        e('div', { className: 'space-y-2 text-xs' },
          e('div', { className: 'p-3 rounded-lg bg-red-50/60 border border-red-200/70 text-slate-600 leading-relaxed' },
            e('strong', { className: 'text-red-700 uppercase text-[10px] tracking-wider block mb-0.5' }, 'Initial Challenge:'),
            study.initialState
          ),
          e('div', { className: 'p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/70 text-slate-700 leading-relaxed' },
            e('strong', { className: 'text-emerald-800 uppercase text-[10px] tracking-wider block mb-0.5' }, 'Manifest 5 P\'s Execution:'),
            study.solutionDeployed
          )
        ),

        // Results metric grid
        e('div', { className: 'grid grid-cols-2 gap-2 pt-2' },
          study.results.map(function(res, i) {
            return e('div', { key: i, className: 'p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center' },
              e('div', { className: 'text-[11px] text-slate-500 font-medium' }, res.label),
              e('div', { className: 'text-sm sm:text-base font-extrabold text-blue-800 font-sans mt-0.5' }, res.value)
            );
          })
        )
      ),

      // Card action
      e('div', { className: 'pt-5 mt-4 border-t border-slate-100 flex items-center justify-between' },
        e('button', {
          onClick: function() {
            if (window.openVideoModal) {
              window.openVideoModal(study.doctor + " — Patient Transformation Case Study", study.clinic);
            } else if (window.openBookingModal) {
              window.openBookingModal();
            }
          },
          className: 'text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5'
        },
          e('img', { src: basePath + 'assets/svg/play-icon.svg', className: 'w-4 h-4', alt: 'Play' }),
          'Watch Clinical Film Reel'
        ),
        e('span', { className: 'text-[11px] text-emerald-700 uppercase tracking-wider font-semibold' }, '✓ Verified Metric')
      )
    );
  };
})();
