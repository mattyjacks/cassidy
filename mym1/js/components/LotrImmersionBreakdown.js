(function() {
  var e = React.createElement;

  window.LotrImmersionBreakdown = function(props) {
    var basePath = props.basePath || "";

    return e('section', { id: 'immersion-science', className: 'py-20 bg-gradient-to-b from-[#090b12] via-[#101424] to-[#080b11] border-t border-yellow-500/20' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Cognitive Neuroscience & Cinema'),
          e('h2', { className: 'text-white' },
            'The Lord of the Rings & The ',
            e('span', { className: 'gold-gradient-text' }, 'Science of Immersion')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'How an epiphany in a New Hampshire movie theater revolutionized high-ticket patient acquisition in American dentistry.'
          )
        ),

        e('div', { className: 'glass-card-premium p-8 md:p-12 max-w-4xl mx-auto gold-border-glow space-y-8' },
          // Quotation banner
          e('div', { className: 'p-6 rounded-xl bg-yellow-950/30 border-l-4 border-yellow-500 flex items-start gap-4' },
            e('div', { className: 'text-3xl text-yellow-400' }, '“'),
            e('div', { className: 'space-y-1' },
              e('p', { className: 'text-sm md:text-base text-amber-100 font-cinzel italic leading-relaxed' },
                'The audience is never required to bring suspension of disbelief with them to a movie. It is the filmmakers\' job to create it.'
              ),
              e('div', { className: 'text-xs text-amber-300/80 font-bold' },
                '— Roger Ebert • Guiding Operational Tenet of Cassidy Torrey'
              )
            )
          ),

          // 3 Column breakdown
          e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 text-left' },
            e('div', { className: 'p-5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-amber-300 font-mono' }, '1. The New Hampshire Epiphany'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                'As a youth, Cassidy Torrey\'s father took him to Peter Jackson\'s premiere of The Fellowship of the Ring. Watching the vast physical landscapes, intricate prosthetic craft, and unconditional commitment of the actors, Torrey observed human beings completely forget their external reality.'
              )
            ),
            e('div', { className: 'p-5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-sky-300 font-mono' }, '2. Neuro-Transport in Medicine'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                'When patients face surgical implants, their logical prefrontal cortex triggers fear: pain, financial loss, surgical drills. Sterile advertising amplifies this fear. Narrative cinema bypasses logical resistance by engaging mirror neurons and emotional centers.'
              )
            ),
            e('div', { className: 'p-5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-emerald-400 font-mono' }, '3. Suspension of Clinical Disbelief'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                'By presenting raw, emotional patient milestones (biting a steak, laughing at a grandchild\'s wedding) with cinema lighting and score, patients believe in their own restored future before they step foot inside your clinic.'
              )
            )
          ),

          // Call to action
          e('div', { className: 'text-center pt-2' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-gold text-xs py-3.5 px-8 shadow-xl'
            }, 'Experience The Narrative Escapism Methodology')
          )
        )
      )
    );
  };
})();
