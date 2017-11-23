// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

import * as VueGoogleMaps from 'vue2-google-maps'

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw'
});

window.googleMapsClient = googleMapsClient;

// Init F7 Vue Plugin
Vue.use(Framework7Vue);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    },
});

window.Vue = Vue;

// Init App
window.app = new Vue({
    el: '#app',
    template: '<app/>',
    mounted:function () {
        console.log('created', this.$children[0].toLocation());
    },
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: Routes,
    },
    // Register App Component
    components: {
        app: App
    }
});

