
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
		path: 'testing',
		component: re=> require(['&/Introduce/Testing.vue'],re)
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
	{
		path: 'rum-table',
		component: re=> require(['&/Examps/RumTable.vue'],re)
	},
	{
		path: 'rum-model',
		component: re=> require(['&/Examps/RumModel.vue'],re)
	},
	{
		path: 'rum-message',
		component: re=> require(['&/Examps/RumMessage.vue'],re)
	},
	{
		path: 'rum-tabs',
		component: re=> require(['&/Examps/RumTabs.vue'],re)
	},
	{
		path: 'rum-trees',
		component: re=> require(['&/Examps/RumTrees.vue'],re)
	},
	{
		path: 'rum-time',
		component: re=> require(['&/Examps/RumTime.vue'],re)
	},
	{
		path: 'rum-radio',
		component: re=> require(['&/Examps/RumRadio.vue'],re)
	},
	{
		path: 'rum-upload',
		component: re=> require(['&/Examps/RumUpload.vue'],re)
	},
	{
		path: 'rum-checkbox',
		component: re=> require(['&/Examps/RumCheckBox.vue'],re)
	},
	{
		path: 'rum-steps',
		component: re=> require(['&/Examps/RumSteps.vue'],re)
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