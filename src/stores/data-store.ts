import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userRole: 'SELLER' as string, 
    userId: 0, 
  }),
  actions: {
    login(isAuthenticated: boolean, role:string, id: number) {
      this.isAuthenticated = isAuthenticated;
      this.setUserRole(role); 
      this.setUserId(id); 
    },
    logout() {
      this.isAuthenticated = false;
      this.userRole = 'GUEST'; 
      this.userId = 0; 
    },
    setUserRole(role: string) {
      this.userRole = role;
    },
    setUserId(id: number) {
      this.userId = id;
    },
  },
});
