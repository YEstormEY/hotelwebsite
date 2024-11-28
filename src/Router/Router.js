import { createRouter, createWebHistory} from 'vue-router'

// Import the components
import HotelPage from "@/components/HotelPage.vue";
import Hotel from "@/components/Hotel.vue";

// Define the routes
const routes = [
    { path: '/', redirect: '/Hotels' }, // Default route
    { path: '/Hotels', component: HotelPage },
    {
        path: '/Hotels/:id',
        name: 'hotel',
        // Pass `id` as a prop to the `Hotel` component to get the right hotel
        props: route => ({ id: parseInt(route.params.id) }), // Pass `id` as a prop
        component: Hotel,
    },
];


// Create the router instance and pass the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes,
    })

export default router
