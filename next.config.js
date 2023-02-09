module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s3-ap-southeast-1.amazonaws.com'],
  },
  crossOrigin: 'anonymous',
  async rewrites() {
    return [
      {
        source: '/priceChanges',
        destination: 'https://api.pintu.co.id/v2/trade/price-changes',
      },
      {
        source: '/supportedCurrencies',
        destination: 'https://api.pintu.co.id/v2/wallet/supportedCurrencies',
      },
    ];
  },
};
