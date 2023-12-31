import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const SettingApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const postSetting = (data) => {
        return axiosInstance.post(`${baseUrl}/setting/save`, data);
    }
    const getSetting = () =>{
        return axiosInstance.get(`${baseUrl}/user/setting`)
    }
    return { postSetting,getSetting }
}