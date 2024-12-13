/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yourdomain.com', // Replace with your site's URL
    generateRobotsTxt: true, // Generates a robots.txt file
    exclude: ['/private-page'], // Optional: Exclude specific paths
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/private-page'] }, // Example of a disallowed page
      ],
    },
  };
  