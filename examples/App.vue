<template>
	<div id="app">
		<transition name="slide">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>

<style>
	#app {
		position: relative;
		font-weight: 400;
	}
</style>
