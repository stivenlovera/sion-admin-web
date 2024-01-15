import { browserName, osName, browserVersion, isMobile, MobileView } from 'react-device-detect';
interface getDataDevicePros {
    browserName: string;
    browserVersion: string;
    osName: string;
    mobile: boolean;
}
export const getDataDevice = (): getDataDevicePros => {
    let device: getDataDevicePros = {
        browserName: browserName,
        browserVersion: osName,
        osName: browserVersion,
        mobile: isMobile
    }
    return device;
}