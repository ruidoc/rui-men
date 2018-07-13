<template>
    <div class="about">
        <Par type="h1">快速上手</Par>
        <Par><f>rui-men</f> 是一个独立的UI组件，直接用 npm 安装就可以，适用任何 Vue 的项目</Par>
        <Par>目前 rui-men 组件尚且不完善，部分依赖于<f link to="https://www.iviewui.com/">iview</f>，所以项目中要安装 iview</Par>

        <br/>
        <Par type="h2">1. 安装</Par>
        <Par type="h3">npm 安装</Par>
        <pre v-highlightjs><code>npm install rui-men --save</code></pre>
        <Par>不建议使用cnpm，因为 rui-men 会频繁更新，cnpm 同步需要时间</Par>
        <Par>可以为 npm 设置淘宝源来替代 cnpm：</Par>
        <pre v-highlightjs><code>npm config set registry https://registry.npm.taobao.org/</code></pre>

        <br/>
        <Par type="h2">2. 引入</Par>
        <Par>一般在 <f>src/main.js</f> 中引入</Par>
        <pre v-highlightjs><code>import rum from 'rui-men'
import 'rui-men/lib/main.css'
Vue.use(rum)</code></pre>
        <Par>现在可以使用 rui-men 的组件了。</Par>

        <br/>
        <Par type="h2">3. wabpack 配置</Par>
        <Par type="h3">使用 jsx</Par>
        <Par>用过 iview 组件，尤其是 table 组件的同学深受 <f>render</f> 函数的折磨，因此 rui-men 借鉴 react 的 <f link>jsx</f> 语法来简化 render 函数。</Par>
        <Par>vue 默认不支持 jsx 语法，因此我们需要一个 babel 插件解析。参考：<f link to="https://github.com/vuejs/babel-plugin-transform-vue-jsx#usage">babel-plugin-transform-vue-jsx</f></Par>

        <Par type="h3">安装 babel-plugin-transform-vue-jsx</Par>
        <pre v-highlightjs><code>npm install\
  babel-plugin-syntax-jsx\
  babel-plugin-transform-vue-jsx\
  babel-helper-vue-jsx-merge-props\
  babel-preset-env\
  --save-dev</code></pre>
        <Par>修改根目录下 <f>.babelrc</f> 文件的 plugins 选项，添加 <f>transform-vue-jsx</f>，修改之后为： </Par>
        <pre><code>{
    "plugins": ["transform-vue-jsx", "transform-runtime"]
}</code></pre>

        <Par type="h3">修改 webpack.base.conf.js</Par>
        <Par>文件位置： <f>build/webpack.base.conf.js</f></Par>
        <Par>修改 babel-loader 规则，在 include 选项中添加 <f>resolve('node_modules/rui-men')</f>，修改之后为：</Par>
        <pre v-highlightjs><code>{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('node_modules/webpack-dev-server/client'), resolve('node_modules/rui-men')]
}</code></pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
