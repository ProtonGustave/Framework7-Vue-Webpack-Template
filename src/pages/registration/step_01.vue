<template>
    <f7-page>
        <f7-navbar title="" back-link="Back" sliding></f7-navbar>
        <div class="content signup" inner>
            <h1 class="title">Enter your age</h1>
            <div class="center-content">
                <f7-input type="number" pattern="\d*" id="age" placeholder="Your age"/>
                <mt-field label="number" placeholder="Input number" type="number" v-model="number"></mt-field>
            </div>
            <mt-picker :rotateEffect="true" :slots="slots" @change="onValuesChange" :visibleItemCount="6"></mt-picker>
            <f7-button class="actions-modal-button bottom" href="/signup_02/">NEXT</f7-button>
        </div>
    </f7-page>
</template>

<script>

    export default {
        methods:{
            onValuesChange: function (pickier, values) {

            }
        },
        data: function () {
            let ages = [];
            for(let i=1;i<100;i++){
                ages.push(i);
            }
            return {
                slots: [
                    {
                        values: ages,
                        defaultIndex: 18,
                        textAlign: 'left'
                    }
                ]
            }
        }
    }
</script>