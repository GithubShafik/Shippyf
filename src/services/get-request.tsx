import axios from 'axios';
import MAIN_URL from './api-Config';

axios.defaults.baseURL = MAIN_URL

// PickUpLocation------------------------------------------------------------------
export const getPickUpLocation = async () => {
    try {
        const res = await axios.get('/PickUpLocation/getpickuplocation');
        return res?.data;
    } catch (error) {
        console.log('Error fetching location:', error);
        throw error;
    }
};

// DropLocation---------------------------------------------------------------------
export const getDropLocation = async () => {
    try {
        const res = await axios.get('/DropLocation/getdroplocation');
        return res?.data;
    } catch (error) {
        console.log('Error fetching location:', error);
        throw error;
    }
};
