(function() {
  var e = React.createElement;

  window.FivePsDiagnosticAudit = function(props) {
    var basePath = props.basePath || "";
    var quiz = window.DIAGNOSTIC_QUIZ || [];

    var [currentStep, setCurrentStep] = React.useState(0);
    var [answers, setAnswers] = React.useState({});
    var [isCompleted, setIsCompleted] = React.useState(false);

    var currentQ = quiz[currentStep] || quiz[0];

    var handleSelect = function(score) {
      var copy = Object.assign({}, answers);
      copy[currentStep] = score;
      setAnswers(copy);

      if (currentStep < quiz.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsCompleted(true);
        if (window.Analytics) {
          window.Analytics.trackConversion("diagnostic_completed", { answers: copy });
        }
      }
    };

    var calculateTotalScore = function() {
      var total = 0;
      for (var key in answers) {
        total += answers[key];
      }
      return total;
    };

    var resetQuiz = function() {
      setAnswers({});
      setCurrentStep(0);
      setIsCompleted(false);
    };

    var result = isCompleted ? window.getDiagnosticResult(calculateTotalScore()) : null;

    return e('section', { id: 'diagnostic-audit', className: 'py-20 bg-[#f8fafc] border-t border-slate-200' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Interactive Practice Assessment'),
          e('h2', { className: 'text-slate-950' },
            'The 60-Second ',
            e('span', { className: 'text-blue-700' }, '5 P\'s Clinical Audit')
          ),
          e('p', { className: 'text-slate-600 text-sm sm:text-base leading-relaxed' },
            'Evaluate your practice\'s vulnerability to corporate DSO chains and discover your immediate surgical case growth potential.'
          )
        ),

        e('div', { className: 'clean-card p-6 sm:p-10 max-w-3xl mx-auto border-slate-200 shadow-sm' },
          !isCompleted ?
            // Quiz Step
            e('div', { className: 'space-y-6 text-left' },
              // Progress Bar
              e('div', { className: 'space-y-2' },
                e('div', { className: 'flex items-center justify-between text-xs text-slate-700 font-bold uppercase tracking-wider' },
                  e('span', { className: 'text-blue-700' }, 'Pillar 0' + (currentStep + 1) + ': ' + currentQ.pillar),
                  e('span', { className: 'text-slate-400 font-mono' }, 'Step ' + (currentStep + 1) + ' of ' + quiz.length)
                ),
                e('div', { className: 'w-full h-2 rounded-full bg-slate-100 overflow-hidden' },
                  e('div', {
                    className: 'h-full bg-blue-700 transition-all duration-300',
                    style: { width: ((currentStep + 1) / quiz.length) * 100 + '%' }
                  })
                )
              ),

              // Question
              e('h3', { className: 'text-lg sm:text-xl font-bold text-slate-950 leading-snug pt-2' },
                currentQ.question
              ),

              // Options
              e('div', { className: 'space-y-3 pt-2' },
                currentQ.options.map(function(opt, idx) {
                  return e('button', {
                    key: idx,
                    onClick: function() { handleSelect(opt.score); },
                    className: 'w-full p-4 rounded-xl text-left text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 hover:border-blue-600 hover:bg-blue-50/40 hover:text-slate-950 transition flex items-start gap-3.5 group'
                  },
                    e('span', { className: 'w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition' },
                      String.fromCharCode(65 + idx)
                    ),
                    e('span', { className: 'leading-relaxed' }, opt.text)
                  );
                })
              ),

              currentStep > 0 ?
                e('div', { className: 'pt-2' },
                  e('button', {
                    onClick: function() { setCurrentStep(currentStep - 1); },
                    className: 'text-xs text-slate-500 hover:text-blue-700 font-semibold'
                  }, '← Back to Previous Question')
                ) : null
            ) :
            // Results Display
            e('div', { className: 'space-y-6 text-center py-4' },
              e('div', { className: 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider', style: { borderColor: result.color, color: result.color, backgroundColor: result.color + '10' } },
                'Audit Complete: ' + result.tier
              ),

              e('div', { className: 'space-y-1' },
                e('div', { className: 'text-5xl font-extrabold font-sans', style: { color: result.color } },
                  calculateTotalScore() + ' / 100'
                ),
                e('div', { className: 'text-xs uppercase tracking-widest text-slate-500 font-bold' },
                  'Practice Marketing Competency Score'
                )
              ),

              e('div', { className: 'p-6 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3' },
                e('div', { className: 'text-xs uppercase font-bold text-slate-900 tracking-wider' }, 'Diagnostic Analysis:'),
                e('p', { className: 'text-xs sm:text-sm text-slate-700 leading-relaxed' }, result.summary),
                e('div', { className: 'p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-800 leading-relaxed' },
                  e('strong', { className: 'text-blue-900 block mb-1' }, 'Recommended Tactical Directive:'),
                  result.recommendation
                )
              ),

              e('div', { className: 'flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2' },
                e('button', {
                  onClick: function() {
                    if (window.openBookingModal) window.openBookingModal();
                    else window.location.href = basePath + 'strategy-session.html';
                  },
                  className: 'btn-blue w-full sm:w-auto text-xs py-3.5 px-8 shadow-sm'
                }, 'Review Diagnostic With Cassidy Torrey (Free 30-Min Call)'),
                e('button', {
                  onClick: resetQuiz,
                  className: 'text-xs text-slate-500 hover:text-slate-900 underline'
                }, 'Retake Assessment')
              )
            )
        )
      )
    );
  };
})();
