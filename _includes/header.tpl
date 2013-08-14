<header id="header" class="clearall">
    <hgroup>
        <h1 id="logo"><a href="/">xiaoxiehang</a></h1>
        <h2 id="describe">写点什么好呢~~~~</h2>
    </hgroup>
    <nav id="nav" class="fr">
        <ul>
            <li><a href="/" title="首页">首页</a></li>
            {% for category in site.catalog.categories %}
                <li class="{{ category.name }}"><a href="/category/{{ category.name }}.html">{{ category.title }}</a></li>
            {% endfor %}
        </ul>
    </nav>
</header>