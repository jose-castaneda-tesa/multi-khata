import { defineStore } from 'pinia';
import { chuckService } from '@/services/chuck.service';

export const useChuckStore = defineStore('chuck', {
  state: () => ({
    joke: '',
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchJoke() {
      this.loading = true;
      this.error = null;

      try {
        const response = await chuckService.getRandomJoke();
        this.joke = response.data.value;
      } catch (err) {
        this.error = 'No se pudo obtener el chiste 😢';
      } finally {
        this.loading = false;
      }
    },
  },
});