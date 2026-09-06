// Global Application Initializer for Manifest Your Media
window.initManifestApp = function(config) {
  var depth = config.depth || 0;
  var activeVariant = config.variant || "master";
  var basePath = depth === 2 ? "../../" : (depth === 1 ? "../" : "./");

  // Inject Master SEO Schema LD+JSON
  if (window.SchemaGenerator && window.SchemaGenerator.injectMasterSchema) {
    window.SchemaGenerator.injectMasterSchema();
  }

  // Track page view event
  if (window.Analytics) {
    window.Analytics.trackEvent("page_view", {
      variant: activeVariant,
      path: window.location.pathname,
      title: document.title
    });
  }

  console.log("%c MANIFEST MEDIA BROKER GROUP %c Loaded Variant: " + activeVariant + " %c",
    "background: #0d121c; color: #D4AF37; font-weight: bold; padding: 4px 8px;",
    "background: #10B981; color: #000; font-weight: bold; padding: 4px 8px;",
    "background: transparent;"
  );
};
