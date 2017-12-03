<template>
    <f7-page>
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
            <h1 class="title">What's your first name?</h1>
            <div class="center-content">
                <f7-input type="text" id="first_name" placeholder="First name" :autofocus="focused" v-model="first_name"
                          :class="{'text-center' : firstNameEntered}"
                          @focus="handlerFocus()"/>
            </div>
            <div class="bottom">
                <f7-button class="actions-modal-button shadow" href="/signup_03/">NEXT</f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import { focus } from 'vue-focus';
    import $ from 'jquery';
    window.$ = $;

    export default {
        mounted: function () {
//            this.$data.$$('#age').focus();
            setTimeout(()=>{
                $('#first_name').focus().click();
            },0);
        },
        directives: { focus: focus },
        methods: {
            handlerFocus: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if(iOS)
                this.$data.$$('div.bottom').css('border-bottom', '40vh solid transparent');
                console.log(this.$data.$$);
                this.$data.focused = true;
            },
        },
        computed: {
            firstNameEntered: function () {
                return !!this.first_name;
            }
        },
        data: function () {
            return {
                first_name: null,
                focused: true,
                $$: Dom7,
            }
        }
    };
</script>