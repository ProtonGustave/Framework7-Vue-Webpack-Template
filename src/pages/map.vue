<template>
    <f7-page>
        <!-- iOS Theme Navbar -->
        <f7-navbar id="header">
            <f7-nav-left class="open-panel">
                <div id="menu-button" class="invisible"></div>
            </f7-nav-left>
            <f7-nav-center sliding></f7-nav-center>
            <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="left" style="visibility: hidden;"></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <div class="content" inner>
            <div class="item-content">
                <div class="item-inner search-box-container shadow">
                    <div class="item-input" id="search-box">
                        <span id="dot"><i class="fa fa-circle"></i></span>
                        <input type="text" placeholder="Where to ?" v-model="address">
                    </div>
                </div>
            </div>
            <div id="map">
                <googlemaps-map
                        :center.sync="center"
                        :zoom="17"
                        style="width: 100%; height: 100%"
                        :options="{disableDefaultUI: true}"
                        ref="map"
                        @idle="onIdle"
                >
                    <!--<googlemaps-user-position :position="userMarker.position"-->
                    <!--:icon="userMarker.icon"-->
                    <!--:radius="1"-->
                    <!--:key="1">-->
                    <!--</googlemaps-user-position>-->
                    <googlemaps-marker :position="userMarker.position"
                                       :icon="userMarker.icon"
                                       :key="1">
                    </googlemaps-marker>
                    <googlemaps-marker v-for="(marker, index) in markers" :position="marker.position"
                                       :icon="marker.icon"
                                       :key="index">
                    </googlemaps-marker>

                </googlemaps-map>
            </div>
            <div id="pin"></div>
            <f7-fab id="to-location-btn" class="shadow" @click="toLocation">
            </f7-fab>
            <div id="delivery">
                <div id="estimate" class="shadow">
                    <div id="time"><span>
                                <p id="timeVal">20</p>
                                <p id="timeUnit">min</p>
                            </span></div>
                    <p>delivery</p>
                </div>
            </div>
            <div>
                <f7-button id="get-button" class="shadow" @click="getHigh"></f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import _ from 'lodash';
    import Axios from 'axios'

    export default {
        created: async function () {
            this.generateDeelersAround(this.$data.center);
            this.$data.userMarker.position = await this.getUserPosition();
            this.$data.center = this.$data.userMarker.position;
            if (this.$data.isGuest) {
                app.$f7Router.framework7.mainView.router.loadPage('/signup_01/');
            }
        },
        methods: {
            toLocation: async function () {
                console.log(this.$data.userMarker.position.lat, this.$data.userMarker.position.lng);
                this.$refs.map.panTo(this.$data.userMarker.position);
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
            onIdle: function (component) {
                this.updateCenter(component.$_map.center);
            },
            generateDeelersAround: async function (position) {
                this.$data.markers = this.$data.markers.concat(this.generateDeelersAddresses(15, position));
            },
            generateDeelersAddresses: function (number, nearby) {
                let res = [];
                let distance = 0.003;

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
                this.$data.markers = [];
                let addresses = await Axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        key: 'AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw',
                        latlng: newCenter.lat() + ',' + newCenter.lng()
                    }
                });
                this.generateDeelersAround({lat: newCenter.lat(), lng: newCenter.lng()});
                this.$data.address = _.at(addresses, 'data.results[0].formatted_address');
            }, 0),
            whatEffect: function () {
                let returned = this.$data.framework7.actions([
                    {
                        text: 'What effect would you like to get?',
                        label: true,
                    },
                    {
                        text: 'Get Hight',
                    },
                    {
                        text: 'Relax & Pain Relif'
                    },
                    {
                        text: 'Cancel',
                        color: 'red'
                    },
                ]);

            },
            getHigh: function () {
                let returned = this.$data.framework7.actions([
                    {
                        text: 'What is your budget?',
                        label: true,
                    },
                    {
                        text: '$10',
                    },
                    {
                        text: '$20'
                    },
                    {
                        text: '$50'
                    },
                    {
                        text: '$100 & up'
                    },
                    {
                        text: 'Cancel',
                        color: 'red'
                    },
                ]);
                this.$data.$$(returned).on('click', function (event) {
                    console.log(event.target.innerHTML);
                    console.log(this);
                    this.whatEffect();

                }.bind(this));
            },
        }
        ,
        data: function () {
            return {
                framework7: new Framework7(),
                $$: Dom7,
                isGuest: true,
                step: 1,
                center: {lat: -34.397, lng: 150.644},
                address: 'Where to ?',
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
    ;
</script>