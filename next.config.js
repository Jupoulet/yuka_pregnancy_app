/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.openfoodfacts.org'],
  },
  eslint: {
    dirs: ['pages', 'components', 'domains']
  }
}
