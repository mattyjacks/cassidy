(function() {
  var e = React.createElement;

  window.HeroCinematic = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          // Category pill
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-blue-600' }),
            'The Roger Ebert & Peter Jackson Methodology in Clinical Acquisition'
          ),

          // Main Headline
          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Transforming Dental Implant Practices into ',
            e('span', { className: 'text-blue-700' }, 'Cinematic Powerhouses')
          ),

          // Subheadline
          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Generic agencies waste advertising capital on sterile stock photography. Cassidy Torrey dispatches expert-vetted American film crews directly to your clinic to create the ',
            e('strong', { className: 'text-slate-900 font-semibold' }, 'suspension of disbelief'),
            '—converting apprehensive surgical candidates into committed high-ticket implant patients.'
          ),

          // Roger Ebert Quote Box
          e('div', { className: 'p-6 rounded-xl border border-slate-200 bg-white shadow-sm max-w-2xl mx-auto text-left border-l-4 border-l-blue-700' },
            e('blockquote', { className: 'font-editorial text-base sm:text-lg text-slate-800 italic leading-relaxed' },
              '“The audience is never required to bring suspension of disbelief with them to a movie. It is the filmmakers\' job to create it.”'
            ),
            e('div', { className: 'text-xs text-slate-500 font-semibold mt-2' },
              '— Roger Ebert, Film Critic • Foundational Marketing Thesis of Cassidy Torrey'
            )
          ),

          // CTAs & Guarantees
          e('div', { className: 'pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-blue w-full sm:w-auto text-sm px-8 py-3.5 shadow-sm'
            },
              e('span', null, 'Claim 30-Minute Strategy Session'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: basePath + 'five-ps.html',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'Explore The 5 P\'s Framework')
          ),

          // Proof Bar
          e('div', { className: 'pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-600 font-medium' },
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-blue-700 font-bold' }, '✓'),
              e('span', null, '347+ Practices Scaled')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-blue-700 font-bold' }, '✓'),
              e('span', null, '7X - 10X Target ROAS in 90 Days')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-blue-700 font-bold' }, '✓'),
              e('span', null, '90-Day Iron-Clad Guarantee (Work Free)')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-blue-700 font-bold' }, '✓'),
              e('span', null, '100% US Domestic Creators')
            )
          )
        )
      )
    );
  };
})();
