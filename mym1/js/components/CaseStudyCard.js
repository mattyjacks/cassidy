(function() {
  var e = React.createElement;

  window.CaseStudyCard = function(props) {
    var study = props.study;
    var basePath = props.basePath || "";

    return e('div', { className: 'glass-card p-6 md:p-8 flex flex-col justify-between gold-border-glow h-full' },
      e('div', { className: 'space-y-4' },
        // Header row
        e('div', { className: 'flex items-start justify-between gap-4 border-b border-slate-800 pb-4' },
          e('div', null,
            e('h3', { className: 'text-lg md:text-xl font-bold text-white' }, study.doctor),
            e('div', { className: 'text-xs text-amber-300 font-medium' }, study.clinic),
            e('div', { className: 'text-[11px] text-slate-400' }, '📍 ' + study.location + ' • ' + study.niche)
          ),
          e('div', { className: 'text-right' },
            e('span', { className: 'badge-pill text-[11px] font-bold bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
              study.metricHighlight
            ),
            e('div', { className: 'text-[10px] text-slate-400 mt-1' }, study.timeframe)
          )
        ),

        // Quote
        e('div', { className: 'relative p-4 rounded-lg bg-slate-900/80 border border-slate-800/80 italic text-xs md:text-sm text-slate-300 leading-relaxed' },
          '“' + study.quote + '”'
        ),

        // Before and After summary
        e('div', { className: 'space-y-2 text-xs' },
          e('div', { className: 'p-3 rounded bg-red-950/20 border border-red-900/30 text-slate-400' },
            e('strong', { className: 'text-red-400 uppercase text-[10px] tracking-wider block mb-0.5' }, 'Initial Challenge:'),
            study.initialState
          ),
          e('div', { className: 'p-3 rounded bg-emerald-950/20 border border-emerald-900/30 text-slate-300' },
            e('strong', { className: 'text-emerald-400 uppercase text-[10px] tracking-wider block mb-0.5' }, 'Manifest 5 P\'s Execution:'),
            study.solutionDeployed
          )
        ),

        // Metric grid
        e('div', { className: 'grid grid-cols-2 gap-2 pt-2' },
          study.results.map(function(res, i) {
            return e('div', { key: i, className: 'p-2.5 rounded bg-slate-900 border border-slate-800 text-center' },
              e('div', { className: 'text-xs text-slate-400' }, res.label),
              e('div', { className: 'text-sm md:text-base font-extrabold text-amber-300 font-mono mt-0.5' }, res.value)
            );
          })
        )
      ),

      // Card action
      e('div', { className: 'pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between' },
        e('button', {
          onClick: function() {
            if (window.openVideoModal) {
              window.openVideoModal(study.doctor + " — Patient Transformation Case Study", study.clinic);
            } else if (window.openBookingModal) {
              window.openBookingModal();
            }
          },
          className: 'text-xs font-bold text-yellow-400 hover:text-white inline-flex items-center gap-2'
        },
          e('img', { src: basePath + 'assets/svg/play-icon.svg', className: 'w-5 h-5', alt: 'Play' }),
          'Watch Clinical Film Reel'
        ),
        e('span', { className: 'text-[10px] text-emerald-400 uppercase tracking-wider font-semibold' }, '✓ Verified ROAS')
      )
    );
  };
})();
