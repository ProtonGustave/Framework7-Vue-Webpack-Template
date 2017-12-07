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
            <h1 class="title">Enter your age</h1>
            <div class="center-content">
                <f7-input type="number" id="age" placeholder="Your age" v-model="age"
                          :autofocus="true"
                          :class="{'text-center' : !!age}"
                          @focus="handlerFocus()"/>
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
    export default {
        mounted: function () {
            setTimeout(() => {
                $('#age').focus().click();
            }, 100);
        },
        methods: {
            handlerFocus: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('padding-bottom', '40vh solid transparent');
            },
        },
        data: function () {
            return {
                age: null,
                $$: Dom7,
            }
        }
    };
</script>