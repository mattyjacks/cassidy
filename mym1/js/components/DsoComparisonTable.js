(function() {
  var e = React.createElement;

  window.DsoComparisonTable = function(props) {
    var basePath = props.basePath || "";

    var rows = [
      {
        dimension: "Visual Production Quality",
        agency: "Cheap stock photos, templated Canva graphics, sterile look",
        dso: "Repetitive corporate ads with commercial actors",
        manifest: "Hollywood-grade anamorphic cinema shot in your clinic by American crews"
      },
      {
        dimension: "Clinical Domain Knowledge",
        agency: "Zero. Run by 23-year-old generalist media buyers",
        dso: "Corporate bean-counters and private-equity executives",
        manifest: "Academic honors in Dental Hygiene at MCC Bullhead; insider surgical mastery"
      },
      {
        dimension: "Content Creation Logistics",
        agency: "Expects doctor to film their own awkward iPhone videos",
        dso: "Centralized Los Angeles corporate marketing department",
        manifest: "Done-for-you: Expert-vetted American crew dispatched on-location to your clinic"
      },
      {
        dimension: "Production Outsourcing Policy",
        agency: "Footage and ad buying frequently shipped overseas",
        dso: "Mass-production retail marketing agencies",
        manifest: "Strictly 100% American creators • Veteran-Owned • Zero overseas outsourcing"
      },
      {
        dimension: "Financial Performance Guarantee",
        agency: "Zero. You pay a high monthly retainer even if phones are silent",
        dso: "N/A (Multi-million dollar private equity ad warchest)",
        manifest: "90-Day Iron-Clad Guarantee: Measurable patient growth or we work 100% FREE"
      },
      {
        dimension: "Average Historical ROAS",
        agency: "Barely 1.5X or negative after counting ad spend & staff time",
        dso: "Volume commodity margins",
        manifest: "7X to 10X verified return on ad spend within 90 days"
      }
    ];

    return e('section', { id: 'dso-comparison', className: 'py-20 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'Market Intelligence Comparison'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'Why Independent Practices ',
            e('span', { className: 'text-blue-700' }, 'Choose Manifest Media')
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            'Compare our dedicated clinical media brokerage against commodity digital agencies and predatory corporate DSO chains.'
          )
        ),

        // Table
        e('div', { className: 'overflow-x-auto rounded-xl border border-slate-200 shadow-sm' },
          e('table', { className: 'w-full text-left border-collapse' },
            e('thead', null,
              e('tr', { className: 'bg-slate-50 text-xs uppercase text-slate-700 font-bold' },
                e('th', { className: 'p-4 border-b border-slate-200 w-1/4' }, 'Strategic Dimension'),
                e('th', { className: 'p-4 border-b border-slate-200 w-1/4 text-red-700' }, 'Generic Digital Agency'),
                e('th', { className: 'p-4 border-b border-slate-200 w-1/4 text-slate-600' }, 'Corporate DSO Chains'),
                e('th', { className: 'p-4 border-b border-blue-200 w-1/4 bg-blue-50/80 text-blue-900 font-bold' }, 'Manifest Media Broker Group')
              )
            ),
            e('tbody', null,
              rows.map(function(r, idx) {
                return e('tr', {
                  key: idx,
                  className: 'border-b border-slate-200 text-xs hover:bg-slate-50/60 transition'
                },
                  e('td', { className: 'p-4 font-bold text-slate-900 bg-slate-50/30' }, r.dimension),
                  e('td', { className: 'p-4 text-slate-600 leading-relaxed' }, r.agency),
                  e('td', { className: 'p-4 text-slate-600 leading-relaxed' }, r.dso),
                  e('td', { className: 'p-4 text-blue-950 bg-blue-50/40 font-medium leading-relaxed' }, r.manifest)
                );
              })
            )
          )
        )
      )
    );
  };
})();
