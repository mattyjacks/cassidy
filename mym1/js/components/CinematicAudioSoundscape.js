(function() {
  var e = React.createElement;

  window.CinematicAudioSoundscape = function(props) {
    var [isPlaying, setIsPlaying] = React.useState(false);
    var audioCtxRef = React.useRef(null);
    var oscRef = React.useRef(null);
    var gainRef = React.useRef(null);

    var toggleAudio = function() {
      if (!isPlaying) {
        try {
          var AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            audioCtxRef.current = new AudioContext();
            var ctx = audioCtxRef.current;
            var osc = ctx.createOscillator();
            var gain = ctx.createGain();
            
            // Warm cinematic drone tone (55Hz / A1)
            osc.type = "sine";
            osc.frequency.setValueAtTime(55, ctx.currentTime);
            
            gain.gain.setValueAtTime(0.01, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            
            oscRef.current = osc;
            gainRef.current = gain;
          }
        } catch(err) {
          console.log("Audio not allowed yet:", err);
        }
        setIsPlaying(true);
      } else {
        if (gainRef.current && audioCtxRef.current) {
          try {
            gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
            setTimeout(function() {
              if (oscRef.current) oscRef.current.stop();
            }, 1000);
          } catch(e) {}
        }
        setIsPlaying(false);
      }
    };

    return e('div', { className: 'fixed bottom-6 right-6 z-40' },
      e('button', {
        onClick: toggleAudio,
        title: isPlaying ? 'Mute Theatrical Cinematic Soundscape' : 'Enable Theatrical Cinematic Immersion Audio',
        className: 'flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-yellow-500/40 bg-slate-950/90 backdrop-blur-md text-slate-300 hover:text-yellow-300 shadow-2xl transition hover:scale-105 group'
      },
        // Animated Equalizer Bars
        e('div', { className: 'flex items-end gap-0.5 h-3.5' },
          e('span', { className: 'w-1 bg-yellow-400 rounded-full ' + (isPlaying ? 'h-full animate-pulse' : 'h-1.5') }),
          e('span', { className: 'w-1 bg-amber-400 rounded-full ' + (isPlaying ? 'h-2/3 animate-bounce' : 'h-2.5') }),
          e('span', { className: 'w-1 bg-yellow-300 rounded-full ' + (isPlaying ? 'h-5/6 animate-pulse' : 'h-1') })
        ),
        e('div', { className: 'text-left' },
          e('div', { className: 'text-[10px] uppercase font-mono font-bold tracking-wider text-amber-300' },
            isPlaying ? 'Immersion Audio: ON' : 'Cinema Score: OFF'
          ),
          e('div', { className: 'text-[8px] text-slate-400 hidden sm:block' }, 'Peter Jackson Atmosphere')
        )
      )
    );
  };
})();
