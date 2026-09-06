(function() {
  var e = React.createElement;

  window.CorporateAlliance = function(props) {
    var basePath = props.basePath || "";
    var data = window.SYNERGIES_DATA || {};
    var partners = data.partners || [];
    var endorsement = data.industryEndorsement || {};

    return e('section', { id: 'corporate-alliance', className: 'py-20 bg-[#06080d] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'badge-pill' }, 'Southwest Strategic Alliances'),
          e('h2', { className: 'text-white' },
            'The ',
            e('span', { className: 'gold-gradient-text' }, 'Arizona Business Management'),
            ' Ecosystem'
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Manifest Media Broker Group does not operate in isolation. Torrey is aligned with top-tier Southwest business and communications executives to deliver institutional-grade media brokerage.'
          )
        ),

        // Partners
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 mb-12' },
          partners.map(function(p, i) {
            return e('div', { key: i, className: 'glass-card p-6 space-y-3 gold-border-glow' },
              e('div', { className: 'text-xs text-amber-300 font-bold uppercase tracking-wider' }, p.entity),
              e('h3', { className: 'text-lg font-bold text-white' }, p.name),
              e('div', { className: 'text-xs text-slate-400 font-medium' }, p.title + ' • ' + p.location),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800' }, p.role)
            );
          })
        ),

        // VIBE Media Endorsement
        e('div', { className: 'glass-card-premium p-6 md:p-8 max-w-3xl mx-auto border-yellow-500/30 space-y-4' },
          e('div', { className: 'flex items-center gap-3' },
            e('span', { className: 'text-yellow-400 text-lg' }, '🤝'),
            e('h4', { className: 'text-white font-cinzel text-base font-bold' }, 'Industry Endorsement: VIBE Media (Founded 2015 by Rich)'),
          ),
          e('p', { className: 'text-xs md:text-sm text-slate-300 italic leading-relaxed' },
            '“' + endorsement.torreyStatement + '”'
          ),
          e('div', { className: 'text-[11px] text-amber-300 font-bold text-right' },
            '— Cassidy Torrey, Public Endorsement of Rich & VIBE Media Team'
          )
        )
      )
    );
  };
})();
