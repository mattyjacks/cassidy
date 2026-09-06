(function() {
  var e = React.createElement;

  window.NewHollywoodShowcase = function(props) {
    var basePath = props.basePath || "";

    return e('section', { id: 'new-hollywood', className: 'py-20 bg-slate-50 border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'The Entertainment Wing'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'Fostering The ',
            e('span', { className: 'text-blue-700' }, '“New Hollywood”'),
            ' Vision in Arizona'
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            'Decentralizing the American film industry from Los Angeles to the American Southwest. Why high-ticket medical marketing and cinematic entertainment share the exact same storytelling DNA.'
          )
        ),

        // 3 Column Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-12' },
          // Card 1: Film Decentralization
          e('div', { className: 'bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-4 hover:border-blue-300 transition' },
            e('img', {
              src: basePath + 'assets/svg/film-strip.svg',
              alt: 'Film Strip',
              className: 'w-10 h-10'
            }),
            e('h3', { className: 'text-lg font-bold text-slate-900' }, 'Decentralizing Hollywood'),
            e('p', { className: 'text-xs md:text-sm text-slate-600 leading-relaxed' },
              'Arizona offers sweeping natural landscapes, favorable tax incentives, and low logistical overhead that mirror the expansive cinematic scale Cassidy Torrey admired in The Lord of the Rings. Manifest Media is spearheading the Southwest studio ecosystem.'
            ),
            e('div', { className: 'text-xs text-blue-700 font-semibold' },
              'Scottsdale & Mesa Production Facilities'
            )
          ),

          // Card 2: Executive Leadership - Noah Frimer
          e('div', { className: 'bg-white rounded-xl border border-blue-200 shadow-sm p-6 md:p-8 space-y-4' },
            e('div', { className: 'w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-800 font-bold text-sm' }, 'VP'),
            e('h3', { className: 'text-lg font-bold text-slate-900' }, 'Noah Frimer, VP Distribution'),
            e('p', { className: 'text-xs md:text-sm text-slate-600 leading-relaxed' },
              'Enlisted in November 2023. Holds an ASU Film & Media Production degree with 20+ producing credits spanning reality television, documentaries, and short films. Directs multi-state logistics and broadcast distribution pipelines.'
            ),
            e('div', { className: 'text-xs text-blue-700 font-semibold' },
              'ASU Film Alum • 20+ Producing Credits'
            )
          ),

          // Card 3: The Cross-Pollination Advantage
          e('div', { className: 'bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-4 hover:border-blue-300 transition' },
            e('img', {
              src: basePath + 'assets/svg/tooth-implant.svg',
              alt: 'Medical Cinema',
              className: 'w-10 h-10'
            }),
            e('h3', { className: 'text-lg font-bold text-slate-900' }, 'The Dual-Track Advantage'),
            e('p', { className: 'text-xs md:text-sm text-slate-600 leading-relaxed' },
              'The anamorphic cameras, master lighting rigs, and documentary interview techniques used on our national television projects are the exact same tools brought into your dental clinic. Your practice receives true Hollywood pedigree.'
            ),
            e('div', { className: 'text-xs text-emerald-700 font-semibold' },
              'Stage 32 • Kavyar CEO • eZWay Gala'
            )
          )
        ),

        // Read More
        e('div', { className: 'text-center' },
          e('a', {
            href: basePath + 'new-hollywood.html',
            className: 'btn-blue-outline text-xs py-3 px-6'
          }, 'Explore The Full Entertainment Portfolio & Arizona Film Vision →')
        )
      )
    );
  };
})();
