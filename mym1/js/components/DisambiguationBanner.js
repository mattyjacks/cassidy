(function() {
  var e = React.createElement;

  window.DisambiguationBanner = function(props) {
    var basePath = props.basePath || "";
    var info = window.COMPETITOR_DISAMBIGUATION || {};
    var entities = info.entities || [];

    return e('section', { id: 'disambiguation-notice', className: 'py-16 bg-[#080b11] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-3 mb-10' },
          e('div', { className: 'badge-pill bg-amber-950/60 text-amber-300 border-amber-500/40' },
            'Official Intelligence & Legal Separation'
          ),
          e('h2', { className: 'text-2xl md:text-3xl text-white font-cinzel' },
            'Corporate Disambiguation Protocol'
          ),
          e('p', { className: 'text-slate-400 text-xs md:text-sm leading-relaxed' },
            'The name "Manifest" is heavily utilized in Arizona marketing and digital services. To ensure strict legal, algorithmic, and brand clarity for our clinical clients and search engines, please review the institutional separation below:'
          )
        ),

        // Comparison Table / Cards
        e('div', { className: 'overflow-x-auto rounded-xl border border-slate-800' },
          e('table', { className: 'table-clinical w-full' },
            e('thead', null,
              e('tr', null,
                e('th', null, 'Entity Name & Domain'),
                e('th', null, 'Leadership & Team'),
                e('th', null, 'Geography & Operations'),
                e('th', null, 'Core Operational Scope'),
                e('th', null, 'Key Differentiators')
              )
            ),
            e('tbody', null,
              entities.map(function(ent, i) {
                var isOurs = i === 0;
                return e('tr', {
                  key: i,
                  className: isOurs ? 'bg-yellow-950/20 border-l-4 border-l-yellow-500 font-medium' : ''
                },
                  e('td', { className: 'p-4' },
                    e('div', { className: 'font-bold ' + (isOurs ? 'text-amber-300 text-sm' : 'text-slate-200 text-xs') }, ent.name),
                    e('div', { className: 'text-[11px] text-slate-400 font-mono mt-0.5' }, ent.domain),
                    isOurs ? e('span', { className: 'inline-block mt-1 px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 text-[10px] uppercase font-bold' }, 'Our Enterprise') : null
                  ),
                  e('td', { className: 'p-4 text-xs text-slate-300' }, ent.leadership),
                  e('td', { className: 'p-4 text-xs text-slate-300' }, ent.locations),
                  e('td', { className: 'p-4 text-xs text-slate-300 leading-relaxed' }, ent.scope),
                  e('td', { className: 'p-4 text-xs leading-relaxed ' + (isOurs ? 'text-emerald-300 font-semibold' : 'text-slate-400') }, ent.differentiator)
                );
              })
            )
          )
        ),

        e('div', { className: 'mt-6 text-center text-xs text-slate-400' },
          'Need immediate clarification or looking for Cassidy Torrey directly? Call ',
          e('a', { href: 'tel:6036303944', className: 'text-yellow-400 font-bold hover:underline' }, '(603) 630-3944'),
          ' or visit our Scottsdale / Mesa office.'
        )
      )
    );
  };
})();
