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
            <h1 class="title">Please allow access</h1>
            <div class="vertical-center">
                <f7-button class="actions-modal-button" href="/map">
                    ENABLE LOCATION
                </f7-button>
            </div>
            <div class="bottom">
                <p class="privacy-licence center-content">
                    Your privacy is important. We use contacts to find friends on the app and location to find nearby schools to join
                </p>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {}
</script>