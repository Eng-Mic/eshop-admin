import { create } from 'zustand';
import toast from 'react-hot-toast';
import { API_Request } from '../../utils/requestController';


// Utility functions for localStorage
const saveImagesToLocalStorage = (images) => {
    localStorage.setItem('uploadedImages', JSON.stringify(images));
};

const clearImagesFromLocalStorage = () => {
    localStorage.removeItem('uploadedImages');
};

const useImageUploadStore = create((set) => ({
    uploadedImageUrl: null,
    isImageUploaded: false,
    images: JSON.parse(localStorage.getItem('uploadedImages')) || [], // Initialize from localStorage
    loading: false, // New loading state

    // Function to upload multiple images
    uploadImages: async (acceptedFiles) => {
        // console.log(acceptedFiles);
        const toastId = toast.loading('Uploading images, please wait...');
        set({ loading: true }); // Set loading state to true
        try {
            const formData = new FormData();
            acceptedFiles.forEach(file => {
                formData.append('images', file);
            });
            // Iterate over the formData entries to log the appended files
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const { data }  = await API_Request.post('/upload/newImagesUpload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // console.log(data);
            set((state) => {
                const updatedImages = [...state.images, ...data.images];
                saveImagesToLocalStorage(updatedImages); // Save images to localStorage
                return { images: updatedImages, loading: false }; // Set loading state to false
            });

            toast.success('Images uploaded successfully');
        } 
        catch (error) {
            console.error('Error uploading images:', error);
            set({ loading: false }); // Set loading state to false on error
            toast.error(error.data?.message || 'Failed to upload images.');
        }
        finally {
            toast.dismiss(toastId); // Dismiss the loading toast
        }
    },

    // Function to clear images from state and localStorage
    clearImages: () => {
        set({ images: [] });
        clearImagesFromLocalStorage();
    },
}))

export default useImageUploadStore;
