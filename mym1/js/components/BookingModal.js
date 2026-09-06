(function() {
  var e = React.createElement;

  window.BookingModal = function(props) {
    var basePath = props.basePath || "";
    var [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(function() {
      window.openBookingModal = function() {
        setIsOpen(true);
      };
      window.closeBookingModal = function() {
        setIsOpen(false);
      };
      return function() {
        window.openBookingModal = null;
        window.closeBookingModal = null;
      };
    }, []);

    if (!isOpen) return null;

    return e('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm' },
      e('div', { className: 'relative w-full max-w-xl' },
        e('button', {
          onClick: function() { setIsOpen(false); },
          className: 'absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-sm flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 shadow-md transition z-10'
        }, '✕'),
        e(window.LeadCaptureForm, { basePath: basePath })
      )
    );
  };
})();
