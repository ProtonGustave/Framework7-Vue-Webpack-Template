<template>
    <f7-page :cached="false">
        <f7-navbar>
            <f7-nav-left>
                <f7-link back sliding></f7-link>
            </f7-nav-left>
            <f7-nav-center></f7-nav-center>
            <f7-nav-right>
                <f7-link></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <div class="content signup" inner>
            <h1 class="title">What's your first name? autofocus</h1>
            <div class="center-content">
                <f7-input type="text" id="first_name" placeholder="First name" v-model="first_name"
                          v-focus="focused"
                          :autofocus="focused"
                          :class="{'text-center' : !!first_name}"
                          @focus="handlerFocus(); focused = true" @blur="handleBlur(); focused = false"/>
            </div>
            <div class="bottom">
                <f7-button class="actions-modal-button" href="/signup_03/">NEXT</f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
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
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('border-bottom', '0vh solid transparent');
            }
        },
        data: function () {
            return {
                first_name: null,
                $$: Dom7,
                focused: true
            }
        }
    };
</script>