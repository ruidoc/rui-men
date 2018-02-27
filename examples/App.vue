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
	pre {
		background: #f5f7ff;
		padding: 5px 10px;
		border-radius: 3px;
		margin-bottom: 14px;
	}
	code {
        font-size: 15px;
		line-height: 23px;
    }
</style>
