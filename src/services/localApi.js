import axios from 'axios';
import categories from '../../public/data/categories.js';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export function fetchCategories() {
    return categories; 
}
  

export const savePreferences = async (preferences) => {
    try {
        const response = await axios.post('/api/preferences', preferences);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPreferences = async () => {
    try {
        const response = await axios.get('/api/preferences');
        return response.data;
    } catch (error) {
        throw error;
    }
};
