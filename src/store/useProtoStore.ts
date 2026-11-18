import { create } from 'zustand';

interface ProtoState {
  isDemoModalOpen: boolean;
  setDemoModalOpen: (open: boolean) => void;
}

export const useProtoStore = create<ProtoState>((set) => ({
  isDemoModalOpen: false,
  setDemoModalOpen: (open) => set({ isDemoModalOpen: open }),
}));
