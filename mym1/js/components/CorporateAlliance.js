(function() {
  var e = React.createElement;

  window.CorporateAlliance = function(props) {
    var basePath = props.basePath || "";
    var data = window.SYNERGIES_DATA || {};
    var partners = data.partners || [];
    var endorsement = data.industryEndorsement || {};

    return e('section', { id: 'corporate-alliance', className: 'py-20 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'Southwest Strategic Alliances'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'The ',
            e('span', { className: 'text-blue-700' }, 'Arizona Business Management'),
            ' Ecosystem'
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            'Manifest Media Broker Group does not operate in isolation. Torrey is aligned with top-tier Southwest business and communications executives to deliver institutional-grade media brokerage.'
          )
        ),

        // Partners
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 mb-12' },
          partners.map(function(p, i) {
            return e('div', { key: i, className: 'bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-3 hover:border-blue-300 transition' },
              e('div', { className: 'text-xs text-blue-700 font-bold uppercase tracking-wider' }, p.entity),
              e('h3', { className: 'text-lg font-bold text-slate-900' }, p.name),
              e('div', { className: 'text-xs text-slate-500 font-medium' }, p.title + ' • ' + p.location),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100' }, p.role)
            );
          })
        ),

        // VIBE Media Endorsement
        e('div', { className: 'bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto space-y-4' },
          e('div', { className: 'flex items-center gap-3' },
            e('span', { className: 'text-blue-600 text-lg' }, '🤝'),
            e('h4', { className: 'text-slate-900 font-newsreader text-base font-bold' }, 'Industry Endorsement: VIBE Media (Founded 2015 by Rich)'),
          ),
          e('p', { className: 'text-xs md:text-sm text-slate-700 italic leading-relaxed' },
            '“' + endorsement.torreyStatement + '”'
          ),
          e('div', { className: 'text-xs text-blue-700 font-bold text-right' },
            '— Cassidy Torrey, Public Endorsement of Rich & VIBE Media Team'
          )
        )
      )
    );
  };
})();
