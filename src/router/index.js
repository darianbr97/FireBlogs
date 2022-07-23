import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import CreatePost from "../views/CreatePost.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: "HOME"
            }
        },
        {
            path: "/blogs",
            name: "blogs",
            component: Blogs,
            meta: {
                title: "BLOGS"
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {
                title: "LOGIN"
            }
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
            meta: {
                title: "REGISTER"
            }
        },
        {
            path: "/forgot-password",
            name: "ForgotPassword",
            component: ForgotPassword,
            meta: {
                title: "Forgot Password"
            }
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            meta: {
                title: "Profile"
            }
        },
        {
            path: "/create-post",
            name: "CreatePost",
            component: CreatePost,
            meta: {
                title: "Create Post"
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | FireBlogs`;
    next();
}) 

export default router;
