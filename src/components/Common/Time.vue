<template>
    <div id="rumtime" :style="style">
        <date-picker v-model="timestr" :limit="limit" :type="type" ref="time"></date-picker>
    </div>
</template>

<script>
    import myDatepicker from '../Thirds/datetime.vue'
    export default {
        data() {
            return {
                style: {}
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'date'
            },
            limit: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            
        },
        computed: {
            timestr: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input',val)
                }
            }
        },
        watch: {
            timestr(val) {
                this.$emit('on-change',val)
            }
        },
        components: {
            'date-picker': myDatepicker
        },
        mounted() {
            this.style = {
                width: this.$refs.time.$el.offsetHeight+'px',
                height: this.$refs.time.$el.offsetWidth+'px'
            }
        }
    }
</script>

<style>
    #rumtime {
        display: inline-block;
        overflow: hidden;
    }
</style>
