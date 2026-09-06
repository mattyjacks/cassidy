(function() {
  var e = React.createElement;

  window.InteractiveCalendarScheduler = function(props) {
    var basePath = props.basePath || "";
    var cal = window.CALENDAR_DATA || {};
    var dates = cal.availableDates || [];
    var times = cal.availableTimes || [];
    var timezones = cal.timezones || [];
    var focusAreas = cal.focusAreas || [];

    var [selectedDate, setSelectedDate] = React.useState(0);
    var [selectedTime, setSelectedTime] = React.useState(0);
    var [selectedTz, setSelectedTz] = React.useState(0);
    var [selectedFocus, setSelectedFocus] = React.useState(0);
    var [step, setStep] = React.useState(1); // 1 = select time/date, 2 = contact details, 3 = confirmed
    var [formData, setFormData] = React.useState({
      docName: "",
      practiceName: "",
      phone: "",
      email: ""
    });

    var handleConfirm = function(evt) {
      evt.preventDefault();
      if (window.Analytics) {
        window.Analytics.trackConversion("calendar_booking", {
          date: dates[selectedDate].dateStr,
          time: times[selectedTime],
          timezone: timezones[selectedTz],
          focus: focusAreas[selectedFocus],
          doctor: formData
        });
      }
      setStep(3);
    };

    return e('div', { className: 'glass-card-premium p-6 md:p-10 max-w-3xl mx-auto gold-border-glow text-left' },
      step === 1 ?
        // Step 1: Select Slot
        e('div', { className: 'space-y-6' },
          e('div', { className: 'text-center space-y-1 pb-4 border-b border-slate-800' },
            e('span', { className: 'badge-pill text-[10px]' }, 'Live Calendar Dispatch'),
            e('h3', { className: 'text-2xl font-cinzel text-white font-bold' }, 'Select Your Private Consultation Window'),
            e('p', { className: 'text-xs text-slate-400' }, '30 minutes 1-on-1 with Cassidy Torrey or VP of Distribution Noah Frimer.')
          ),

          // Timezone picker
          e('div', { className: 'space-y-1.5' },
            e('label', { className: 'text-xs font-bold uppercase text-slate-400' }, 'Your Preferred Timezone:'),
            e('select', {
              value: selectedTz,
              onChange: function(ev) { setSelectedTz(Number(ev.target.value)); },
              className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
            },
              timezones.map(function(tz, i) {
                return e('option', { key: i, value: i }, tz);
              })
            )
          ),

          // Date Picker
          e('div', { className: 'space-y-2' },
            e('label', { className: 'text-xs font-bold uppercase text-slate-400' }, '1. Select Consultation Day:'),
            e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5' },
              dates.map(function(d, idx) {
                var isSelected = idx === selectedDate;
                return e('button', {
                  key: idx,
                  onClick: function() { setSelectedDate(idx); },
                  className: 'p-3 rounded-xl border text-left transition ' +
                    (isSelected ?
                      'bg-yellow-500/20 border-yellow-400 text-white shadow-lg' :
                      'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700')
                },
                  e('div', { className: 'font-bold text-xs text-white' }, d.dateStr),
                  e('div', { className: 'text-[11px] text-amber-300/90' }, d.formatted),
                  e('div', { className: 'text-[10px] text-slate-500 mt-1 font-mono' }, d.status)
                );
              })
            )
          ),

          // Time Picker
          e('div', { className: 'space-y-2' },
            e('label', { className: 'text-xs font-bold uppercase text-slate-400' }, '2. Select Strategy Window:'),
            e('div', { className: 'flex flex-wrap gap-2' },
              times.map(function(t, idx) {
                var isSelected = idx === selectedTime;
                return e('button', {
                  key: idx,
                  onClick: function() { setSelectedTime(idx); },
                  className: 'px-4 py-2 rounded-lg text-xs font-mono font-bold transition ' +
                    (isSelected ?
                      'bg-yellow-500 text-black shadow' :
                      'bg-slate-900 border border-slate-800 text-slate-300 hover:border-yellow-500/50')
                }, t);
              })
            )
          ),

          // Focus Area
          e('div', { className: 'space-y-1.5' },
            e('label', { className: 'text-xs font-bold uppercase text-slate-400' }, '3. Clinical Growth Priority:'),
            e('select', {
              value: selectedFocus,
              onChange: function(ev) { setSelectedFocus(Number(ev.target.value)); },
              className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
            },
              focusAreas.map(function(f, i) {
                return e('option', { key: i, value: i }, f);
              })
            )
          ),

          e('div', { className: 'pt-2' },
            e('button', {
              onClick: function() { setStep(2); },
              className: 'btn-gold w-full text-xs py-3.5 shadow-xl'
            }, 'Continue to Practice Confirmation →')
          )
        ) :
      step === 2 ?
        // Step 2: Practice info
        e('form', { onSubmit: handleConfirm, className: 'space-y-4' },
          e('div', { className: 'text-center space-y-1 pb-3 border-b border-slate-800' },
            e('div', { className: 'text-xs text-amber-300 font-mono font-bold' },
              'RESERVED: ' + dates[selectedDate].dateStr + ' @ ' + times[selectedTime]
            ),
            e('h3', { className: 'text-xl font-cinzel text-white font-bold' }, 'Confirm Practice Contact Information'),
            e('p', { className: 'text-xs text-slate-400' }, 'All communications are 100% confidential and HIPAA-secure.')
          ),

          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            e('div', null,
              e('label', { className: 'block text-[11px] font-bold text-slate-300 uppercase mb-1' }, 'Doctor Name *'),
              e('input', {
                type: 'text',
                required: true,
                placeholder: 'Dr. Cassidy Torrey',
                value: formData.docName,
                onChange: function(ev) {
                  var c = Object.assign({}, formData, { docName: ev.target.value });
                  setFormData(c);
                },
                className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
              })
            ),
            e('div', null,
              e('label', { className: 'block text-[11px] font-bold text-slate-300 uppercase mb-1' }, 'Practice / Surgery Center *'),
              e('input', {
                type: 'text',
                required: true,
                placeholder: 'Apex Restorative Arts',
                value: formData.practiceName,
                onChange: function(ev) {
                  var c = Object.assign({}, formData, { practiceName: ev.target.value });
                  setFormData(c);
                },
                className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
              })
            )
          ),

          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            e('div', null,
              e('label', { className: 'block text-[11px] font-bold text-slate-300 uppercase mb-1' }, 'Direct Cell / Operatory Phone *'),
              e('input', {
                type: 'tel',
                required: true,
                placeholder: '(603) 630-3944',
                value: formData.phone,
                onChange: function(ev) {
                  var c = Object.assign({}, formData, { phone: ev.target.value });
                  setFormData(c);
                },
                className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
              })
            ),
            e('div', null,
              e('label', { className: 'block text-[11px] font-bold text-slate-300 uppercase mb-1' }, 'Professional Email *'),
              e('input', {
                type: 'email',
                required: true,
                placeholder: 'doctor@dentalimplant.com',
                value: formData.email,
                onChange: function(ev) {
                  var c = Object.assign({}, formData, { email: ev.target.value });
                  setFormData(c);
                },
                className: 'w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-white focus:border-yellow-500 focus:outline-none'
              })
            )
          ),

          e('div', { className: 'pt-2 flex items-center justify-between gap-4' },
            e('button', {
              type: 'button',
              onClick: function() { setStep(1); },
              className: 'text-xs text-slate-400 hover:text-white underline'
            }, '← Modify Date / Time'),
            e('button', {
              type: 'submit',
              className: 'btn-gold text-xs py-3 px-6 shadow-xl'
            }, 'Lock In Guaranteed Strategy Call')
          )
        ) :
        // Step 3: Confirmed
        e('div', { className: 'text-center space-y-4 py-6' },
          e('div', { className: 'w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center text-3xl mx-auto' }, '✓'),
          e('h3', { className: 'text-2xl font-cinzel text-white' }, 'Consultation Successfully Locked In'),
          e('p', { className: 'text-sm text-slate-300 leading-relaxed max-w-md mx-auto' },
            'Your 1-on-1 strategy session is confirmed for ',
            e('strong', { className: 'text-amber-300' }, dates[selectedDate].dateStr + ' @ ' + times[selectedTime]),
            '. Cassidy Torrey’s executive team has locked your spot on our Scottsdale calendar.'
          ),
          e('div', { className: 'p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto' },
            'Need to speak right now? Call Cassidy\'s direct line: ',
            e('a', { href: 'tel:6036303944', className: 'text-yellow-400 font-bold hover:underline' }, '(603) 630-3944')
          )
        )
    );
  };
})();
