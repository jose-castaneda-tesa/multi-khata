import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: 'Multi Khata',
    counter: 0
  }),

  actions: {
    increment() {
      this.counter++
    },

    reset() {
      this.counter = 0
    }
  }
})
