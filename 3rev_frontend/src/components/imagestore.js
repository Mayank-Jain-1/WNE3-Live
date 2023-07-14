import { create } from 'zustand';

const useImageStore = create((set) => ({
  image: '', // Initial value of the image

  getImage: (newImage) => set({ image: newImage }),
}));

export default useImageStore;