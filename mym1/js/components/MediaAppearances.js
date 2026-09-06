(function() {
  var e = React.createElement;

  window.MediaAppearances = function(props) {
    var basePath = props.basePath || "";
    var podcasts = window.PODCAST_DATA || [];

    return e('section', { id: 'media-appearances', className: 'py-20 bg-[#080b11] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'badge-pill' }, 'Thought Leadership & Broadcasts'),
          e('h2', { className: 'text-white' },
            'Public Engagements & ',
            e('span', { className: 'gold-gradient-text' }, 'Industry Podcasts')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Cassidy Torrey on the speaking and interview circuit—addressing high-ticket dental entrepreneurs, Hollywood entertainment executives, and creative visionaries.'
          )
        ),

        // Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10' },
          podcasts.map(function(item, idx) {
            return e('div', { key: idx, className: 'glass-card p-6 flex flex-col justify-between gold-border-glow' },
              e('div', { className: 'space-y-3' },
                e('div', { className: 'flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2' },
                  e('span', { className: 'text-amber-300 font-semibold' }, item.format),
                  e('span', null, item.date)
                ),
                e('h3', { className: 'text-base font-bold text-white leading-snug' }, item.title),
                e('div', { className: 'text-xs text-yellow-400/90 font-medium' }, item.subtitle),
                e('p', { className: 'text-xs text-slate-300 leading-relaxed' }, item.description)
              ),

              e('div', { className: 'pt-4 mt-4 border-t border-slate-800 flex flex-wrap gap-1.5' },
                item.topics.map(function(t, i) {
                  return e('span', { key: i, className: 'text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800' }, t);
                })
              )
            );
          })
        ),

        e('div', { className: 'text-center' },
          e('a', {
            href: basePath + 'podcast-appearances.html',
            className: 'btn-gold-outline text-xs py-3 px-6'
          }, 'Listen to Full Audio Episodes & Keynotes →')
        )
      )
    );
  };
})();
