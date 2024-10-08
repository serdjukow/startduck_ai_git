import { create } from "zustand"
import { persist } from "zustand/middleware"

const useThemeStore = create(
  persist(
    (set) => ({
      activeColor: null,
      activeImage: null,
      isDarkTheme: false,
      chatTabPaneKey: "chat",
      userChatOpen: false,
      setActiveColor: (color) => set({ activeColor: color }),
      setActiveImage: (image) => set({ activeImage: image }),
      resetTheme: () => set({ activeColor: null, activeImage: null }),
      toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
      setUserChatOpen: () =>
        set((state) => ({ userChatOpen: !state.userChatOpen })),
      resetTheme: () =>
        set({ activeColor: null, activeImage: null }),
      setChatTabPaneKey: (key) => set({ chatTabPaneKey: key }),
    }),

    {
      name: "theme-storage",
    }
  )
)

export default useThemeStore
