import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

// Mount function to start the app


const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el)
}


// If in DEV and isolation. call mount immediately

if(process.env.NODE_ENV  === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}


/// We are running through container,
/// and we shoyld export the mount function

export { mount } 
