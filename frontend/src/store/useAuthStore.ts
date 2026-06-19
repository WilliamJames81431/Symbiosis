import { create } from 'zustand';

export type Role = 'Admin' | 'HR' | 'Employee';

interface AuthState {
  userRole: Role;
  setRole: (role: Role) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userRole: 'Admin', // Default for prototype
  setRole: (role) => set({ userRole: role }),
}));
