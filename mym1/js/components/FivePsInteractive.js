(function() {
  var e = React.createElement;

  window.FivePsInteractive = function(props) {
    var basePath = props.basePath || "";
    var data = window.FIVE_PS_FRAMEWORK || [];
    var [selectedIdx, setSelectedIdx] = React.useState(0);

    var currentPillar = data[selectedIdx] || data[0];

    return e('section', { id: 'five-ps', className: 'py-20 bg-[#080b11] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        // Header
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'badge-pill' }, 'Proprietary Behavioral Engine'),
          e('h2', { className: 'text-white' },
            'Deconstructing The Proprietary ',
            e('span', { className: 'gold-gradient-text' }, '5 P\'s Framework')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Developed by Cassidy Torrey across 347+ practices. A battle-tested sequence engineered to systematically dissolve patient skepticism, evoke emotional immersion, and convert five-figure surgical cases.'
          )
        ),

        // Tabs
        e('div', { className: 'flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10' },
          data.map(function(item, idx) {
            var isActive = idx === selectedIdx;
            return e('button', {
              key: idx,
              onClick: function() { setSelectedIdx(idx); },
              className: 'px-5 py-3 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ' +
                (isActive ?
                  'bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 shadow-lg scale-105 border-transparent' :
                  'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800')
            },
              e('span', { className: 'text-xs opacity-75 font-mono' }, item.step),
              e('span', null, item.pillar)
            );
          })
        ),

        // Active pillar display card
        e('div', { className: 'glass-card-premium p-8 md:p-12 max-w-4xl mx-auto gold-border-glow' },
          e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
            // Left column info
            e('div', { className: 'lg:col-span-7 space-y-5' },
              e('div', { className: 'flex items-center gap-3' },
                e('span', { className: 'font-mono text-3xl md:text-4xl font-extrabold text-amber-400' }, currentPillar.step),
                e('div', null,
                  e('h3', { className: 'text-2xl md:text-3xl text-white font-cinzel font-bold' }, currentPillar.pillar),
                  e('div', { className: 'text-xs text-amber-300 font-semibold tracking-wide uppercase' }, currentPillar.tagline)
                )
              ),

              e('div', { className: 'space-y-2' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-slate-400' }, 'Strategic Function & Execution:'),
                e('p', { className: 'text-sm text-slate-300 leading-relaxed' }, currentPillar.description)
              ),

              e('div', { className: 'p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-yellow-400' }, 'Psychological Mechanism:'),
                e('p', { className: 'text-xs text-slate-300 italic' }, currentPillar.psychology)
              ),

              e('div', { className: 'flex items-center gap-2 text-xs text-emerald-400 font-medium' },
                e('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
                e('strong', null, 'Direct Deliverable: '),
                e('span', { className: 'text-slate-300' }, currentPillar.actionableDeliverable)
              )
            ),

            // Right column quote & graphic
            e('div', { className: 'lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0c121e] p-6 rounded-xl border border-yellow-500/20 text-center flex flex-col justify-between h-full space-y-6' },
              e('div', { className: 'space-y-3' },
                e('img', {
                  src: basePath + 'assets/svg/film-strip.svg',
                  alt: 'Cinema Reel',
                  className: 'w-12 h-12 mx-auto opacity-80'
                }),
                e('p', { className: 'text-sm md:text-base text-amber-200 font-cinzel italic leading-snug' },
                  '“' + currentPillar.keyQuote + '”'
                ),
                e('div', { className: 'text-[11px] text-slate-400 font-semibold uppercase tracking-wider' },
                  '— Cassidy Torrey on ' + currentPillar.pillar
                )
              ),

              e('button', {
                onClick: function() {
                  if (window.openBookingModal) window.openBookingModal();
                  else window.location.href = basePath + 'strategy-session.html';
                },
                className: 'btn-gold text-xs py-3 w-full'
              }, 'Deploy ' + currentPillar.pillar + ' in Your Practice')
            )
          )
        ),

        // Bottom link to dedicated 5 Ps page
        e('div', { className: 'text-center mt-10' },
          e('a', {
            href: basePath + 'five-ps.html',
            className: 'text-xs text-yellow-400 hover:text-white font-bold tracking-wider uppercase inline-flex items-center gap-2 hover:underline'
          },
            'Read The Full 12-Page Whitepaper on the 5 P\'s Framework',
            e('span', null, '→')
          )
        )
      )
    );
  };
})();
