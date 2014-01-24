<header class="header">
    <hgroup>
        <h1 class="logo">
            <a href="{{ site.url }}"><img src="http://xiaoxiehang.qiniudn.com/face.jpg" alt=""></a>
                <strong class="color1">xiaoxiehang</strong>
            </a>
        </h1>
        <h2 class="description color9">写点什么好呢?</h2>
    </hgroup>
    <nav class="nav">
        <ul>
            <li><a href="/">首页</a></li>
            {% for category in site.catalog.categories %}<li class="{{ category.name }}"><a href="{{ site.url }}/category/{{ category.name }}.html">{{ category.title }}</a></li>
            {% endfor %}
        </ul>
    </nav>
    <div class="search">
        <input placeholder="搜索..." class="search-txt color9" x-webkit-speech type="search" value="" list="search-list">
        <datalist id="search-list">
            {% for post in site.posts %}<option value="{{ post.title }}" />
            {% endfor %}
        </datalist>
    </div>
</header>


