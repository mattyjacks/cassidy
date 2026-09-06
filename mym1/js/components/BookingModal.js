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

    return e('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm' },
      e('div', { className: 'relative w-full max-w-xl' },
        e('button', {
          onClick: function() { setIsOpen(false); },
          className: 'absolute -top-4 -right-4 w-9 h-9 rounded-full bg-slate-900 border border-yellow-500/50 text-yellow-400 font-bold text-sm flex items-center justify-center hover:bg-yellow-500 hover:text-black transition z-10'
        }, '✕'),
        e(window.LeadCaptureForm, { basePath: basePath })
      )
    );
  };
})();
