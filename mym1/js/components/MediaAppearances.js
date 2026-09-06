(function() {
  var e = React.createElement;

  window.MediaAppearances = function(props) {
    var basePath = props.basePath || "";
    var podcasts = window.PODCAST_DATA || [];

    return e('section', { id: 'media-appearances', className: 'py-20 bg-slate-50 border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-14' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'Thought Leadership & Broadcasts'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'Public Engagements & ',
            e('span', { className: 'text-blue-700' }, 'Industry Podcasts')
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            'Cassidy Torrey on the speaking and interview circuit—addressing high-ticket dental entrepreneurs, Hollywood entertainment executives, and creative visionaries.'
          )
        ),

        // Grid
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10' },
          podcasts.map(function(item, idx) {
            return e('div', { key: idx, className: 'bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-blue-300 transition' },
              e('div', { className: 'space-y-3' },
                e('div', { className: 'flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2' },
                  e('span', { className: 'text-blue-700 font-bold' }, item.format),
                  e('span', null, item.date)
                ),
                e('h3', { className: 'text-base font-bold text-slate-900 leading-snug' }, item.title),
                e('div', { className: 'text-xs text-blue-600 font-medium' }, item.subtitle),
                e('p', { className: 'text-xs text-slate-600 leading-relaxed' }, item.description)
              ),

              e('div', { className: 'pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5' },
                item.topics.map(function(t, i) {
                  return e('span', { key: i, className: 'text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium' }, t);
                })
              )
            );
          })
        ),

        e('div', { className: 'text-center' },
          e('a', {
            href: basePath + 'podcast-appearances.html',
            className: 'btn-blue-outline text-xs py-3 px-6'
          }, 'Listen to Full Audio Episodes & Keynotes →')
        )
      )
    );
  };
})();
