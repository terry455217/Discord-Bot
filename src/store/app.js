//整個程式-公有store
import { defineStore } from "pinia"

export const useAppStore = defineStore('app', {
    state: () => ({
        client: null,
        commandsActionMAP: null,
    }),
    getters: {},
    actions: {},
    })