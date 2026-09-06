(function() {
  var e = React.createElement;

  window.LeadCaptureForm = function(props) {
    var basePath = props.basePath || "";
    var [submitted, setSubmitted] = React.useState(false);
    var [formData, setFormData] = React.useState({
      doctorName: "",
      practiceName: "",
      email: "",
      phone: "",
      cityState: "",
      budget: "$3,000 - $5,000/mo",
      chairs: "4-6 Chairs"
    });

    var handleChange = function(field, val) {
      setFormData(function(prev) {
        var copy = Object.assign({}, prev);
        copy[field] = val;
        return copy;
      });
    };

    var handleSubmit = function(evt) {
      evt.preventDefault();
      if (window.Analytics) {
        window.Analytics.trackConversion("lead_form", formData);
      }
      setSubmitted(true);
    };

    return e('div', { className: 'bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 max-w-xl mx-auto' },
      submitted ?
        e('div', { className: 'text-center space-y-4 py-8' },
          e('div', { className: 'w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-700 flex items-center justify-center text-3xl mx-auto' }, '✓'),
          e('h3', { className: 'text-2xl font-newsreader text-slate-900 font-bold' }, 'Consultation Request Confirmed'),
          e('p', { className: 'text-sm text-slate-600 leading-relaxed' },
            'Thank you, ',
            e('strong', { className: 'text-blue-900' }, formData.doctorName || 'Doctor'),
            '. Cassidy Torrey or Vice President Noah Frimer will review your practice market dynamics and contact you within 4 business hours to lock in your strategy session.'
          ),
          e('div', { className: 'p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600' },
            'Need urgent scheduling? Call Cassidy\'s direct line now: ',
            e('a', { href: 'tel:6036303944', className: 'text-blue-700 font-bold hover:underline' }, '(603) 630-3944')
          )
        ) :
        e('form', { onSubmit: handleSubmit, className: 'space-y-4 text-left' },
          e('div', { className: 'text-center space-y-1 mb-6' },
            e('span', { className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200' }, 'Limited Southwest & National Availability'),
            e('h3', { className: 'text-xl md:text-2xl font-newsreader text-slate-900 font-bold' }, 'Claim Free 30-Min Strategy Call'),
            e('p', { className: 'text-xs text-slate-600' },
              'Comprehensive practice audit, local DSO market analysis, and ROI forecast.'
            )
          ),

          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'Doctor Name *'),
              e('input', {
                type: 'text',
                required: true,
                placeholder: 'Dr. John Doe',
                value: formData.doctorName,
                onChange: function(ev) { handleChange('doctorName', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              })
            ),
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'Practice Name *'),
              e('input', {
                type: 'text',
                required: true,
                placeholder: 'Apex Restorative Dentistry',
                value: formData.practiceName,
                onChange: function(ev) { handleChange('practiceName', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              })
            )
          ),

          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'Direct Phone Number *'),
              e('input', {
                type: 'tel',
                required: true,
                placeholder: '(555) 000-0000',
                value: formData.phone,
                onChange: function(ev) { handleChange('phone', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              })
            ),
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'Work Email *'),
              e('input', {
                type: 'email',
                required: true,
                placeholder: 'doctor@practice.com',
                value: formData.email,
                onChange: function(ev) { handleChange('email', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              })
            )
          ),

          e('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'City & State *'),
              e('input', {
                type: 'text',
                required: true,
                placeholder: 'Phoenix, AZ',
                value: formData.cityState,
                onChange: function(ev) { handleChange('cityState', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              })
            ),
            e('div', null,
              e('label', { className: 'block text-xs font-bold text-slate-700 uppercase mb-1' }, 'Monthly Growth Budget'),
              e('select', {
                value: formData.budget,
                onChange: function(ev) { handleChange('budget', ev.target.value); },
                className: 'w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none'
              },
                e('option', null, '$3,000 - $5,000/mo'),
                e('option', null, '$5,000 - $10,000/mo'),
                e('option', null, '$10,000+/mo (Full Market Dominance)')
              )
            )
          ),

          e('div', { className: 'pt-2' },
            e('button', {
              type: 'submit',
              className: 'btn-blue w-full text-xs py-3.5 shadow-sm font-bold'
            }, 'Confirm 30-Minute Practice Audit & Strategy Call')
          ),

          e('div', { className: 'text-center text-[11px] text-slate-500 space-y-1' },
            e('div', null, '🛡️ Backed by the 90-Day Iron-Clad Guarantee: Patient Growth Or We Work Free'),
            e('div', null, '🔒 HIPAA Compliant • 100% Confidential • Zero High-Pressure Sales')
          )
        )
    );
  };
})();
