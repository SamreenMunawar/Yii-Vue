import {createRouter, createWebHistory} from 'vue-router';
import BooksList from  './component/BookForm';
import BookItem from './component/BookItem';
import BookForm from './component/BookForm';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'books',
            path: '/',
            component: BooksList,
        },
        {
            name: 'book-form',
            path: '/book/edit/:bookId?',
            component: BookForm,
            props: true,
            alias: '/book/add'
        },
        {
            name: 'book-item',
            path: '/book/:bookId(\\d+)',
            component: BookItem,
            props: true
        },
    ],
});

export default router;