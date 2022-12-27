import create from 'zustand'

interface LmaoState {
  isFullScreen: boolean;
  toggleFullScreen: () => void
}

export const useLmaoStore = create<LmaoState>()((set) => ({
  isFullScreen: false,
  toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen  })),
}))