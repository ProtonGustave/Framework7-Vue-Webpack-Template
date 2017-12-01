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
                <f7-input type="text" id="first_name" placeholder="First name" :autofocus="focused"
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
            $('#first_name').trigger('click')
        },
        directives: { focus: focus },
        methods: {
            handlerFocus: function () {
                this.$data.$$('div.bottom').css('border-bottom', '35vh solid transparent');
                console.log(this.$data.$$);
                this.$data.focused = true;
            },
        },
        data: function () {
            return {
                focused: true,
                $$: Dom7,
            }
        }
    };
</script>