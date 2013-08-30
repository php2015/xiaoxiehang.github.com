<header class="header">
    <hgroup>
        <h1 class="logo">
            <figure>
                <a href="/"><img src="/img/face.jpg" alt=""></a>
                <figcaption><a href="/" class="color1">xiaoxiehang</a></figcaption>
            </figure>
        </h1>
        <h2 class="description color9">写点什么好呢?</h2>
    </hgroup>
    <nav class="nav"><ul>
        <li><a href="/">首页</a></li>
        {% for category in site.catalog.categories %}
            <li class="{{ category.name }}"><a href="/category/{{ category.name }}.html">{{ category.title }}</a></li>
        {% endfor %}
    </ul></nav>
    <div class="search">
        <!--input placeholder="搜索..." class="search-txt color9" x-webkit-speech type="search" value=""-->
    </div>
</header>