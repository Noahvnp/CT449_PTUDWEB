import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/components/Login.vue";
import AddPost from "@/views/AddPost.vue";
import EditPost from "@/views/EditPost.vue";
import PostCard from '@/components/PostCard.vue';

const routes = [{
        path: "/",
        name: "post",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/add",
        name: "add-post",
        component: AddPost,
    },
    {
        path: "/post/:id",
        name: "detail-post",
        component: PostCard,
        props: true,
    },
    {
        path: "/post/edit/:id",
        name: "edit-post",
        component: EditPost,
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;