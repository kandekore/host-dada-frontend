const siteStructure = [
    {
      title: "Home",
      url: "/",
      icon: "🏠",
      description: "Home page",
    },
    {
      title: "About Us",
      url: "/about-us",
      subItems: [
        { title: "Who We Are", url: "/about-us/who-we-are", icon: "👥", description: "Find out about us" },
        { title: "Our Values", url: "/about-us/our-values", icon: "💡", description: "Our core values" },
        { title: "Data Centers", url: "/about-us/data-centers", icon: "🏢", description: "Our global data centers" },
        { title: "Resellers", url: "/about-us/resellers", icon: "🤝", description: "Partner with us" },
        { title: "Affiliate Program", url: "/about-us/affiliate-program", icon: "💰", description: "Join our affiliate program" },
        { title: "Careers", url: "/about-us/careers", icon: "💼", description: "Work with us" },
      ],
    },
    {
      title: "Domains",
      url: "/domains",
          megaMenuDescription: 'From registration to transfer, find everything you need to manage your domain names with our powerful and easy-to-use tools.', // New property

      subItems: [
        { title: "Search & Register", url: "/domains/search-register", icon: "🔍", description: "Find and register domains" },
        { title: "Transfer", url: "/domains/transfer", icon: "🔄", description: "Transfer your domain" },
        { title: "Whois", url: "/domains/whois", icon: "📜", description: "Domain lookup" },
      ],
    },
    {
      title: "Hosting",
      url: "/hosting",
          megaMenuDescription: 'Explore our wide range of hosting solutions, from shared Linux hosting to powerful cloud applications, all with 99.9% uptime.', // New property

      subItems: [
        { title: "Linux Hosting", url: "/hosting/linux-hosting", icon: "🐧", description: "Linux based hosting" },
        { title: "WordPress Hosting", url: "/hosting/wordpress-hosting", icon: "📝", description: "Managed WordPress" },
        { title: "LiteSpeed Hosting", url: "/hosting/litespeed-hosting", icon: "⚡", description: "High-performance hosting" },
        { title: "Cloud App Hosting", url: "/hosting/cloud-app-hosting", icon: "☁️", description: "Cloud based hosting" },
        { title: "Transfer To us", url: "/hosting/transfer-to-us", icon: "➡️", description: "Transfer your hosting" },
      ],
    },
    {
      title: "Email Hosting",
      url: "/email-hosting",
          megaMenuDescription: 'Get professional, business-class email hosting with robust security features and support for your favorite clients.', // New property

      subItems: [
        { title: "IMAP/POP3 Email Hosting", url: "/email-hosting/imap-pop3", icon: "📧", description: "Reliable email hosting" },
        { title: "Microsoft 365", url: "/email-hosting/microsoft-365", icon: "🗂", description: "Microsoft 365 hosting" },
      ],
    },
    {
      title: "SSL",
      url: "/ssl",
      subItems: [
        { title: "Standard SSL (DV)", url: "/ssl/standard", icon: "🔐", description: "Domain Validated SSL" },
        { title: "Organisation Validation (OV)", url: "/ssl/ov", icon: "🏢", description: "Organisation Validated SSL" },
        { title: "Extended Validation (EV)", url: "/ssl/ev", icon: "✅", description: "Extended Validation SSL" },
        { title: "Wildcard", url: "/ssl/wildcard", icon: "⭐", description: "Wildcard SSL certificate" },
      ],
    },
    {
      title: "Websites",
      url: "/websites",
      subItems: [
        { title: "Hire a Developer", url: "/websites/hire-developer", icon: "👨‍💻", description: "Custom website development" },
        { title: "Weebly", url: "/websites/weebly", icon: "🛠", description: "Easy drag-and-drop website builder" },
        { title: "Stack Website Builder", url: "/websites/stack-website-builder", icon: "📐", description: "Build with Stack" },
        { title: "Sitejet builder", url: "/websites/sitejet-builder", icon: "💻", description: "Modern website builder" },
      ],
    },
    {
      title: "VPN",
      url: "/vpn",
      // No subItems for VPN—but it still appears in the main navigation
    },
  ];
  
  export default siteStructure;
  