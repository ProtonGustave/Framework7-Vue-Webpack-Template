<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <!--<f7-statusbar></f7-statusbar>-->

        <!--&lt;!&ndash; Left Panel &ndash;&gt;-->
        <!--<f7-panel left reveal layout="dark">-->
            <!--<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">-->
                <!--&lt;!&ndash;<f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>&ndash;&gt;-->
                <!--<f7-pages>-->
                    <!--<f7-page>-->
                        <!--<f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>-->
                        <!--<f7-block inner>-->
                            <!--<p>Left panel content goes here</p>-->
                        <!--</f7-block>-->
                        <!--<f7-block-title>Load page in panel</f7-block-title>-->
                        <!--<f7-list>-->
                            <!--<f7-list-item link="/about/" title="About"></f7-list-item>-->
                            <!--<f7-list-item link="/form/" title="Form"></f7-list-item>-->
                        <!--</f7-list>-->
                        <!--<f7-block-title>Load page in main view</f7-block-title>-->
                        <!--<f7-list>-->
                            <!--<f7-list-item link="/about/" title="About" link-view="#main-view"-->
                                          <!--link-close-panel></f7-list-item>-->
                            <!--<f7-list-item link="/form/" title="Form" link-view="#main-view"-->
                                          <!--link-close-panel></f7-list-item>-->
                            <!--<f7-list-item link="/signup_01/" title="Signup" link-view="#main-view"-->
                                          <!--link-close-panel></f7-list-item>-->
                        <!--</f7-list>-->
                    <!--</f7-page>-->
                <!--</f7-pages>-->
            <!--</f7-view>-->
        <!--</f7-panel>-->

        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" main>
                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <div id="intro"></div>
                        <f7-button id="get-started" class="actions-modal-button" href="/signup_01/">GET STERTERD</f7-button>
                    </f7-page>
                    <!--<step v-if="isGuest"></step>-->
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Axios from 'axios'

    export default {
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