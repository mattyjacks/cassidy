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

    return e('section', { id: 'clinical-transformations', className: 'py-20 bg-white border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Interactive Clinical Before & After'),
          e('h2', { className: 'text-slate-950' },
            'Visual Proof That Bypasses ',
            e('span', { className: 'text-blue-700' }, 'Patient Skepticism')
          ),
          e('p', { className: 'text-slate-600 text-sm sm:text-base leading-relaxed' },
            'Drag the blue divider to experience how our on-location American cinema crews capture full surgical transformations and emotional life turnarounds.'
          )
        ),

        // Case selector tabs
        e('div', { className: 'flex flex-wrap items-center justify-center gap-2 mb-8' },
          cases.map(function(c, i) {
            var isSelected = i === activeCaseIdx;
            return e('button', {
              key: c.id,
              onClick: function() { setActiveCaseIdx(i); setSliderPos(50); },
              className: 'px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition ' +
                (isSelected ?
                  'bg-blue-800 text-white shadow-sm' :
                  'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200')
            },
              c.patientName.split(',')[0] + ' (' + c.procedure.split('(')[0].trim() + ')'
            );
          })
        ),

        // Slider Container
        e('div', { className: 'clean-card p-6 sm:p-10 max-w-4xl mx-auto border-slate-200 shadow-sm' },
          e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' },
            // Visual slider box (7 cols)
            e('div', { className: 'lg:col-span-7' },
              e('div', {
                className: 'relative aspect-[16/10] rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-300 bg-slate-100 shadow-inner',
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
                // After View (Background: Clean White/Blue)
                e('div', { className: 'absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-100 flex flex-col justify-between p-6 text-right' },
                  e('div', { className: 'inline-block self-end px-3 py-1 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase' },
                    'AFTER: Restored Surgical Case'
                  ),
                  e('div', { className: 'space-y-1' },
                    e('div', { className: 'text-slate-900 font-bold text-base' }, 'Full Functional Restitution'),
                    e('div', { className: 'text-xs text-slate-600' }, currentCase.afterImageNote)
                  )
                ),

                // Before View (Clipped on top: Subtle Gray/Warm)
                e('div', {
                  className: 'absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-amber-50/30 flex flex-col justify-between p-6 border-r-2 border-blue-600 overflow-hidden',
                  style: { width: sliderPos + '%' }
                },
                  e('div', { className: 'inline-block self-start px-3 py-1 rounded bg-red-50 border border-red-300 text-red-800 text-xs font-bold uppercase whitespace-nowrap' },
                    'BEFORE: Clinical Breakdown'
                  ),
                  e('div', { className: 'space-y-1 whitespace-nowrap' },
                    e('div', { className: 'text-slate-900 font-bold text-base' }, 'Chewing Impairment & Anxiety'),
                    e('div', { className: 'text-xs text-slate-600' }, currentCase.beforeImageNote)
                  )
                ),

                // Drag Handle
                e('div', {
                  className: 'absolute top-0 bottom-0 w-1 bg-blue-600 pointer-events-none flex items-center justify-center',
                  style: { left: sliderPos + '%' }
                },
                  e('div', { className: 'w-7 h-7 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white' },
                    '↔'
                  )
                )
              ),
              e('div', { className: 'text-center text-xs text-slate-500 mt-2.5 font-medium' },
                '← Drag divider horizontally to compare Before & After →'
              )
            ),

            // Clinical Case Details (5 cols)
            e('div', { className: 'lg:col-span-5 space-y-4 text-left' },
              e('div', { className: 'flex items-center justify-between' },
                e('span', { className: 'badge-pill text-[11px]' }, currentCase.patientName),
                e('span', { className: 'text-sm font-extrabold text-blue-800 font-sans' }, 'Case Value: ' + currentCase.caseValue)
              ),
              e('h3', { className: 'text-xl font-bold text-slate-900' }, currentCase.procedure),
              e('div', { className: 'text-xs text-blue-700 font-semibold' }, currentCase.clinic),
              
              e('blockquote', { className: 'text-xs text-slate-700 font-editorial italic leading-relaxed p-3.5 rounded-lg bg-slate-50 border border-slate-200' },
                '“' + currentCase.cinematicStory + '”'
              ),

              e('div', { className: 'space-y-1.5 text-xs' },
                e('div', { className: 'font-bold uppercase text-slate-500 text-[10px] tracking-wider' }, 'Surgical Milestones:'),
                currentCase.clinicalMilestones.map(function(m, idx) {
                  return e('div', { key: idx, className: 'flex items-start gap-1.5 text-slate-700 text-xs' },
                    e('span', { className: 'text-blue-700' }, '•'),
                    e('span', null, m)
                  );
                })
              ),

              e('button', {
                onClick: function() {
                  if (window.openBookingModal) window.openBookingModal();
                  else window.location.href = basePath + 'strategy-session.html';
                },
                className: 'btn-blue text-xs py-3 w-full shadow-sm mt-2'
              }, 'Feature Your Clinical Cases with Manifest Media')
            )
          )
        )
      )
    );
  };
})();
