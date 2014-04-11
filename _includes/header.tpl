<header class="g-hd">
    <hgroup>
        <h1 class="m-logo">
            <a href="{{ site.url }}">
                <img src="http://xiaojjblog.qiniudn.com/face.jpg" alt="xiaoxiehang">
                <strong>xiaoxiehang</strong>
            </a>
        </h1>
        <h2 class="m-desc color9">写点什么好呢?</h2>
    </hgroup>
    <nav class="m-nav">
        <ul>
            <li><a href="/">首页</a></li>
            {% for category in site.catalog.categories %}<li class="{{ category.name }}"><a href="/category/{{ category.name }}">{{ category.title }}</a></li>
            {% endfor %}
        </ul>
    </nav>
    <!--div class="m-search">
        <input placeholder="搜索..." class="m-search-txt color9" x-webkit-speech type="search" value="" list="search-list">
        <a href="javascript:;" class="m-search-btn">搜索</a>
        <datalist id="m-search-list">
            {% for post in site.posts %}<option value="{{ post.title }}" />
            {% endfor %}
        </datalist>
    </div-->
</header>