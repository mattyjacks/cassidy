(function() {
  var e = React.createElement;

  window.FivePsInteractive = function(props) {
    var basePath = props.basePath || "";
    var data = window.FIVE_PS_FRAMEWORK || [];
    var [selectedIdx, setSelectedIdx] = React.useState(0);

    var currentPillar = data[selectedIdx] || data[0];

    return e('section', { id: 'five-ps', className: 'py-20 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        // Header
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Proprietary Acquisition Framework'),
          e('h2', { className: 'text-slate-950' },
            'Deconstructing The Proprietary ',
            e('span', { className: 'text-blue-700' }, '5 P\'s Framework')
          ),
          e('p', { className: 'text-slate-600 text-sm sm:text-base leading-relaxed' },
            'Developed by Cassidy Torrey across 347+ practices. A battle-tested sequence engineered to systematically dissolve patient skepticism, invoke emotional immersion, and convert five-figure surgical cases.'
          )
        ),

        // Tabs
        e('div', { className: 'flex flex-wrap items-center justify-center gap-2 mb-10' },
          data.map(function(item, idx) {
            var isActive = idx === selectedIdx;
            return e('button', {
              key: idx,
              onClick: function() { setSelectedIdx(idx); },
              className: 'px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ' +
                (isActive ?
                  'bg-blue-800 text-white shadow-sm border border-blue-900' :
                  'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200')
            },
              e('span', { className: 'text-[11px] opacity-75 font-mono mr-1.5' }, item.step),
              e('span', null, item.pillar)
            );
          })
        ),

        // Active pillar display card
        e('div', { className: 'clean-card p-8 md:p-12 max-w-4xl mx-auto border-slate-200 shadow-sm' },
          e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
            // Left column info
            e('div', { className: 'lg:col-span-7 space-y-5 text-left' },
              e('div', { className: 'flex items-center gap-3' },
                e('span', { className: 'font-mono text-3xl font-extrabold text-blue-700' }, currentPillar.step),
                e('div', null,
                  e('h3', { className: 'text-2xl text-slate-950 font-bold' }, currentPillar.pillar),
                  e('div', { className: 'text-xs text-blue-700 font-semibold uppercase tracking-wide' }, currentPillar.tagline)
                )
              ),

              e('div', { className: 'space-y-1' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-slate-500' }, 'Strategic Function:'),
                e('p', { className: 'text-sm text-slate-700 leading-relaxed' }, currentPillar.description)
              ),

              e('div', { className: 'p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-blue-800' }, 'Psychological Mechanism:'),
                e('p', { className: 'text-xs text-slate-700 italic' }, currentPillar.psychology)
              ),

              e('div', { className: 'flex items-center gap-2 text-xs text-emerald-700 font-medium' },
                e('span', { className: 'w-2 h-2 rounded-full bg-emerald-600' }),
                e('strong', null, 'Tactical Deliverable: '),
                e('span', { className: 'text-slate-700' }, currentPillar.actionableDeliverable)
              )
            ),

            // Right column quote box
            e('div', { className: 'lg:col-span-5 bg-gradient-to-br from-blue-50/70 to-slate-50 p-6 sm:p-8 rounded-xl border border-blue-200/80 text-center flex flex-col justify-between h-full space-y-6' },
              e('div', { className: 'space-y-3' },
                e('img', {
                  src: basePath + 'assets/svg/film-strip.svg',
                  alt: 'Film Strip',
                  className: 'w-10 h-10 mx-auto'
                }),
                e('blockquote', { className: 'font-editorial text-sm sm:text-base text-slate-800 italic leading-relaxed' },
                  '“' + currentPillar.keyQuote + '”'
                ),
                e('div', { className: 'text-[11px] text-slate-500 font-semibold uppercase tracking-wider' },
                  '— Cassidy Torrey on ' + currentPillar.pillar
                )
              ),

              e('button', {
                onClick: function() {
                  if (window.openBookingModal) window.openBookingModal();
                  else window.location.href = basePath + 'strategy-session.html';
                },
                className: 'btn-blue text-xs py-3 w-full'
              }, 'Deploy ' + currentPillar.pillar + ' in Your Practice')
            )
          )
        ),

        // Whitepaper link
        e('div', { className: 'text-center mt-10' },
          e('a', {
            href: basePath + 'five-ps.html',
            className: 'text-xs text-blue-700 hover:text-blue-900 font-bold tracking-wider uppercase inline-flex items-center gap-2 hover:underline'
          },
            'Read The Full Strategic Whitepaper on the 5 P\'s Framework',
            e('span', null, '→')
          )
        )
      )
    );
  };
})();
