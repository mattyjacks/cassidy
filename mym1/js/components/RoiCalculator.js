(function() {
  var e = React.createElement;

  window.RoiCalculator = function(props) {
    var basePath = props.basePath || "";

    var [adSpend, setAdSpend] = React.useState(4000);
    var [avgCaseValue, setAvgCaseValue] = React.useState(5000);
    var [chairCount, setChairCount] = React.useState(4);

    var conservativeRoas = 7.0;
    var targetRoas = 9.5;

    var conservativeReturn = adSpend * conservativeRoas;
    var targetReturn = adSpend * targetRoas;
    var casesCoverBreakEven = Math.max(1, Math.ceil(adSpend / avgCaseValue));
    var additionalCasesExpected = Math.round(targetReturn / avgCaseValue);

    return e('section', { id: 'roi-calculator', className: 'py-20 bg-gradient-to-b from-[#080b11] via-[#0e1422] to-[#080b11] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Empirical Financial Modeling'),
          e('h2', { className: 'text-white' },
            'Interactive Dental Implant ',
            e('span', { className: 'gold-gradient-text' }, 'ROI & Chair Capacity Calculator')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Test your numbers against our documented 347-practice performance benchmark. See the concrete capital return generated when cinematic storytelling meets high-ticket surgical treatment.'
          )
        ),

        e('div', { className: 'glass-card-premium p-6 md:p-10 max-w-4xl mx-auto gold-border-glow' },
          e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
            // Inputs Col
            e('div', { className: 'lg:col-span-6 space-y-6' },
              // Input 1: Monthly Ad Spend
              e('div', { className: 'space-y-2' },
                e('div', { className: 'flex justify-between items-center text-xs' },
                  e('label', { className: 'font-bold text-slate-300 uppercase tracking-wider' }, 'Current Monthly Ad Budget:'),
                  e('span', { className: 'font-mono text-base font-extrabold text-amber-300' }, '$' + Number(adSpend).toLocaleString())
                ),
                e('input', {
                  type: 'range',
                  min: 2000,
                  max: 20000,
                  step: 500,
                  value: adSpend,
                  onChange: function(evt) { setAdSpend(Number(evt.target.value)); },
                  className: 'w-full accent-yellow-400 cursor-pointer'
                }),
                e('div', { className: 'flex justify-between text-[10px] text-slate-500 font-mono' },
                  e('span', null, '$2,000/mo'),
                  e('span', null, '$10,000/mo'),
                  e('span', null, '$20,000/mo')
                )
              ),

              // Input 2: Average Surgical Case Value
              e('div', { className: 'space-y-2' },
                e('div', { className: 'flex justify-between items-center text-xs' },
                  e('label', { className: 'font-bold text-slate-300 uppercase tracking-wider' }, 'Average Surgical Case Value:'),
                  e('span', { className: 'font-mono text-base font-extrabold text-sky-400' }, '$' + Number(avgCaseValue).toLocaleString())
                ),
                e('input', {
                  type: 'range',
                  min: 2500,
                  max: 30000,
                  step: 500,
                  value: avgCaseValue,
                  onChange: function(evt) { setAvgCaseValue(Number(evt.target.value)); },
                  className: 'w-full accent-sky-400 cursor-pointer'
                }),
                e('div', { className: 'flex justify-between text-[10px] text-slate-500 font-mono' },
                  e('span', null, '$2,500 (Single Implant)'),
                  e('span', null, '$15,000 (Arch)'),
                  e('span', null, '$30,000 (Full Mouth)')
                )
              ),

              // Input 3: Chair Count
              e('div', { className: 'space-y-2' },
                e('div', { className: 'flex justify-between items-center text-xs' },
                  e('label', { className: 'font-bold text-slate-300 uppercase tracking-wider' }, 'Active Operatory Chairs:'),
                  e('span', { className: 'font-mono text-base font-extrabold text-emerald-400' }, chairCount + ' Chairs')
                ),
                e('input', {
                  type: 'range',
                  min: 2,
                  max: 12,
                  step: 1,
                  value: chairCount,
                  onChange: function(evt) { setChairCount(Number(evt.target.value)); },
                  className: 'w-full accent-emerald-400 cursor-pointer'
                })
              ),

              // Real-World Benchmark note
              e('div', { className: 'p-4 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed' },
                e('strong', { className: 'text-amber-300 block mb-1' }, '📊 Documented Benchmark Comparison:'),
                'Under a generic agency, a $4,000 spend typically yields ~$6,000 in low-quality leads. Under Manifest Media\'s 5 P\'s Framework, that exact same $4,000 capital expenditure historically generates ',
                e('strong', { className: 'text-emerald-300' }, '$38,000+'),
                ' in high-ticket clinical revenue.'
              )
            ),

            // Outputs Col
            e('div', { className: 'lg:col-span-6 bg-[#0c121e] p-6 md:p-8 rounded-xl border border-yellow-500/30 space-y-6 text-center' },
              e('div', { className: 'space-y-1' },
                e('div', { className: 'text-xs uppercase font-bold tracking-widest text-slate-400' }, 'Projected 90-Day Monthly Production'),
                e('div', { className: 'text-4xl md:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight' },
                  '$' + Math.round(targetReturn).toLocaleString()
                ),
                e('div', { className: 'text-xs text-amber-300 font-semibold' },
                  'Based on ' + targetRoas + 'X Verified Target ROAS'
                )
              ),

              e('div', { className: 'grid grid-cols-2 gap-3 pt-2 text-left' },
                e('div', { className: 'p-3 rounded-lg bg-slate-900 border border-slate-800' },
                  e('div', { className: 'text-[11px] text-slate-400' }, 'Conservative 7X Return'),
                  e('div', { className: 'text-lg font-bold text-white font-mono' }, '$' + Math.round(conservativeReturn).toLocaleString())
                ),
                e('div', { className: 'p-3 rounded-lg bg-slate-900 border border-slate-800' },
                  e('div', { className: 'text-[11px] text-slate-400' }, 'Cases Needed To Break Even'),
                  e('div', { className: 'text-lg font-bold text-sky-400 font-mono' }, casesCoverBreakEven + ' Case' + (casesCoverBreakEven > 1 ? 's' : ''))
                ),
                e('div', { className: 'p-3 rounded-lg bg-slate-900 border border-slate-800 col-span-2' },
                  e('div', { className: 'text-[11px] text-slate-400' }, 'Estimated Surgical Patients Added / Month'),
                  e('div', { className: 'text-xl font-bold text-amber-300 font-mono' }, additionalCasesExpected + ' Confirmed Surgical Cases')
                )
              ),

              // Guarantee reminder
              e('div', { className: 'text-[11px] text-slate-400 italic' },
                'Backed by Cassidy Torrey\'s 90-Day Iron-Clad Guarantee: If we don\'t hit measurable growth, we work free.'
              ),

              e('button', {
                onClick: function() {
                  if (window.openBookingModal) window.openBookingModal();
                  else window.location.href = basePath + 'strategy-session.html';
                },
                className: 'btn-gold text-xs py-3 w-full shadow-lg'
              }, 'Claim Your Free 30-Min Strategy Audit')
            )
          )
        )
      )
    );
  };
})();
