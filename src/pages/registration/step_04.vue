<template>
    <f7-page @page:afteranimation="afterAnimation">
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
            <h1 class="title">Your email</h1>
            <div class="center-content">
                <f7-input type="text" id="email" placeholder="name@mail.com"
                          v-model="email" :class="{'text-center' : !!email}"
                          @focus="handlerFocus()" @blur="handleBlur()"/>
            </div>

            <div class="bottom">
                <f7-button class="actions-modal-button" href="/signup_05/">NEXT</f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {
        methods: {
            afterAnimation: function () {
                this.$router.loadPage({
                    url: '/signup_04_no_anim/', pushState: false, animatePages: false,
                    ignoreCache: true,
                    reload: true
                })
            },
            handlerFocus: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('border-bottom', '40vh solid transparent');
                this.$data.focused = true;
            },
            handleBlur: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (iOS)
                    this.$data.$$('div.bottom').css('border-bottom', '0vh solid transparent');
            }
        },
        data: function () {
            return {
                $$: Dom7,
                email: null,
            };
        }
    };
</script>