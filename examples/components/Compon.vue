<template>
	<div id="compon">
		<lay-hender></lay-hender>
		<div class="main">
			<lay-menu></lay-menu>
			<div class="content">
				<router-view/>
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
	width: 100%; height: 100%;
	overflow: hidden;
	position: relative;
}
.main {
	position: absolute;
	top: 100px; left: 0; right: 0; bottom: 0;
	display: flex;
	align-items: stretch;
}
.content {
	flex: 1;
	padding: 5px 80px 18px 50px;
	height: 100%;
	overflow: auto;
}
</style>
