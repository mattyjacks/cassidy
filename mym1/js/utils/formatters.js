window.Formatters = {
  currency: function(num) {
    if (isNaN(num)) return "$0";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  },
  number: function(num) {
    return new Intl.NumberFormat('en-US').format(num);
  },
  phone: function(str) {
    return "(603) 630-3944";
  }
};
