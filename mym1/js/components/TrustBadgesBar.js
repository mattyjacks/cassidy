(function() {
  var e = React.createElement;

  window.TrustBadgesBar = function(props) {
    var basePath = props.basePath || "";

    var badges = [
      { name: "Veteran-Owned", subtitle: "Family Enterprise", file: "badge-veteran.svg" },
      { name: "ADA Compliant", subtitle: "Web & Clinic", file: "badge-ada.svg" },
      { name: "HIPAA Secure", subtitle: "Patient Privacy", file: "badge-hipaa.svg" },
      { name: "BBB Accredited", subtitle: "A+ Standards", file: "badge-bbb.svg" },
      { name: "100% American", subtitle: "Zero Outsourcing", file: "badge-american.svg" },
      { name: "90-Day Guarantee", subtitle: "Iron-Clad Protection", file: "badge-guarantee.svg" }
    ];

    return e('div', { className: 'w-full py-5 border-y border-slate-200 bg-slate-50/90' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'flex flex-wrap items-center justify-around gap-4 text-center' },
          badges.map(function(b, idx) {
            return e('div', {
              key: idx,
              className: 'flex items-center gap-3 px-3.5 py-2 rounded-lg bg-white border border-slate-200/90 shadow-sm hover:border-blue-500/40 transition'
            },
              e('img', {
                src: basePath + 'assets/svg/' + b.file,
                alt: b.name,
                className: 'w-9 h-9 object-contain'
              }),
              e('div', { className: 'text-left' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-slate-900' }, b.name),
                e('div', { className: 'text-[11px] text-slate-500 font-medium' }, b.subtitle)
              )
            );
          })
        )
      )
    );
  };
})();
