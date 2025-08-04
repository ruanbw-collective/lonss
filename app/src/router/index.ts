import { createRouter, createWebHashHistory } from "vue-router";
import { base } from "./base";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...base
    ]
})

export default router;
