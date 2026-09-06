(function() {
  var e = React.createElement;

  window.TreatmentAcceptanceModeler = function(props) {
    var basePath = props.basePath || "";

    var [consultsPerMonth, setConsultsPerMonth] = React.useState(12);
    var [currentAcceptance, setCurrentAcceptance] = React.useState(35); // 35%
    var [fullArchPct, setFullArchPct] = React.useState(50); // 50% full arch vs single

    var singleImplantPrice = 4500;
    var fullArchPrice = 26000;

    var currentCasesAccepted = consultsPerMonth * (currentAcceptance / 100);
    var currentRevenue = currentCasesAccepted * ((fullArchPrice * (fullArchPct / 100)) + (singleImplantPrice * (1 - (fullArchPct / 100))));

    var manifestAcceptance = Math.min(85, currentAcceptance + 28); // 28% boost with 5 Ps
    var manifestConsults = Math.round(consultsPerMonth * 1.8); // 80% lead boost
    var manifestCasesAccepted = manifestConsults * (manifestAcceptance / 100);
    var manifestRevenue = manifestCasesAccepted * ((fullArchPrice * (fullArchPct / 100)) + (singleImplantPrice * (1 - (fullArchPct / 100))));

    var netMonthlyLift = manifestRevenue - currentRevenue;

    return e('div', { className: 'glass-card-premium p-6 md:p-10 max-w-4xl mx-auto gold-border-glow' },
      e('div', { className: 'text-center space-y-2 mb-8' },
        e('div', { className: 'badge-pill' }, 'Behavioral Economics Model'),
        e('h3', { className: 'text-2xl font-cinzel text-white font-bold' },
          'Treatment Acceptance & Revenue Lift Simulator'
        ),
        e('p', { className: 'text-xs md:text-sm text-slate-400 max-w-xl mx-auto' },
          'When prospective patients watch cinema-grade patient stories before arriving at your clinic, case acceptance historically leaps from 35% to 63%+.'
        )
      ),

      e('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center' },
        // Inputs
        e('div', { className: 'space-y-5 text-left' },
          e('div', { className: 'space-y-1.5' },
            e('div', { className: 'flex justify-between text-xs text-slate-300 font-bold' },
              e('span', null, 'Current Implant Consults / Month:'),
              e('span', { className: 'text-amber-300 font-mono text-sm' }, consultsPerMonth + ' Consultations')
            ),
            e('input', {
              type: 'range',
              min: 5,
              max: 40,
              value: consultsPerMonth,
              onChange: function(ev) { setConsultsPerMonth(Number(ev.target.value)); },
              className: 'w-full accent-yellow-400'
            })
          ),

          e('div', { className: 'space-y-1.5' },
            e('div', { className: 'flex justify-between text-xs text-slate-300 font-bold' },
              e('span', null, 'Current Case Acceptance Rate:'),
              e('span', { className: 'text-sky-300 font-mono text-sm' }, currentAcceptance + '%')
            ),
            e('input', {
              type: 'range',
              min: 15,
              max: 60,
              value: currentAcceptance,
              onChange: function(ev) { setCurrentAcceptance(Number(ev.target.value)); },
              className: 'w-full accent-sky-400'
            })
          ),

          e('div', { className: 'space-y-1.5' },
            e('div', { className: 'flex justify-between text-xs text-slate-300 font-bold' },
              e('span', null, 'Full-Arch Mix (% of Total Implant Cases):'),
              e('span', { className: 'text-emerald-300 font-mono text-sm' }, fullArchPct + '% Full Arch')
            ),
            e('input', {
              type: 'range',
              min: 10,
              max: 90,
              step: 5,
              value: fullArchPct,
              onChange: function(ev) { setFullArchPct(Number(ev.target.value)); },
              className: 'w-full accent-emerald-400'
            })
          ),

          e('div', { className: 'p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400' },
            'Model based on single implant benchmark of $4,500 and full-arch Zirconia benchmark of $26,000 per arch.'
          )
        ),

        // Outputs
        e('div', { className: 'p-6 rounded-xl bg-[#090d16] border border-yellow-500/30 text-center space-y-4' },
          e('div', { className: 'text-xs uppercase font-bold text-slate-400 tracking-wider' }, 'Projected Net Monthly Production Lift:'),
          e('div', { className: 'text-4xl md:text-5xl font-mono font-extrabold text-emerald-400' },
            '+$' + Math.round(netMonthlyLift).toLocaleString() + ' / mo'
          ),
          e('div', { className: 'grid grid-cols-2 gap-2 text-left text-xs pt-2 border-t border-slate-800' },
            e('div', { className: 'p-2.5 rounded bg-slate-900' },
              e('div', { className: 'text-slate-500 text-[10px]' }, 'Current Monthly Est.'),
              e('div', { className: 'text-slate-300 font-mono font-bold text-sm' }, '$' + Math.round(currentRevenue).toLocaleString())
            ),
            e('div', { className: 'p-2.5 rounded bg-slate-900' },
              e('div', { className: 'text-yellow-400 text-[10px]' }, 'Manifest 5 P\'s Projected'),
              e('div', { className: 'text-amber-300 font-mono font-bold text-sm' }, '$' + Math.round(manifestRevenue).toLocaleString())
            )
          ),
          e('div', { className: 'text-[11px] text-slate-400 italic' },
            'A single added full-arch case covers up to 6 months of Manifest Media Broker Group services.'
          ),
          e('button', {
            onClick: function() {
              if (window.openBookingModal) window.openBookingModal();
              else window.location.href = basePath + 'strategy-session.html';
            },
            className: 'btn-gold w-full text-xs py-3'
          }, 'Claim Free 30-Min Strategy Call')
        )
      )
    );
  };
})();
