(function() {
  var e = React.createElement;

  window.TrustBadgesBar = function(props) {
    var basePath = props.basePath || "";

    var badges = [
      { name: "Veteran-Owned", subtitle: "Family Business", file: "badge-veteran.svg" },
      { name: "ADA Compliant", subtitle: "Digital & Clinical", file: "badge-ada.svg" },
      { name: "HIPAA Secure", subtitle: "Patient Privacy", file: "badge-hipaa.svg" },
      { name: "BBB Accredited", subtitle: "A+ Standards", file: "badge-bbb.svg" },
      { name: "100% American", subtitle: "Zero Outsourcing", file: "badge-american.svg" },
      { name: "90-Day Guarantee", subtitle: "Iron-Clad Protection", file: "badge-guarantee.svg" }
    ];

    return e('div', { className: 'w-full py-6 border-y border-yellow-600/20 bg-slate-950/80 backdrop-blur' },
      e('div', { className: 'container-custom' },
        e('div', { className: 'flex flex-wrap items-center justify-around gap-6 text-center' },
          badges.map(function(b, idx) {
            return e('div', { key: idx, className: 'flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 transition' },
              e('img', {
                src: basePath + 'assets/svg/' + b.file,
                alt: b.name,
                className: 'w-10 h-10 object-contain drop-shadow'
              }),
              e('div', { className: 'text-left' },
                e('div', { className: 'text-xs font-bold uppercase tracking-wider text-amber-200' }, b.name),
                e('div', { className: 'text-[10px] text-slate-400 font-medium' }, b.subtitle)
              )
            );
          })
        )
      )
    );
  };
})();
