(function() {
  var e = React.createElement;

  window.VideoPlayerModal = function(props) {
    var basePath = props.basePath || "";
    var [videoData, setVideoData] = React.useState(null);

    React.useEffect(function() {
      window.openVideoModal = function(title, subtitle) {
        setVideoData({ title: title, subtitle: subtitle });
      };
      window.closeVideoModal = function() {
        setVideoData(null);
      };
      return function() {
        window.openVideoModal = null;
        window.closeVideoModal = null;
      };
    }, []);

    if (!videoData) return null;

    return e('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md' },
      e('div', { className: 'relative w-full max-w-4xl bg-slate-950 border border-yellow-500/40 rounded-2xl overflow-hidden shadow-2xl' },
        // Modal Header
        e('div', { className: 'p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between' },
          e('div', null,
            e('div', { className: 'text-sm font-bold text-white font-cinzel' }, videoData.title),
            e('div', { className: 'text-[11px] text-amber-300' }, videoData.subtitle + ' • Produced by Manifest Media Broker Group')
          ),
          e('button', {
            onClick: function() { setVideoData(null); },
            className: 'w-8 h-8 rounded-full bg-slate-800 text-yellow-400 font-bold text-xs flex items-center justify-center hover:bg-yellow-500 hover:text-black transition'
          }, '✕')
        ),

        // Video Player Simulator
        e('div', { className: 'relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center space-y-4' },
          e('div', { className: 'w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-400 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition' },
            e('img', { src: basePath + 'assets/svg/play-icon.svg', alt: 'Play', className: 'w-10 h-10 ml-1' })
          ),
          e('div', { className: 'space-y-1' },
            e('div', { className: 'text-amber-200 font-cinzel text-lg font-bold tracking-wider' },
              'CINEMATIC PATIENT TRANSFORMATION REEL'
            ),
            e('p', { className: 'text-xs text-slate-400 max-w-md mx-auto' },
              '4K Cinema Master • Anamorphic Lighting • Real Patient Testimonial • Zero Scripting • Produced by Cassidy Torrey\'s Vetted American Crew'
            )
          ),
          e('div', { className: 'flex items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest pt-2' },
            e('span', null, 'RESOLUTION: 3840 x 2160'),
            e('span', null, '•'),
            e('span', null, 'AUDIO: 24-BIT 48KHZ STEREO'),
            e('span', null, '•'),
            e('span', null, 'COLOR: ARRI LOG-C TO REC.709')
          )
        ),

        // Modal Footer
        e('div', { className: 'p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3' },
          e('div', { className: 'text-xs text-slate-400' },
            'Want this cinema-grade media deployed in your practice?'
          ),
          e('button', {
            onClick: function() {
              setVideoData(null);
              if (window.openBookingModal) window.openBookingModal();
            },
            className: 'btn-gold text-xs py-2 px-4'
          }, 'Claim Free Practice Strategy Session')
        )
      )
    );
  };
})();
