<template>
    <f7-page>
        <f7-navbar title="" back-link="Back" sliding></f7-navbar>
        <div class="content signup" inner>
            <h1 class="title">Enter your age</h1>
            <div class="center-content">
                <f7-input type="number" pattern="\d*" id="age" placeholder="Your age"/>
            </div>
            <!--<picker :data="data" v-model='year3' @on-change='change3'></picker>-->
            <f7-button class="actions-modal-button bottom" href="/signup_02/">NEXT</f7-button>
        </div>
    </f7-page>
</template>

<script>
    export default {
        methods: {
            change3: function () {
                console.log(arguments)
            }
        },
        data: function () {
            let ages = [];
            for (let i = 1; i < 100; i++) {
                ages.push(i);
            }
            return {
                year3: [],
                data: [{
                    name: '中国',
                    value: 'china',
                    parent: 0
                }, {
                    name: '美国',
                    value: 'USA',
                    parent: 0
                }, {
                    name: '广东',
                    value: 'china001',
                    parent: 'china'
                }, {
                    name: '广西',
                    value: 'china002',
                    parent: 'china'
                }, {
                    name: '美国001',
                    value: 'usa001',
                    parent: 'USA'
                }, {
                    name: '美国002',
                    value: 'usa002',
                    parent: 'USA'
                }, {
                    name: '广州',
                    value: 'gz',
                    parent: 'china001'
                }, {
                    name: '深圳',
                    value: 'sz',
                    parent: 'china001'
                }, {
                    name: '广西001',
                    value: 'gx001',
                    parent: 'china002'
                }, {
                    name: '广西002',
                    value: 'gx002',
                    parent: 'china002'
                }, {
                    name: '美国001_001',
                    value: '0003',
                    parent: 'usa001'
                }, {
                    name: '美国001_002',
                    value: '0004',
                    parent: 'usa001'
                }, {
                    name: '美国002_001',
                    value: '0005',
                    parent: 'usa002'
                }, {
                    name: '美国002_002',
                    value: '0006',
                    parent: 'usa002'
                }]
            }
        }
    }
</script>