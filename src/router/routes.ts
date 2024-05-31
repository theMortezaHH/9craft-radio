import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/Pages/HomePage.vue"
// import PageName from "@/pages/NotFound.vue"
// import NotFound from "@/pages/NotFound.vue"

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    // {
    //     path: "/aPath",
    //     component: PageName,
    //     children: [
    //         {
    //             path: "/aPath/anotherPath",
    //             component: ChildPageName,
    //         },
    //     ],
    // },
    // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
