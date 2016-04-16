var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

// Definição das rotas, acho que seriam os componentes
var Home = Vue.extend({
    template: 'Bem-vindo a minha <b>página inicial bagaceira</b>!'
});

var People = Vue.extend({
    template: 'Veja todas as pessoas que trabalham aqui!'
});

router.map({
    '/people/*greedy' : {
        component: {
            template: 'Usando greedy aceita /people/a/b/c/ ... {{$route.params.greedy}} .' +
                "Experimente acrescentar outras seções na url"
        }
    },
    '/people/*greedy/baz' : {
        component: {
            template:  'Usando greedy aceita /people/a/b/c/baz ... {{$route.params.greedy}} .' +
                'Experimente acrescentar mais seções na variável, antes de /baz'
        }
    },
    '/people/:personId': {
        component: {
            template: 'O id da pessoa é {{$route.params.personId}}'
        }
    }
});

router.start(App, '#app');