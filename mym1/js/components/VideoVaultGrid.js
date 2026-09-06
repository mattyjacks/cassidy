(function() {
  var e = React.createElement;

  window.VideoVaultGrid = function(props) {
    var basePath = props.basePath || "";
    var videos = window.VIDEO_VAULT || [];
    var [selectedCategory, setSelectedCategory] = React.useState("All");

    var categories = ["All", "Full-Arch Case Study", "Aesthetic Anterior Implants", "Practice Turnaround", "Executive Philosophy", "Entertainment Wing"];

    var filtered = selectedCategory === "All" ? videos : videos.filter(function(v) { return v.category === selectedCategory; });

    return e('section', { id: 'video-vault', className: 'py-20 bg-[#07090e] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'The Cinema Reel Vault'),
          e('h2', { className: 'text-white' },
            'Hollywood Production Deployed in ',
            e('span', { className: 'gold-gradient-text' }, 'Clinical Dentistry')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Explore full documentary patient films and executive interviews. Shot exclusively by expert-vetted American cinematographers with zero overseas outsourcing.'
          )
        ),

        // Category filter pills
        e('div', { className: 'flex flex-wrap items-center justify-center gap-2 mb-10' },
          categories.map(function(cat, idx) {
            var isActive = cat === selectedCategory;
            return e('button', {
              key: idx,
              onClick: function() { setSelectedCategory(cat); },
              className: 'px-3.5 py-1.5 rounded-full text-xs font-bold transition ' +
                (isActive ?
                  'bg-yellow-500 text-black shadow-md' :
                  'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white')
            }, cat);
          })
        ),

        // Video Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
          filtered.map(function(item) {
            return e('div', {
              key: item.id,
              className: 'glass-card p-5 flex flex-col justify-between gold-border-glow group cursor-pointer',
              onClick: function() {
                if (window.openVideoModal) window.openVideoModal(item.title, item.subtitle);
              }
            },
              e('div', { className: 'space-y-3' },
                // Video thumbnail placeholder
                e('div', { className: 'relative aspect-video rounded-lg bg-black border border-slate-800 flex items-center justify-center overflow-hidden group-hover:border-yellow-500/50 transition' },
                  e('div', { className: 'w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-400 flex items-center justify-center group-hover:scale-110 transition' },
                    e('img', { src: basePath + 'assets/svg/play-icon.svg', alt: 'Play', className: 'w-6 h-6 ml-0.5' })
                  ),
                  e('span', { className: 'absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-300' },
                    item.duration
                  ),
                  e('span', { className: 'absolute top-2 left-2 px-1.5 py-0.5 rounded bg-slate-900/80 text-[9px] font-mono text-emerald-400 font-bold' },
                    item.roasResult
                  )
                ),

                e('div', { className: 'space-y-1' },
                  e('div', { className: 'text-[10px] uppercase font-bold text-amber-300 font-mono tracking-wider' }, item.category),
                  e('h3', { className: 'text-sm font-bold text-white leading-snug group-hover:text-yellow-400 transition font-cinzel' }, item.title),
                  e('div', { className: 'text-[11px] text-slate-400 font-medium' }, item.subtitle),
                  e('p', { className: 'text-xs text-slate-300 line-clamp-2 leading-relaxed pt-1' }, item.summary)
                )
              ),

              e('div', { className: 'pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500' },
                e('span', { className: 'truncate max-w-[170px]' }, item.cameraPackage.split('•')[0].trim()),
                e('span', { className: 'text-yellow-400 font-bold uppercase group-hover:underline' }, 'Watch Reel →')
              )
            );
          })
        )
      )
    );
  };
})();
