<header class="header">
    <hgroup>
        <h1 class="logo">
            <figure>
                <a href="/"><img src="{{ site.url }}/img/face.jpg" alt=""></a>
                <figcaption><a href="{{ site.url }}" class="color1">xiaoxiehang</a></figcaption>
            </figure>
        </h1>
        <h2 class="description color9">写点什么好呢?</h2>
    </hgroup>
    <nav class="nav"><ul>
        <li><a href="/">首页</a></li>
{% for category in site.catalog.categories %}
<li class="{{ category.name }}"><a href="{{ site.url }}/category/{{ category.name }}.html">{{ category.title }}</a></li>
{% endfor %}
    </ul></nav>
    <div class="search">
        <input placeholder="搜索..." class="search-txt color9" x-webkit-speech type="search" value="" list="search-list">
        <datalist id="search-list">
{% for post in list %}
<option value="{{ post.title }}">
{% endfor %}
        </datalist>
    </div>
</header>

{% for post in list %}
    <article class="post">
        <header class="post-hd">
            <h1><a href="{{ site.url }}{{ post.url }}" class="color1">{{ post.title }}</a></h1>
        </header>
        <section class="post-bd">
            <!--post.excerpt-->
            <div class="post-meta color9">
                <span>分类：<a href="{{ site.url }}/category/{{ post.categories }}.html">{{ post.categories }}</a></span>
                <span>时间：<time class="color9">{{ post.date | date: "%Y-%m-%d" }}</time></span>
            </div>
        </section>
        <footer class="post-ft"></footer>
    </article>
{% endfor %}