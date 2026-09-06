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

    return e('div', { className: 'p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden' },
      e('div', { className: 'flex items-center justify-between border-b border-slate-100 pb-3 mb-4' },
        e('div', { className: 'flex items-center gap-1 text-amber-500' },
          [1, 2, 3, 4, 5].map(function(s) {
            return e('span', { key: s, className: 'text-sm' }, '★');
          }),
          e('span', { className: 'text-xs text-slate-500 ml-2 font-mono font-bold' }, 'VERIFIED CLINICAL TESTIMONIAL')
        ),
        e('div', { className: 'text-xs font-bold text-blue-700 font-mono' },
          (active + 1) + ' / ' + testimonials.length
        )
      ),

      e('div', { className: 'space-y-4' },
        e('div', { className: 'text-sm md:text-base font-bold text-blue-900 uppercase tracking-wide' }, current.highlight),
        e('p', { className: 'text-xs md:text-sm text-slate-700 italic leading-relaxed min-h-[70px]' },
          '“' + current.text + '”'
        ),
        e('div', { className: 'flex items-center justify-between pt-2 border-t border-slate-100' },
          e('div', null,
            e('div', { className: 'text-xs md:text-sm font-bold text-slate-900' }, current.author),
            e('div', { className: 'text-[11px] text-blue-700' }, current.clinic + ' • ' + current.city)
          ),
          e('div', { className: 'flex gap-1.5' },
            testimonials.map(function(_, i) {
              return e('button', {
                key: i,
                onClick: function() { setActive(i); },
                className: 'w-2.5 h-2.5 rounded-full transition ' + (i === active ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400')
              });
            })
          )
        )
      )
    );
  };
})();
