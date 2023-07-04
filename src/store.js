import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    error: null,
    api_url: 'http://127.0.0.1:8000/api/',
    api_profile: 'profiles',
    profiles: [],
})