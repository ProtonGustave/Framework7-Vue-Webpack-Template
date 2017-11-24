<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Left Panel -->
        <f7-panel left reveal layout="dark">
            <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
                <!--<f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>-->
                <f7-pages>
                    <f7-page>
                        <f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
                        <f7-block inner>
                            <p>Left panel content goes here</p>
                        </f7-block>
                        <f7-block-title>Load page in panel</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                        </f7-list>
                        <f7-block-title>Load page in main view</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                            <f7-list-item link="/form/" title="Form" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>

        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios" id="header">
                    <f7-nav-left class="open-panel">
                        <div id="menu-button" class="invisible"></div>
                    </f7-nav-left>
                    <f7-nav-center sliding></f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="left" style="visibility: hidden;"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <div class="item-content shadow">
                            <div class="item-inner">
                                <div class="item-input" id="search-box">
                                    <span id="dot"><i class="fa fa-circle"></i></span>
                                    <input type="text" placeholder="Where to ?" v-model="address">
                                </div>
                            </div>
                        </div>
                        <div id="map">
                            <gmap-map
                                    :center="center"
                                    :zoom="17"
                                    style="width: 100%; height: 100%"
                                    :options="{disableDefaultUI: true}"
                                    ref="example"
                                    @center_changed="updateCenter"
                            >
                                <gmap-marker :position="userMarker.position"
                                             :icon="userMarker.icon"
                                             :key="1">
                                </gmap-marker>
                                <gmap-marker v-for="(marker, index) in markers" :position="marker.position"
                                             :icon="marker.icon"
                                             :key="index">
                                </gmap-marker>

                            </gmap-map>
                        </div>
                        <f7-fab id="to-location-btn" class="shadow" @click="toLocation">
                        </f7-fab>
                        <div id="delivery">
                            <div id="estimate"></div>
                            <div id="time"><span>
                                <p id="timeVal">20</p>
                                <p id="timeUnit">min</p>
                            </span></div>
                            <p>delivery</p>
                        </div>
                        <f7-button id="get-button" class="shadow" @click="getVisible = true"></f7-button>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>

        <!-- Popup -->
        <f7-popup id="popup">
            <f7-view navbar-fixed>
                <f7-pages>
                    <f7-page>
                        <f7-navbar title="Popup">
                            <f7-nav-right>
                                <f7-link close-popup>Close</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-block>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>

        <!-- Login Screen -->
        <f7-login-screen id="login-screen">
            <f7-view>
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>Login</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Username</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Password</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button title="Sign In" close-login-screen></f7-list-button>
                            <f7-list-label>
                                <p>Click Sign In to close Login Screen</p>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-login-screen>
        <f7-popup :opened="getVisible">
            <p>Popup content goes here </p><!-- -->
            <a @click="getVisible = false">Close</a><!-- -->
        </f7-popup>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Axios from 'axios'

    export default {
        created: function () {
            this.generateDeelersAround(this.$data.center);
            _.defer(this.toLocation);
        },
        methods: {
            toLocation: function () {
                try {
                    this.getUserPosition().then((position) => {
                        this.$refs.example.panTo(position);
                        this.$data.userMarker.position.lat = position.lat;
                        this.$data.userMarker.position.lng = position.lng;
                    });
                } catch (err) {
                    alert('Browser doesn\'t support Geolocation');
                }
            },
            getUserPosition: function () {
                return new Promise((resolve, reject) => {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            var pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            resolve(pos);
                        }, function () {

                            console.error(arguments);
                            //handleLocationError(true, infoWindow, map.getCenter());
                        });
                    } else {
                        console.error('Browser doesn\'t support Geolocation');
                        // Browser doesn't support Geolocation
                        //handleLocationError(false, infoWindow, map.getCenter());
                    }
                });
            },
            generateDeelersAround: async function (position) {
                this.$data.markers = this.$data.markers.concat(this.generateDeelersAddresses(15, this.$data.center));
            },
            generateDeelersAddresses: function (number, nearby) {
                let res = [];
                let distance = 0.005;
                for (let i = 0; i < number; i++) {
                    let address = {position: {}};
                    address.position.lat = _.random(nearby.lat - distance, nearby.lat + distance);
                    address.position.lng = _.random(nearby.lng - distance, nearby.lng + distance);
                    address.icon = this.$data.image;
                    res.push(address);
                }

                return res;
            },
            updateCenter: _.debounce(async function (newCenter) {
                this.$data.center.lat = newCenter.lat();
                this.$data.center.lng = newCenter.lng();
                this.$data.markers = [];
                let addresses = await Axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        key: 'AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw',
                        latlng: newCenter.lat() + ',' + newCenter.lng()
                    }
                });
                this.generateDeelersAround(newCenter);
                this.$data.address = _.at(addresses, 'data.results[0].formatted_address');
            }, 500),
        },
        data: function () {
            return {
                center: {lat: -34.397, lng: 150.644},
                address: 'Where to ?',
                getVisible: false,
                userMarker: {
                    position: {lat: -34.397, lng: 150.644},
                    icon: {
                        url: '/static/user_position_marker.png',
                        size: {width: 468, height: 468},
                        scaledSize: {width: 234, height: 234},
                        origin: {x: 0, y: 0},
                        anchor: {x: 117, y: 117}
                    },
                },
                markers: [],
                image: {
                    url: '/static/dealers_marker.png',
                    size: {width: 321, height: 321},
                    scaledSize: {width: 100, height: 100},
                    origin: {x: 0, y: 0},
                    anchor: {x: 16, y: 32}
                },
            }
        }
    }
</script>