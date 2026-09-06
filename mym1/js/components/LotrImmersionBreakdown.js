(function() {
  var e = React.createElement;

  window.LotrImmersionBreakdown = function(props) {
    var basePath = props.basePath || "";

    return e('section', { id: 'immersion-science', className: 'py-20 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' },
            'Cognitive Neuroscience & Cinema'
          ),
          e('h2', { className: 'text-3xl md:text-4xl font-extrabold text-slate-900 font-newsreader' },
            'The Lord of the Rings & The ',
            e('span', { className: 'text-blue-700' }, 'Science of Immersion')
          ),
          e('p', { className: 'text-slate-600 text-sm md:text-base leading-relaxed' },
            'How an epiphany in a New Hampshire movie theater revolutionized high-ticket patient acquisition in American dentistry.'
          )
        ),

        e('div', { className: 'bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 max-w-4xl mx-auto space-y-8' },
          // Quotation banner
          e('div', { className: 'p-6 rounded-xl bg-blue-50/60 border-l-4 border-blue-600 flex items-start gap-4' },
            e('div', { className: 'text-4xl text-blue-600 font-serif leading-none' }, '“'),
            e('div', { className: 'space-y-1' },
              e('p', { className: 'text-base md:text-lg text-slate-900 font-newsreader italic leading-relaxed' },
                'The audience is never required to bring suspension of disbelief with them to a movie. It is the filmmakers\' job to create it.'
              ),
              e('div', { className: 'text-xs text-blue-700 font-bold' },
                '— Roger Ebert • Guiding Operational Tenet of Cassidy Torrey'
              )
            )
          ),

          // 3 Column breakdown
          e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6 text-left' },
            e('div', { className: 'p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-blue-700 font-mono' }, '1. The New Hampshire Epiphany'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
                'As a youth, Cassidy Torrey\'s father took him to Peter Jackson\'s premiere of The Fellowship of the Ring. Watching the vast physical landscapes, intricate prosthetic craft, and unconditional commitment of the actors, Torrey observed human beings completely forget their external reality.'
              )
            ),
            e('div', { className: 'p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-blue-900 font-mono' }, '2. Neuro-Transport in Medicine'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
                'When patients face surgical implants, their logical prefrontal cortex triggers fear: pain, financial loss, surgical drills. Sterile advertising amplifies this fear. Narrative cinema bypasses logical resistance by engaging mirror neurons and emotional centers.'
              )
            ),
            e('div', { className: 'p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2' },
              e('div', { className: 'text-xs font-bold uppercase text-emerald-700 font-mono' }, '3. Suspension of Clinical Disbelief'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
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
              className: 'btn-blue text-xs py-3.5 px-8 shadow-sm font-bold'
            }, 'Experience The Narrative Escapism Methodology')
          )
        )
      )
    );
  };
})();
