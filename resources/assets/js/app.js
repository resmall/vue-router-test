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
    '/': {
        component: Home
    },
    '/people': {
        component: People
    }
});

router.start(App, '#app');