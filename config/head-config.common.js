/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    { rel: 'stylesheet', sizes: '57x57', href: '/assets/app.css' },
    { rel: 'stylesheet', sizes: '57x57', href: '/assets/icons.css' }
  ],
  meta: [
    // Name of web application (only should be used if the website is used as an app)
    { name: 'application-name', content: 'ngx-datatable' },
    // Short description of the page (limit to 150 characters)
    { name: 'description', content: 'Angular2 datatable for handling large and complex datasets in table format' },
    // Short description of your site's subject
    { name: 'subject', content: 'Angular2 Datatable' },
    // Very short (10 words or less) description. Primarily for academic papers
    { name: 'abstract', content: 'Angular2 Datatable' },
    // Crawling: All Search Engines
    { name: 'robots', content: 'index,follow,noodp' },
    // Crawling: Google Specific
    { name: 'googlebot', content: 'index,follow' },
    // Scaling
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },

    // IE
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { 'http-equiv': 'cleartype', content: 'on' },

    // Add to Home Screen: iOS
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'Swimlane' },


    // Add to Home Screen: Android
    { name: 'mobile-web-app-capable', content: 'yes' }
  ]
};
