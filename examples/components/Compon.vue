<template>
	<div id="compon">
		<lay-hender></lay-hender>
		<div class="main">
			<lay-menu></lay-menu>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        LayHender: re => require(["&/Layout/LayHender"], re),
        LayMenu: re => require(["&/Layout/LayMenu"], re)
    }
};
</script>

<style scoped>
#compon {
    overflow: auto;
}
.main {
    margin-top: 100px;
}
.content {
	width: 70%;
	display: inline-block;
}
</style>
