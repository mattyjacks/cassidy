(function() {
  var e = React.createElement;

  window.HeroCinematic = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#0e1422] via-[#080b12] to-[#07090e]' },
      // Theatrical golden spotlight in background
      e('div', { className: 'spotlight-gold' }),

      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          // Top pill
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-950/40 text-yellow-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-yellow-400 animate-ping' }),
            'The Roger Ebert & Peter Jackson Methodology Applied to High-Ticket Surgery'
          ),

          // Main Headline
          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Transforming Dental Implant Practices into ',
            e('span', { className: 'gold-gradient-text' }, 'Cinematic Powerhouses')
          ),

          // Subheadline
          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Generic agencies sell clicks with sterile stock photos. Cassidy Torrey deploys expert-vetted American film crews directly into your clinic to invoke the ',
            e('strong', { className: 'text-amber-300 font-semibold' }, 'suspension of disbelief'),
            '—turning terrified implant candidates into confident, committed surgical cases.'
          ),

          // Roger Ebert Quote Box
          e('div', { className: 'p-4 rounded-xl border border-yellow-500/20 bg-slate-900/60 max-w-2xl mx-auto text-left flex items-start gap-4' },
            e('div', { className: 'p-2 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 shrink-0' },
              e('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
                e('path', { d: 'M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' })
              )
            ),
            e('div', null,
              e('p', { className: 'text-xs md:text-sm text-slate-300 italic' },
                '“The audience is never required to bring suspension of disbelief with them to a movie. It is the filmmakers\' job to create it.”'
              ),
              e('div', { className: 'text-[11px] text-amber-300/80 font-bold mt-1' },
                '— Roger Ebert, Film Critic • Core Philosophy of Cassidy Torrey'
              )
            )
          ),

          // CTAs & Guarantees
          e('div', { className: 'pt-4 flex flex-col sm:flex-row items-center justify-center gap-4' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-gold w-full sm:w-auto text-sm px-8 py-4 shadow-lg'
            },
              e('span', null, 'Claim 30-Min Strategy Call'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: basePath + 'five-ps.html',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'Explore The 5 P\'s Framework')
          ),

          // Proof ticker
          e('div', { className: 'pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium' },
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-emerald-400 font-bold text-sm' }, '✓'),
              e('span', null, '347+ Practices Scaled')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-emerald-400 font-bold text-sm' }, '✓'),
              e('span', null, '7X - 10X Target ROAS in 90 Days')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-emerald-400 font-bold text-sm' }, '✓'),
              e('span', null, '90-Day Iron-Clad Guarantee (Work Free)')
            ),
            e('div', { className: 'flex items-center gap-2' },
              e('span', { className: 'text-emerald-400 font-bold text-sm' }, '✓'),
              e('span', null, '100% US Creators • Zero Outsourcing')
            )
          )
        )
      )
    );
  };
})();
