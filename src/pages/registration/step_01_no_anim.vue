<template>
    <f7-page :cached="false">
        <f7-navbar>
            <f7-nav-left>
                <f7-link back></f7-link>
            </f7-nav-left>
            <f7-nav-center></f7-nav-center>
            <f7-nav-right>
                <f7-link></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <div class="content signup" inner>
            <h1 class="title">Enter your age</h1>
            <div class="center-content">
                <f7-input type="number" id="age" placeholder="Your age" v-model="age"
                          v-focus="focused"
                          :autofocus="focused"
                          :class="{'text-center' : !!age}"
                          @focus="handlerFocus(); focused = true" @blur="handleBlur(); focused = false"/>
            </div>
            <div class="bottom">
                <p class="privacy-licence center-content">
                    By entering your age and taping next button you agree with ours <a>Terms of Service</a> and <a>Privacy Policy</a>
                </p>
                <f7-button class="actions-modal-button" href="/signup_02/">NEXT</f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import $ from 'jquery'
    window.$ = $;
    import {focus} from 'vue-focus';

    export default {
        directives: {focus: focus},
        methods: {
            handlerFocus: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('border-bottom', '40vh solid transparent');
            },
            handleBlur: function () {
                this.$data.focused = false;
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('border-bottom', '0vh solid transparent');
            }
        },
        data: function () {
            return {
                age: null,
                $$: Dom7,
                focused: true,
            }
        }
    };
</script>