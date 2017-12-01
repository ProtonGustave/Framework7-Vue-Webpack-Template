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
                <f7-input type="text" :autofocus="true" id="first_name" placeholder="First name"/>
            </div>
            <f7-button class="actions-modal-button bottom" href="/signup_03/">NEXT</f7-button>
        </div>
    </f7-page>
</template>

<script>
    export default {}
</script>