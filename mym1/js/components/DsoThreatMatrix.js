(function() {
  var e = React.createElement;

  window.DsoThreatMatrix = function(props) {
    var basePath = props.basePath || "";
    var threat = window.DSO_THREAT_DATA || {};
    var vulnerabilities = threat.vulnerabilities || [];
    var plan = threat.actionPlan || [];

    return e('section', { id: 'dso-defense-matrix', className: 'py-20 bg-slate-50 border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-800 border border-red-200' },
            'Strategic Intelligence Report'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'The DSO Consolidation Crisis & ',
            e('span', { className: 'text-blue-700' }, 'The Independent Antidote')
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            threat.nationalStat
          )
        ),

        // Problem summary box
        e('div', { className: 'p-6 rounded-xl bg-white border border-red-200 shadow-sm max-w-4xl mx-auto mb-10 text-xs md:text-sm text-slate-700 leading-relaxed space-y-2' },
          e('div', { className: 'font-bold text-red-700 uppercase tracking-wider text-xs' }, 'The Macro-Economic Dilemma:'),
          e('p', null, threat.macroProblem)
        ),

        // Vulnerabilities & Counter-Offensives
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12' },
          vulnerabilities.map(function(v, idx) {
            return e('div', { key: idx, className: 'bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-3 flex flex-col justify-between hover:border-blue-300 transition' },
              e('div', { className: 'space-y-2' },
                e('div', { className: 'text-[11px] uppercase font-bold text-red-600 tracking-wider' }, 'Corporate Predatory Tactic:'),
                e('h3', { className: 'text-base font-bold text-slate-900 leading-snug' }, v.tactic),
                e('p', { className: 'text-xs text-slate-600 leading-relaxed' }, v.impact)
              ),
              e('div', { className: 'p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-800 mt-3' },
                e('strong', { className: 'text-blue-800 block text-[10px] uppercase tracking-wider mb-1' }, 'Manifest Tactical Weapon:'),
                v.manifestCounter
              )
            );
          })
        ),

        // Action Plan Box
        e('div', { className: 'bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-3xl mx-auto text-center space-y-6' },
          e('h3', { className: 'text-xl md:text-2xl font-newsreader text-slate-900 font-bold' },
            'Your 4-Step Local Market Defense Action Plan:'
          ),
          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3 text-left' },
            plan.map(function(p, i) {
              return e('div', { key: i, className: 'p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium' },
                p
              );
            })
          ),
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-blue text-xs py-3.5 px-8 shadow-sm font-bold'
          }, 'Get Your 15-Mile DSO Vulnerability Audit (Free)')
        )
      )
    );
  };
})();
