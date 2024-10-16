import axios from 'axios';

export const fetchCategories = async () => {
    try {
        const response = await axios.get('/data/categories.json');
        return response.data;
    } catch (error) {
        throw error;
    }
};

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
