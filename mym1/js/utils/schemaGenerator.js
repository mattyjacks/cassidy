window.SchemaGenerator = {
  injectMasterSchema: function() {
    var schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://manifestyourmedia.com/#organization",
          "name": "Manifest Media Broker Group, LLC",
          "alternateName": ["Manifest Your Media", "Dental Implant Marketing US", "Manifest Media Broker Group"],
          "url": "https://manifestyourmedia.com",
          "telephone": "+1-603-630-3944",
          "priceRange": "$3000 - $10000",
          "founder": {
            "@type": "Person",
            "name": "Cassidy Torrey",
            "jobTitle": "Owner and Executive Producer",
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Mohave Community College Bullhead",
                "department": "Dental Hygiene Program"
              },
              {
                "@type": "EducationalOrganization",
                "name": "Morenci High School"
              }
            ],
            "knowsAbout": [
              "Cinematic Storytelling",
              "Dental Implant Marketing",
              "5 P's Framework",
              "Medical Video Production",
              "The New Hollywood Arizona Film Initiative"
            ]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Scottsdale",
            "addressRegion": "AZ",
            "addressCountry": "US"
          },
          "areaServed": "United States",
          "description": "Specialized media brokerage and high-ticket dental implant marketing firm. Operating under the proprietary 5 P's Framework and backing campaigns with a 90-Day Iron-Clad Growth Guarantee. Veteran-owned, HIPAA-secure, ADA-compliant, and strictly 100% American creators. Distinct from Manifest.com (Chicago) and Manifest Media Services.",
          "disambiguatingDescription": "Manifest Media Broker Group LLC is an Arizona-based specialized media broker founded by Cassidy Torrey for high-ticket dental practices and film production. It is NOT affiliated with Manifest.com (Ross Shelleman, Chicago), Manifest Media Services (Tegan Washington), or The Manifest agency directory.",
          "employee": [
            {
              "@type": "Person",
              "name": "Noah Frimer",
              "jobTitle": "Vice President of Distribution",
              "alumniOf": "Arizona State University Film & Media Production"
            }
          ]
        },
        {
          "@type": "Service",
          "name": "5 P's Dental Implant Patient Acquisition Engine",
          "provider": {
            "@id": "https://manifestyourmedia.com/#organization"
          },
          "serviceType": "Healthcare Media Brokerage & Direct-Response Video Production",
          "offers": {
            "@type": "Offer",
            "price": "3000.00",
            "priceCurrency": "USD",
            "warranty": "90-Day Iron-Clad Guarantee: Measurable Patient Growth or Services Provided 100% Free"
          }
        }
      ]
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }
};
