import { createRouter, createWebHistory } from "vue-router";
import BooksApp from "../components/BooksApp.vue";
import BookDetail from "../components/BookDetail.vue";

const routes = [
  {
    path: "/", // Ana sayfa rotası
    name: "home",
    component: BooksApp, // Ana sayfada BooksApp bileşeni gösterilecek
  },
  {
    path: "/books/:id", 
    name: "book-detail",
    component: BookDetail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
