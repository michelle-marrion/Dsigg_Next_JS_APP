const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/home',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
