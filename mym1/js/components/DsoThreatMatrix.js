(function() {
  var e = React.createElement;

  window.DsoThreatMatrix = function(props) {
    var basePath = props.basePath || "";
    var threat = window.DSO_THREAT_DATA || {};
    var vulnerabilities = threat.vulnerabilities || [];
    var plan = threat.actionPlan || [];

    return e('section', { id: 'dso-defense-matrix', className: 'py-20 bg-[#0c080b] border-t border-rose-900/30' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill bg-rose-950 text-rose-300 border-rose-500/50' }, 'Strategic Intelligence Report'),
          e('h2', { className: 'text-white' },
            'The DSO Consolidation Crisis & ',
            e('span', { className: 'text-rose-400 font-extrabold' }, 'The Independent Antidote')
          ),
          e('p', { className: 'text-slate-300 text-sm md:text-base leading-relaxed' },
            threat.nationalStat
          )
        ),

        // Problem summary box
        e('div', { className: 'p-6 rounded-xl bg-slate-900/90 border border-rose-500/30 max-w-4xl mx-auto mb-10 text-xs md:text-sm text-slate-300 leading-relaxed space-y-2' },
          e('div', { className: 'font-bold text-rose-400 uppercase tracking-wider text-xs' }, 'The Macro-Economic Dilemma:'),
          e('p', null, threat.macroProblem)
        ),

        // Vulnerabilities & Counter-Offensives
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12' },
          vulnerabilities.map(function(v, idx) {
            return e('div', { key: idx, className: 'glass-card p-6 space-y-3 border-rose-900/40 flex flex-col justify-between' },
              e('div', { className: 'space-y-2' },
                e('div', { className: 'text-[10px] uppercase font-bold text-rose-400 font-mono tracking-wider' }, 'Corporate Predatory Tactic:'),
                e('h3', { className: 'text-base font-bold text-white leading-snug font-cinzel' }, v.tactic),
                e('p', { className: 'text-xs text-slate-400 leading-relaxed' }, v.impact)
              ),
              e('div', { className: 'p-3 rounded bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-200 mt-3' },
                e('strong', { className: 'text-emerald-400 block text-[10px] uppercase tracking-wider mb-1' }, 'Manifest Tactical Weapon:'),
                v.manifestCounter
              )
            );
          })
        ),

        // Action Plan Box
        e('div', { className: 'glass-card-premium p-8 max-w-3xl mx-auto border-yellow-500/40 text-center space-y-6' },
          e('h3', { className: 'text-xl font-cinzel text-white font-bold' }, 'Your 4-Step Local Market Defense Action Plan:'),
          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3 text-left' },
            plan.map(function(p, i) {
              return e('div', { key: i, className: 'p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed font-medium' },
                p
              );
            })
          ),
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-gold text-xs py-3.5 px-8 shadow-xl'
          }, 'Get Your 15-Mile DSO Vulnerability Audit (Free)')
        )
      )
    );
  };
})();
