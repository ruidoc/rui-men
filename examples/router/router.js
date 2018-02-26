
const homeRouter = [
	{
		path: '/',
		component: re=> require(['&/introduce/About.vue'],re)
	}
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