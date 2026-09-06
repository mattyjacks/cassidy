(function() {
  var e = React.createElement;

  window.DoctorQuoteCarousel = function(props) {
    var testimonials = window.TESTIMONIALS_DATA || [];
    var [active, setActive] = React.useState(0);

    React.useEffect(function() {
      var timer = setInterval(function() {
        setActive(function(prev) { return (prev + 1) % testimonials.length; });
      }, 7000);
      return function() { clearInterval(timer); };
    }, [testimonials.length]);

    var current = testimonials[active] || testimonials[0];

    return e('div', { className: 'p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0e1626] to-slate-950 border border-yellow-500/30 shadow-2xl relative overflow-hidden' },
      e('div', { className: 'flex items-center justify-between border-b border-slate-800 pb-3 mb-4' },
        e('div', { className: 'flex items-center gap-1 text-amber-400' },
          [1, 2, 3, 4, 5].map(function(s) {
            return e('span', { key: s, className: 'text-sm' }, '★');
          }),
          e('span', { className: 'text-xs text-slate-400 ml-2 font-mono font-bold' }, 'VERIFIED CLINICAL TESTIMONIAL')
        ),
        e('div', { className: 'text-xs font-bold text-amber-300 font-mono' },
          (active + 1) + ' / ' + testimonials.length
        )
      ),

      e('div', { className: 'space-y-4' },
        e('div', { className: 'text-sm md:text-base font-bold text-amber-200 uppercase tracking-wide' }, current.highlight),
        e('p', { className: 'text-xs md:text-sm text-slate-300 italic leading-relaxed min-h-[70px]' },
          '“' + current.text + '”'
        ),
        e('div', { className: 'flex items-center justify-between pt-2 border-t border-slate-800' },
          e('div', null,
            e('div', { className: 'text-xs md:text-sm font-bold text-white' }, current.author),
            e('div', { className: 'text-[11px] text-amber-300/90' }, current.clinic + ' • ' + current.city)
          ),
          e('div', { className: 'flex gap-1.5' },
            testimonials.map(function(_, i) {
              return e('button', {
                key: i,
                onClick: function() { setActive(i); },
                className: 'w-2.5 h-2.5 rounded-full transition ' + (i === active ? 'bg-yellow-400 scale-125' : 'bg-slate-700 hover:bg-slate-500')
              });
            })
          )
        )
      )
    );
  };
})();
