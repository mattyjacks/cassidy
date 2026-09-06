window.Analytics = {
  trackEvent: function(eventName, properties) {
    var payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      properties: properties || {}
    };
    try {
      var log = JSON.parse(sessionStorage.getItem('manifest_events') || '[]');
      log.push(payload);
      sessionStorage.setItem('manifest_events', JSON.stringify(log));
    } catch(e) {}
    console.log("[Manifest Analytics]", eventName, properties);
  },
  trackConversion: function(type, details) {
    this.trackEvent("conversion_" + type, details);
  }
};
