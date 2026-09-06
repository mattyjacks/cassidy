(function() {
  var e = React.createElement;

  window.HeroClinical = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#091524] via-[#070e17] to-[#07090e]' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          // Top pill
          e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/40 bg-sky-950/60 text-sky-300 text-xs font-semibold tracking-wider uppercase' },
            e('span', { className: 'w-2 h-2 rounded-full bg-sky-400' }),
            'Clinical Fluency • Mohave Community College Dental Hygiene Academic Honors'
          ),

          // Main Headline
          e('h1', { className: 'text-white tracking-tight leading-tight' },
            'Engineered by a ',
            e('span', { className: 'text-sky-400 font-bold' }, 'Clinical Insider'),
            '. Built to Fill High-Ticket Surgical Chairs.'
          ),

          // Subheadline
          e('p', { className: 'text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' },
            'Most marketing salespeople have never set foot in an active dental operatory. Cassidy Torrey was recognized for outstanding academic service and achievement in the ',
            e('strong', { className: 'text-amber-300' }, 'Dental Hygiene program at MCC Bullhead'),
            '. He understands chairside anxiety, implant terminology, and how real patients make five-figure surgical decisions.'
          ),

          // Clinical Credibility Card
          e('div', { className: 'p-6 rounded-xl border border-sky-500/30 bg-slate-900/80 max-w-2xl mx-auto text-left flex flex-col sm:flex-row items-center gap-6' },
            e('img', {
              src: basePath + 'assets/svg/tooth-implant.svg',
              alt: 'Clinical Implant Precision',
              className: 'w-20 h-20 shrink-0 drop-shadow'
            }),
            e('div', { className: 'space-y-1' },
              e('div', { className: 'text-sky-300 font-cinzel text-base font-bold' }, 'Verified Clinical Heritage: MCC Bullhead'),
              e('p', { className: 'text-xs text-slate-300 leading-relaxed' },
                '“We do not approach implant marketing as external copywriters guessing about clinical care. We understand torque values, bone grafts, full-arch restorations, and the real psychological phobias preventing patients from booking surgery.”'
              ),
              e('div', { className: 'text-[11px] text-amber-300 font-semibold' },
                'Academic Honors & Service • Dental Hygiene Program Cohort'
              )
            )
          ),

          // CTAs
          e('div', { className: 'pt-4 flex flex-col sm:flex-row items-center justify-center gap-4' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-gold w-full sm:w-auto text-sm px-8 py-4 shadow-lg'
            },
              e('span', null, 'Speak With Cassidy Torrey (Doctor-to-Insider)'),
              e('span', { className: 'text-xs opacity-90' }, '→')
            ),
            e('a', {
              href: basePath + 'about.html#dental-hygiene',
              className: 'btn-gold-outline w-full sm:w-auto text-sm px-6 py-4'
            }, 'Read Cassidy\'s Clinical Dossier')
          ),

          // Footer info
          e('div', { className: 'pt-6 text-xs text-slate-400 font-medium' },
            'Strict HIPAA Compliance • ADA Patient Accessibility • Zero Script Clichés • (603) 630-3944'
          )
        )
      )
    );
  };
})();
