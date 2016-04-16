<div id="app">
    <a v-link="{ path: '/' }"><h1>Nossa Empresa</h1></a>
    <a v-link="{ name: 'people.show', params: { personId: 5 }}">Pessoa 5 (named route)</a>
    <ul class="navigation">
        <li><a v-link="{ path: '/people' }">Pessoas</a></li>
        <li><a v-link="{ path: '/people/2' }">ID no parametro</a></li>
        <li><a v-link="{ path: '/people/a/b/c/d/' }">Greedy infinito /people/a/b/c/d/</a></li>
        <li><a v-link="{ path: '/people/a/b/c/d/baz' }">Greedy com final /people/a/b/c/d/baz</a></li>
    </ul>

    {{--Conteúdo carregado pelo router view do vue router--}}
    <router-view></router-view>
</div>

<script src="js/app.js"></script>