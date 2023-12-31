import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const WorkflowApi = () =>{
    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getSchedule = () => {
        return axiosInstance.get(`${baseUrl}/schedule`);
    }
    const createSchedule = (data) =>{
        return axiosInstance.post(`${baseUrl}/schedule`,data)
    }

    return { getSchedule,createSchedule }
}