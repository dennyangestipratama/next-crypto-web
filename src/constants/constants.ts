const PRICE_INTERVAL = 2_000; // 2,000ms === 2 second;
const CURRENCY_INTERVAL = 20_000; // 20,000ms === 20 second;

const REVALIDATE_INTERVAL = 60 * 60 * 1; // Revalidate in an hour;
const ERROR_REVALIDATE_INTERVAL = 20; // Revalidate in 20 second;

const MOBILE_DEVICE_WIDTH = 640;
const TABLET_DEVICE_WIDTH = 768;

const deviceType = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};

export {
  PRICE_INTERVAL,
  CURRENCY_INTERVAL,
  REVALIDATE_INTERVAL,
  ERROR_REVALIDATE_INTERVAL,
  MOBILE_DEVICE_WIDTH,
  TABLET_DEVICE_WIDTH,
  deviceType,
};
