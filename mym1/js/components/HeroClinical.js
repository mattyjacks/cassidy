(function() {
  var e = React.createElement;

  window.HeroClinical = function(props) {
    var basePath = props.basePath || "";

    return e('section', { className: 'relative pt-16 pb-20 bg-gradient-to-b from-sky-50/40 via-white to-slate-50 border-b border-slate-200' },
      e('div', { className: 'container-custom relative z-10' },
        e('div', { className: 'max-w-4xl mx-auto text-center space-y-6' },
          e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-300 bg-sky-50 text-sky-800 text-xs font-semibold tracking-wide' },
            e('span', { className: 'w-2 h-2 rounded-full bg-sky-600' }),
            'Clinical Fluency • Mohave Community College Dental Hygiene Academic Honors'
          ),

          e('h1', { className: 'text-slate-950 tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold' },
            'Engineered by a ',
            e('span', { className: 'text-blue-700' }, 'Clinical Insider'),
            '. Built to Fill Surgical Chairs.'
          ),

          e('p', { className: 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed' },
            'Most marketing salespeople have never set foot inside an active operatory. Cassidy Torrey was recognized for outstanding academic service and achievement in the ',
            e('strong', { className: 'text-slate-900 font-semibold' }, 'Dental Hygiene program at MCC Bullhead'),
            '. He understands chairside ergonomics, procedural terminology, and what actually moves patients to accept five-figure surgical treatments.'
          ),

          // Clinical Credibility Card
          e('div', { className: 'p-6 sm:p-8 rounded-xl border border-slate-200 bg-white shadow-sm max-w-2xl mx-auto text-left flex flex-col sm:flex-row items-center gap-6' },
            e('img', {
              src: basePath + 'assets/svg/tooth-implant.svg',
              alt: 'Clinical Implant Precision',
              className: 'w-16 h-16 shrink-0'
            }),
            e('div', { className: 'space-y-1' },
              e('div', { className: 'text-slate-900 font-bold text-base' }, 'Verified Clinical Background: MCC Bullhead'),
              e('p', { className: 'text-xs text-slate-600 leading-relaxed' },
                '“We do not approach implant marketing as external generalists guessing about clinical care. We understand torque values, bone grafts, full-arch restorations, and the real psychological fears preventing patients from booking surgery.”'
              ),
              e('div', { className: 'text-xs text-blue-700 font-semibold pt-1' },
                'Academic Honors & Service • Dental Hygiene Program Cohort'
              )
            )
          ),

          // CTAs
          e('div', { className: 'pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5' },
            e('button', {
              onClick: function() {
                if (window.openBookingModal) window.openBookingModal();
                else window.location.href = basePath + 'strategy-session.html';
              },
              className: 'btn-blue w-full sm:w-auto text-sm px-8 py-3.5 shadow-sm'
            },
              e('span', null, 'Speak With Cassidy Torrey (Doctor-to-Insider)'),
              e('span', { className: 'text-xs opacity-80' }, '→')
            ),
            e('a', {
              href: basePath + 'about.html#dental-hygiene',
              className: 'btn-blue-outline w-full sm:w-auto text-sm px-6 py-3.5'
            }, 'Read Cassidy\'s Clinical Dossier')
          ),

          e('div', { className: 'pt-4 text-xs text-slate-500 font-medium' },
            'Strict HIPAA Compliance • ADA Patient Accessibility • Zero Script Clichés • (603) 630-3944'
          )
        )
      )
    );
  };
})();
