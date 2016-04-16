<div id="app">
    <a v-link="{ path: '/' }"><h1>Nossa Empresa</h1></a>
    <ul class="navigation">
        <li><a v-link="{ path: '/people' }">Pessoas</a></li>
        <li><a v-link="{ path: '/people/2' }">ID no parametro</a></li>
        <li><a v-link="{ path: '/people/a/b/c/d/' }">Greedy infinito /people/a/b/c/d/</a></li>
        <li><a v-link="{ path: '/people/a/b/c/d/baz' }">Greedy com final /people/a/b/c/d/baz</a></li>
    </ul>

    <router-view></router-view>
</div>

<script src="js/app.js"></script>