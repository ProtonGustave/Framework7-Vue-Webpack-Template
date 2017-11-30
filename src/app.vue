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
                            <f7-list-item link="/signup_01/" title="Signup" link-view="#main-view"
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
                <f7-navbar id="header">
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
                    <step v-if="isGuest"></step>
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Axios from 'axios'
    import step from './pages/registration/step_01.vue'

    export default {
        components: {step},
        data: function () {
            return {
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