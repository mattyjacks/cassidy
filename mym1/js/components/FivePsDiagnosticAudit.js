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

    return e('section', { id: 'diagnostic-audit', className: 'py-20 bg-[#07090e] border-t border-slate-800' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'max-w-3xl mx-auto text-center space-y-4 mb-12' },
          e('div', { className: 'badge-pill' }, 'Interactive Practice Assessment'),
          e('h2', { className: 'text-white' },
            'The 60-Second ',
            e('span', { className: 'gold-gradient-text' }, '5 P\'s Clinical Audit')
          ),
          e('p', { className: 'text-slate-400 text-sm md:text-base leading-relaxed' },
            'Evaluate your practice\'s vulnerability to corporate DSO chains and discover your immediate surgical case growth potential.'
          )
        ),

        e('div', { className: 'glass-card-premium p-6 md:p-10 max-w-3xl mx-auto gold-border-glow' },
          !isCompleted ?
            // Quiz Step
            e('div', { className: 'space-y-6' },
              // Progress Bar
              e('div', { className: 'space-y-2' },
                e('div', { className: 'flex items-center justify-between text-xs text-amber-300 font-bold uppercase tracking-wider' },
                  e('span', null, 'Pillar 0' + (currentStep + 1) + ': ' + currentQ.pillar),
                  e('span', { className: 'text-slate-400 font-mono' }, 'Step ' + (currentStep + 1) + ' of ' + quiz.length)
                ),
                e('div', { className: 'w-full h-2 rounded-full bg-slate-800 overflow-hidden' },
                  e('div', {
                    className: 'h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-300',
                    style: { width: ((currentStep + 1) / quiz.length) * 100 + '%' }
                  })
                )
              ),

              // Question
              e('h3', { className: 'text-lg md:text-xl font-bold text-white font-cinzel leading-snug pt-2' },
                currentQ.question
              ),

              // Options
              e('div', { className: 'space-y-3 pt-2' },
                currentQ.options.map(function(opt, idx) {
                  return e('button', {
                    key: idx,
                    onClick: function() { handleSelect(opt.score); },
                    className: 'w-full p-4 rounded-xl text-left text-xs md:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-yellow-500/60 hover:bg-slate-800/80 hover:text-white transition flex items-start gap-3 group'
                  },
                    e('span', { className: 'w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-yellow-400 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition' },
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
                    className: 'text-xs text-slate-400 hover:text-yellow-400 font-medium'
                  }, '← Back to Previous Pillar')
                ) : null
            ) :
            // Results Display
            e('div', { className: 'space-y-6 text-center py-4' },
              e('div', { className: 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider', style: { borderColor: result.color, color: result.color, backgroundColor: result.color + '15' } },
                'Audit Complete: ' + result.tier
              ),

              e('div', { className: 'space-y-2' },
                e('div', { className: 'text-5xl md:text-6xl font-extrabold font-mono', style: { color: result.color } },
                  calculateTotalScore() + ' / 100'
                ),
                e('div', { className: 'text-xs uppercase tracking-widest text-slate-400 font-bold' },
                  'Practice Marketing Competency Score'
                )
              ),

              e('div', { className: 'p-6 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-3' },
                e('div', { className: 'text-xs uppercase font-bold text-white tracking-wider' }, 'Diagnostic Analysis:'),
                e('p', { className: 'text-xs md:text-sm text-slate-300 leading-relaxed' }, result.summary),
                e('div', { className: 'p-3 rounded bg-yellow-950/20 border border-yellow-500/30 text-xs text-amber-200 leading-relaxed' },
                  e('strong', { className: 'text-yellow-400 block mb-1' }, 'Recommended Tactical Directive:'),
                  result.recommendation
                )
              ),

              e('div', { className: 'flex flex-col sm:flex-row items-center justify-center gap-4 pt-2' },
                e('button', {
                  onClick: function() {
                    if (window.openBookingModal) window.openBookingModal();
                    else window.location.href = basePath + 'strategy-session.html';
                  },
                  className: 'btn-gold w-full sm:w-auto text-xs py-3.5 px-8 shadow-xl'
                }, 'Review Diagnostic With Cassidy Torrey (Free 30-Min Call)'),
                e('button', {
                  onClick: resetQuiz,
                  className: 'text-xs text-slate-400 hover:text-white underline'
                }, 'Retake Audit')
              )
            )
        )
      )
    );
  };
})();
