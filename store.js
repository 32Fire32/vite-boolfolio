import { reactive } from "vue";

export const store = reactive({
  projects: [],
  types: [],
  api_url: import.meta.env.VITE_BACKEND_URL,
});
