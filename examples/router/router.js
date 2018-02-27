
const homeRouter = [
	{
		path: 'about',
		component: re=> require(['&/Introduce/About.vue'],re)
	},
	{
		path: 'starting',
		component: re=> require(['&/Introduce/Starting.vue'],re)
	},
	{
		path: 'rum-input',
		component: re=> require(['&/Examps/RumInput.vue'],re)
	},
	{
		path: 'rum-button',
		component: re=> require(['&/Examps/RumButton.vue'],re)
	},
	{
		path: 'rum-select',
		component: re=> require(['&/Examps/RumSelect.vue'],re)
	},
]

export default {
	routes: [
		{
            path: '/',
            redirect: '/component',
			component: re => require(['&/Home.vue'], re)
		},
		{
            path:'/component',
            component: re => require(['&/compon.vue'], re),
            children: homeRouter
        },
	]
}