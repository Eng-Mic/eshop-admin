import { create } from 'zustand';
import toast from 'react-hot-toast';
import { API_Request } from '../../utils/requestController';

const useImageUploadStore = create((set) => ({
    uploadedImageUrl: null,
    isImageUploaded: false,
    images: [],

    // Function to upload multiple images
    uploadImages: async (file) => {
        try {
            const maxSizeInBytes = 2 * 1024 * 1024; // 2MB accepted size
            if (!file) {
                toast.error("Image file cannot be found");
                return;
            }

            if (!file.type.startsWith("image/")) {
                toast.error("Invalid file type");
                return;
            }

            if (file.size > maxSizeInBytes) {
                toast.error("File size exceeds the allowed limit.");
                return;
            }
            const formData = new FormData();
            formData.append('image', file);

            console.log(formData);

            const { data } = await API_Request.post('/upload/newImagesUpload', formData);

            console.log(data);
            set({ images: [...state.images, data] }); // Update images array

            toast.success('Images uploaded successfully');
        } catch (error) {
            console.error('Error uploading images:', error);
            toast.error(error.response?.data?.message || 'Failed to upload images.');
        }
    },

    // Function to delete an uploaded image
    deleteImage: async (imageId) => {
        try {
            const response = await API_Request.delete(`/upload/deleteUploadedImage/${imageId}`, config);

            if (response.ok) {
                set({
                    images: state.images.filter((img) => img !== imageUrl), // Remove deleted image from images array
                });

                toast.success('Image deleted successfully');
            } else {
                toast.error('Failed to delete image');
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            toast.error('Failed to delete image');
        }
    },
}))

export default useImageUploadStore;
