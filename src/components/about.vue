<template>
	<div class="about">
		<h3>About</h3>
		<p>Hello {{ their_name }}</p>
	</div>
</template>
<script>
	export default {
		name: 'About',
		data(){
			return {
				their_name: this.$route.params.name
			}
		},
		methods:{

		}
	}	
</script>
<style scoped>
</style>