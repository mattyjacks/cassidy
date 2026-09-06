(function() {
  var e = React.createElement;

  window.InteractiveClinicalSlider = function(props) {
    var basePath = props.basePath || "";
    var cases = window.BEFORE_AFTER_CASES || [];
    var [activeCaseIdx, setActiveCaseIdx] = React.useState(0);
    var [sliderPos, setSliderPos] = React.useState(50);
    var [isDragging, setIsDragging] = React.useState(false);

    var currentCase = cases[activeCaseIdx] || cases[0];

    var handleSliderMove = function(clientX, rect) {
      var x = clientX - rect.left;
      var pos = (x / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;
      setSliderPos(pos);
    };

    return e('section', { id: 'clinical-transformations', className: 'py-20 bg-gradient-to-b from-[#080b11] via-[#0d1424] to-[#080b11] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Interactive Clinical Before & After'),
          e('h2', { className: 'text-white' },
            'Visual Proof That Bypasses ',
            e('span', { className: 'gold-gradient-text' }, 'Patient Skepticism')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Drag the golden divider to experience how our on-location American cinema crews capture full surgical transformations and emotional life turnarounds.'
          )
        ),

        // Case selector tabs
        e('div', { className: 'flex flex-wrap items-center justify-center gap-2 mb-8' },
          cases.map(function(c, i) {
            var isSelected = i === activeCaseIdx;
            return e('button', {
              key: c.id,
              onClick: function() { setActiveCaseIdx(i); setSliderPos(50); },
              className: 'px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ' +
                (isSelected ?
                  'bg-yellow-500 text-black font-extrabold shadow-lg' :
                  'bg-slate-900 text-slate-400 hover:text-white border border-slate-800')
            },
              c.patientName.split(',')[0] + ' (' + c.procedure.split('(')[0].trim() + ')'
            );
          })
        ),

        // Slider Container
        e('div', { className: 'glass-card-premium p-6 md:p-10 max-w-4xl mx-auto gold-border-glow' },
          e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
            // Visual slider box (7 cols)
            e('div', { className: 'lg:col-span-7' },
              e('div', {
                className: 'relative aspect-[16/10] rounded-xl overflow-hidden select-none cursor-ew-resize border border-yellow-500/30 bg-black shadow-2xl',
                onMouseDown: function(ev) {
                  setIsDragging(true);
                  var rect = ev.currentTarget.getBoundingClientRect();
                  handleSliderMove(ev.clientX, rect);
                },
                onMouseMove: function(ev) {
                  if (isDragging) {
                    var rect = ev.currentTarget.getBoundingClientRect();
                    handleSliderMove(ev.clientX, rect);
                  }
                },
                onMouseUp: function() { setIsDragging(false); },
                onMouseLeave: function() { setIsDragging(false); },
                onTouchMove: function(ev) {
                  if (ev.touches.length > 0) {
                    var rect = ev.currentTarget.getBoundingClientRect();
                    handleSliderMove(ev.touches[0].clientX, rect);
                  }
                }
              },
                // After View (Background)
                e('div', { className: 'absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950 flex flex-col justify-between p-6 text-right' },
                  e('div', { className: 'inline-block self-end px-3 py-1 rounded bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-bold uppercase' },
                    'AFTER: Restored Surgical Masterwork'
                  ),
                  e('div', { className: 'space-y-1' },
                    e('div', { className: 'text-white font-bold text-base font-cinzel' }, 'Full Functional Restitution'),
                    e('div', { className: 'text-xs text-emerald-200/90' }, currentCase.afterImageNote)
                  )
                ),

                // Before View (Clipped on top)
                e('div', {
                  className: 'absolute inset-0 bg-gradient-to-br from-red-950/60 via-slate-950 to-slate-900 flex flex-col justify-between p-6 border-r-2 border-yellow-400 overflow-hidden',
                  style: { width: sliderPos + '%' }
                },
                  e('div', { className: 'inline-block self-start px-3 py-1 rounded bg-red-500/20 border border-red-500 text-red-300 text-xs font-bold uppercase whitespace-nowrap' },
                    'BEFORE: Clinical Breakdown'
                  ),
                  e('div', { className: 'space-y-1 whitespace-nowrap' },
                    e('div', { className: 'text-white font-bold text-base font-cinzel' }, 'Severe Chewing Impairment'),
                    e('div', { className: 'text-xs text-red-200/90' }, currentCase.beforeImageNote)
                  )
                ),

                // Drag Handle
                e('div', {
                  className: 'absolute top-0 bottom-0 w-1 bg-yellow-400 pointer-events-none flex items-center justify-center',
                  style: { left: sliderPos + '%' }
                },
                  e('div', { className: 'w-8 h-8 rounded-full bg-yellow-400 text-black font-extrabold text-xs flex items-center justify-center shadow-2xl border-2 border-slate-900' },
                    '↔'
                  )
                )
              ),
              e('div', { className: 'text-center text-[11px] text-slate-400 mt-2 italic' },
                '← Drag golden handle to reveal Before & After transformation →'
              )
            ),

            // Clinical Case Details (5 cols)
            e('div', { className: 'lg:col-span-5 space-y-4 text-left' },
              e('div', { className: 'flex items-center justify-between' },
                e('span', { className: 'badge-pill text-[10px]' }, currentCase.patientName),
                e('span', { className: 'text-sm font-extrabold text-emerald-400 font-mono' }, 'Case Value: ' + currentCase.caseValue)
              ),
              e('h3', { className: 'text-xl font-bold text-white font-cinzel' }, currentCase.procedure),
              e('div', { className: 'text-xs text-amber-300 font-semibold' }, currentCase.clinic),
              
              e('p', { className: 'text-xs text-slate-300 italic leading-relaxed p-3 rounded bg-slate-900 border border-slate-800' },
                '“' + currentCase.cinematicStory + '”'
              ),

              e('div', { className: 'space-y-1 text-xs' },
                e('div', { className: 'font-bold uppercase text-slate-400 text-[10px] tracking-wider' }, 'Surgical Protocol:'),
                currentCase.clinicalMilestones.map(function(m, idx) {
                  return e('div', { key: idx, className: 'flex items-start gap-1.5 text-slate-300 text-[11px]' },
                    e('span', { className: 'text-emerald-400' }, '•'),
                    e('span', null, m)
                  );
                })
              ),

              e('button', {
                onClick: function() {
                  if (window.openBookingModal) window.openBookingModal();
                  else window.location.href = basePath + 'strategy-session.html';
                },
                className: 'btn-gold text-xs py-3 w-full shadow-lg mt-2'
              }, 'Feature Your Clinical Cases with Manifest Media')
            )
          )
        )
      )
    );
  };
})();
