(function() {
  var e = React.createElement;

  window.DisambiguationBanner = function(props) {
    var basePath = props.basePath || "";
    var info = window.COMPETITOR_DISAMBIGUATION || {};
    var entities = info.entities || [];

    return e('section', { id: 'disambiguation-notice', className: 'py-16 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-3 mb-10' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'Official Intelligence & Legal Separation'
          ),
          e('h2', { className: 'text-2xl md:text-3xl text-slate-900 font-newsreader font-bold' },
            'Corporate Disambiguation Protocol'
          ),
          e('p', { className: 'text-slate-600 text-xs md:text-sm leading-relaxed' },
            'The name "Manifest" is heavily utilized in Arizona marketing and digital services. To ensure strict legal, algorithmic, and brand clarity for our clinical clients and search engines, please review the institutional separation below:'
          )
        ),

        // Comparison Table / Cards
        e('div', { className: 'overflow-x-auto rounded-xl border border-slate-200 shadow-sm' },
          e('table', { className: 'table-clinical w-full' },
            e('thead', null,
              e('tr', { className: 'bg-slate-50 text-slate-800 text-xs font-bold uppercase' },
                e('th', { className: 'p-4 border-b border-slate-200 text-left' }, 'Entity Name & Domain'),
                e('th', { className: 'p-4 border-b border-slate-200 text-left' }, 'Leadership & Team'),
                e('th', { className: 'p-4 border-b border-slate-200 text-left' }, 'Geography & Operations'),
                e('th', { className: 'p-4 border-b border-slate-200 text-left' }, 'Core Operational Scope'),
                e('th', { className: 'p-4 border-b border-slate-200 text-left' }, 'Key Differentiators')
              )
            ),
            e('tbody', null,
              entities.map(function(ent, i) {
                var isOurs = i === 0;
                return e('tr', {
                  key: i,
                  className: isOurs ? 'bg-blue-50/50 border-l-4 border-l-blue-600 font-medium' : 'border-b border-slate-100 hover:bg-slate-50/50'
                },
                  e('td', { className: 'p-4' },
                    e('div', { className: 'font-bold ' + (isOurs ? 'text-blue-900 text-sm' : 'text-slate-800 text-xs') }, ent.name),
                    e('div', { className: 'text-xs text-slate-500 font-mono mt-0.5' }, ent.domain),
                    isOurs ? e('span', { className: 'inline-block mt-1 px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] uppercase font-bold' }, 'Our Enterprise') : null
                  ),
                  e('td', { className: 'p-4 text-xs text-slate-600' }, ent.leadership),
                  e('td', { className: 'p-4 text-xs text-slate-600' }, ent.locations),
                  e('td', { className: 'p-4 text-xs text-slate-600 leading-relaxed' }, ent.scope),
                  e('td', { className: 'p-4 text-xs leading-relaxed ' + (isOurs ? 'text-emerald-700 font-bold' : 'text-slate-500') }, ent.differentiator)
                );
              })
            )
          )
        ),

        e('div', { className: 'mt-6 text-center text-xs text-slate-500' },
          'Need immediate clarification or looking for Cassidy Torrey directly? Call ',
          e('a', { href: 'tel:6036303944', className: 'text-blue-600 font-bold hover:underline' }, '(603) 630-3944'),
          ' or visit our Scottsdale / Mesa office.'
        )
      )
    );
  };
})();
