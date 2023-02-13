import { MOBILE_DEVICE_WIDTH, TABLET_DEVICE_WIDTH, deviceType } from '@constants/constants';
import { DeviceTypeInterface } from '@interface/interface';
import { useState, useEffect } from 'react';

const useResponsiveness = (): DeviceTypeInterface => {
  const [width, setWidth] = useState(0);
  const [device, setDevice] = useState<string>(deviceType.desktop);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    if (width <= MOBILE_DEVICE_WIDTH) {
      setDevice(deviceType.mobile);
    } else if (width <= TABLET_DEVICE_WIDTH) {
      setDevice(deviceType.tablet);
    } else {
      setDevice(deviceType.desktop);
    }
  }, [width]);

  return { width, device };
};

export default useResponsiveness;
