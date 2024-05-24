import { create } from "zustand";
import toast from 'react-hot-toast';
import { API_Request } from "../../utils/requestController";

const useCategoryStore = create((set) => ({
    categories: [],
    selectedCategory: null,

    createCategory: async(categoryData) => {
        try {
            const { data } = await API_Request.post('/category/createCategory', categoryData, /*config*/);
        
            set((state) => ({
                categories: [...state.categories, data]
            }))

            toast.success('Category created successfully');
        } catch (error) {
            console.error('Error creating product category:', error);
            toast.error(error.response?.data?.message || 'Category Creation Failed.');
        }
    }
    
}))

export default useCategoryStore