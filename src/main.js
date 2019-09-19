import methods from './js/methods'

console.log(methods.add(10,20));
console.log(methods.mul(10,30));
document.writeln('<p>路鸣泽</p>');
require('./css/normal.css');
require('./css/normal.scss');
require('./css/normal.less');

const str='悼亡者之瞳';
console.log(str);

// vue
import Vue from 'vue';
import App from './App'

let app=new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }

})

