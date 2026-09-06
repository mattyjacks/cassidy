(function() {
  var e = React.createElement;

  window.NewHollywoodShowcase = function(props) {
    var basePath = props.basePath || "";

    return e('section', { id: 'new-hollywood', className: 'py-20 bg-gradient-to-b from-[#07090e] via-[#0d121c] to-[#07090e] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'badge-pill' }, 'The Entertainment Wing'),
          e('h2', { className: 'text-white' },
            'Fostering The ',
            e('span', { className: 'gold-gradient-text' }, '"New Hollywood"'),
            ' Vision in Arizona'
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Decentralizing the American film industry from Los Angeles to the American Southwest. Why high-ticket medical marketing and cinematic entertainment share the exact same storytelling DNA.'
          )
        ),

        // 3 Column Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-12' },
          // Card 1: Film Decentralization
          e('div', { className: 'glass-card p-6 md:p-8 space-y-4 gold-border-glow' },
            e('img', {
              src: basePath + 'assets/svg/film-strip.svg',
              alt: 'Film Strip',
              className: 'w-10 h-10'
            }),
            e('h3', { className: 'text-lg font-bold text-white font-cinzel' }, 'Decentralizing Hollywood'),
            e('p', { className: 'text-xs md:text-sm text-slate-300 leading-relaxed' },
              'Arizona offers sweeping natural landscapes, favorable tax incentives, and low logistical overhead that mirror the expansive cinematic scale Cassidy Torrey admired in The Lord of the Rings. Manifest Media is spearheading the Southwest studio ecosystem.'
            ),
            e('div', { className: 'text-[11px] text-amber-300 font-semibold' },
              'Scottsdale & Mesa Production Facilities'
            )
          ),

          // Card 2: Executive Leadership - Noah Frimer
          e('div', { className: 'glass-card p-6 md:p-8 space-y-4 gold-border-glow border-yellow-500/30' },
            e('div', { className: 'w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-300 font-bold text-sm' }, 'VP'),
            e('h3', { className: 'text-lg font-bold text-white font-cinzel' }, 'Noah Frimer, VP Distribution'),
            e('p', { className: 'text-xs md:text-sm text-slate-300 leading-relaxed' },
              'Enlisted in November 2023. Holds an ASU Film & Media Production degree with 20+ producing credits spanning reality television, documentaries, and short films. Directs multi-state logistics and broadcast distribution pipelines.'
            ),
            e('div', { className: 'text-[11px] text-amber-300 font-semibold' },
              'ASU Film Alum • 20+ Producing Credits'
            )
          ),

          // Card 3: The Cross-Pollination Advantage
          e('div', { className: 'glass-card p-6 md:p-8 space-y-4 gold-border-glow' },
            e('img', {
              src: basePath + 'assets/svg/tooth-implant.svg',
              alt: 'Medical Cinema',
              className: 'w-10 h-10'
            }),
            e('h3', { className: 'text-lg font-bold text-white font-cinzel' }, 'The Dual-Track Advantage'),
            e('p', { className: 'text-xs md:text-sm text-slate-300 leading-relaxed' },
              'The anamorphic cameras, master lighting rigs, and documentary interview techniques used on our national television projects are the exact same tools brought into your dental clinic. Your practice receives true Hollywood pedigree.'
            ),
            e('div', { className: 'text-[11px] text-emerald-400 font-semibold' },
              'Stage 32 • Kavyar CEO • eZWay Gala'
            )
          )
        ),

        // Read More
        e('div', { className: 'text-center' },
          e('a', {
            href: basePath + 'new-hollywood.html',
            className: 'btn-gold-outline text-xs py-3 px-6'
          }, 'Explore The Full Entertainment Portfolio & Arizona Film Vision →')
        )
      )
    );
  };
})();
