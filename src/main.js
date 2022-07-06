import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { BIconPlusSquare, BIconDiagram3, BIconPersonCircle } from 'bootstrap-icons-vue';

const app = createApp(App)
app.component('BIconPlusSquare', BIconPlusSquare);
app.component('BIconDiagram3', BIconDiagram3);
app.component('BIconPersonCircle', BIconPersonCircle);
app.mount('#app')