(function() {
  var e = React.createElement;

  window.DentalHygieneArchiveModal = function(props) {
    var basePath = props.basePath || "";
    var [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(function() {
      window.openDentalHygieneModal = function() { setIsOpen(true); };
      window.closeDentalHygieneModal = function() { setIsOpen(false); };
      return function() {
        window.openDentalHygieneModal = null;
        window.closeDentalHygieneModal = null;
      };
    }, []);

    if (!isOpen) return null;

    return e('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md' },
      e('div', { className: 'relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl text-left' },
        e('button', {
          onClick: function() { setIsOpen(false); },
          className: 'absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-200 hover:text-slate-900 transition'
        }, '✕'),

        e('div', { className: 'flex items-center gap-3' },
          e('div', { className: 'w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold' }, 'MCC'),
          e('div', null,
            e('h3', { className: 'text-xl font-newsreader text-slate-900 font-bold' }, 'Clinical Academic Recognition'),
            e('div', { className: 'text-xs text-blue-700 font-semibold' }, 'Mohave Community College Bullhead • Dental Hygiene Program')
          )
        ),

        e('div', { className: 'p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed' },
          e('p', null,
            'Academic records from Mohave Community College (MCC) Bullhead indicate that Cassidy Torrey was recognized for outstanding academic service and achievements specifically within the Dental Hygiene program, alongside peer Nora Prisciandaro.'
          ),
          e('p', null,
            'This formal clinical exposure provides unmatched insider fluency: Cassidy understands chairside ergonomics, operatory asepsis, surgical torque values, periodontal disease staging, and the visceral physiological cues of dental phobia. When you speak with Cassidy, you are speaking to an insider who respects your surgical craft.'
          )
        ),

        e('div', { className: 'grid grid-cols-2 gap-3 text-xs text-slate-600 font-mono pt-2' },
          e('div', { className: 'p-3 rounded-lg bg-slate-50 border border-slate-200' },
            e('strong', { className: 'text-blue-900 block mb-0.5' }, 'INSTITUTION:'),
            'Mohave Community College Bullhead'
          ),
          e('div', { className: 'p-3 rounded-lg bg-slate-50 border border-slate-200' },
            e('strong', { className: 'text-blue-900 block mb-0.5' }, 'HONORS RECOGNITION:'),
            'Outstanding Academic Service & Achievement'
          )
        ),

        e('div', { className: 'pt-2 flex justify-end' },
          e('button', {
            onClick: function() {
              setIsOpen(false);
              if (window.openBookingModal) window.openBookingModal();
            },
            className: 'btn-blue text-xs py-2.5 px-6 font-bold'
          }, 'Consult With Cassidy Torrey (Doctor-to-Insider)')
        )
      )
    );
  };
})();
