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
import Axios from 'axios'

import style from './css/style.styl';
import interactjs from 'interactjs';

window.Axios = Axios;

window.getMinScale = function getMinScale(number) {
    let res = (number.toString().match(/\.[0-9]*/))[0];
    res = res.replace('.', '');
    console.log('getMinScale', res.length);
    return (1 / Math.pow(10, res.length - 1)).toFixed(res.length - 1);
}

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

window.VueGoogleMaps = VueGoogleMaps;

Vue.use(VueGoogleMaps, {
    load: {
        apiKey: 'AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw',
        libraries: ['places'],
    },
})
window.Vue = Vue;

// Init App
window.app = new Vue({
    el: '#app',
    template: '<app/>',
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