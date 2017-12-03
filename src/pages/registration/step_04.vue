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
            <h1 class="title">Your email</h1>
            <div class="center-content">
                <f7-input type="text" id="email" placeholder="name@mail.com" v-model="email" :class="{'text-center' : !!email}"
                          @focus="handlerFocus()" />
            </div>

            <div class="bottom">
                <f7-button class="actions-modal-button shadow" href="/signup_05/">NEXT</f7-button>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import { focus } from 'vue-focus';

    export default {
        directives: { focus: focus },
        mounted: function () {
            setTimeout(()=>{
                $('#email').focus().click();
            },0);
        },
        methods: {
            handlerFocus: function () {
                let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if(iOS)
                this.$data.$$('div.bottom').css('border-bottom', '40vh solid transparent');
                console.log(this.$data.$$);
                this.$data.focused = true;
            },
        },
        data: function () {
            return {
                focused: true,
                $$: Dom7,
                email: null,
            };
        }
    };
</script>