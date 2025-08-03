import { create } from 'zustand';

type FormData = {
  name: string;
  email: string;
  phone: string;
  position: string;
  description: string;
  setField: (key: keyof Omit<FormData, 'setField'>, value: string) => void;
  reset: () => void;
};

export const useFormStore = create<FormData>((set) => ({
  name: '',
  email: '',
  phone: '',
  position: '',
  description: '',
  setField: (key, value) => set((state) => ({ ...state, [key]: value })),
  reset: () =>
    set({
      name: '',
      email: '',
      phone: '',
      position: '',
      description: '',
    }),
}));
