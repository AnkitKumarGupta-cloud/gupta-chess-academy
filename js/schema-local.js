/* ── LOCAL BUSINESS SCHEMA ── */
(function () {
  var schemas = [

    /* ── MAIN ORGANIZATION ── */
    {
      "@context": "https://schema.org",
      "@type": "SportsOrganization",
      "name": "Gupta Chess Academy",
      "alternateName": "GCA",
      "url": "https://guptachessacademy.com",
      "logo": "https://guptachessacademy.com/favicon-192.png",
      "image": "https://guptachessacademy.com/images/hero-showcase-top.jpg",
      "description": "Gupta Chess Academy offers expert chess coaching for all ages and skill levels — from absolute beginners to tournament players. Online and offline classes available.",
      "foundingDate": "2020",
      "founder": [
        { "@type": "Person", "name": "Minu Gupta" },
        { "@type": "Person", "name": "Ankit" }
      ],
      "sameAs": [
        "https://www.youtube.com/@GuptaChessAcademy",
        "https://www.facebook.com/GuptaChessAcademy",
        "https://www.instagram.com/guptachessacademy"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-86608-13472",
        "contactType": "customer service",
        "email": "chessmasterycoach@gmail.com",
        "availableLanguage": ["English", "Hindi"]
      }
    },

    /* ── BRANCH 1: BANGALORE ── */
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Gupta Chess Academy — Bangalore",
      "image": "https://guptachessacademy.com/images/hero-showcase-top.jpg",
      "url": "https://guptachessacademy.com",
      "telephone": "+91-86608-13472",
      "email": "chessmasterycoach@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Splendid Skylines, Singasandra, Beside Teatree Hospital",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560068",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.8728,
        "longitude": 77.6333
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "hasMap": "https://maps.google.com/?q=Gupta+Chess+Academy+Singasandra+Bangalore",
      "servesCuisine": "Chess Coaching",
      "@id": "https://guptachessacademy.com/#bangalore",
      "sameAs": "https://guptachessacademy.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      }
    },

    /* ── BRANCH 2: MUGHALSARAI ── */
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Gupta Chess Academy — Mughalsarai",
      "image": "https://guptachessacademy.com/images/hero-showcase-top.jpg",
      "url": "https://guptachessacademy.com",
      "telephone": "+91-86608-13472",
      "email": "chessmasterycoach@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lot No. 2, Pani Tanki Road",
        "addressLocality": "Mughalsarai",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "232101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2833,
        "longitude": 83.1167
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "hasMap": "https://maps.google.com/?q=Pani+Tanki+Road+Mughalsarai+Chandauli+Uttar+Pradesh",
      "@id": "https://guptachessacademy.com/#mughalsarai",
      "sameAs": "https://guptachessacademy.com"
    },

    /* ── EDUCATION/COURSE OFFERING ── */
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Gupta Chess Academy",
      "url": "https://guptachessacademy.com",
      "description": "Chess coaching academy offering beginner to advanced courses, tournament preparation, and 1-on-1 coaching for students of all ages.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Chess Courses",
        "itemListElement": [
          { "@type": "Course", "name": "Beginner Foundation", "description": "Perfect for ages 6 and above with no prior chess experience." },
          { "@type": "Course", "name": "Intermediate Mastery", "description": "Strategy, tactics & opening repertoire development." },
          { "@type": "Course", "name": "Advanced Pro & Rated", "description": "Grandmaster techniques & engine analysis for rated players ELO 1200+." },
          { "@type": "Course", "name": "Tournament 1-on-1", "description": "Fully personalised 1-on-1 coaching for serious tournament aspirants." }
        ]
      }
    }

  ];

  schemas.forEach(function(schema) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  });
})();
