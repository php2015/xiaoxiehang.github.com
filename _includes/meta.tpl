{% for post in list %}
<article class="m-post">
    <header class="m-post-hd">
        <h1><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></h1>
        <div class="m-post-meta">日期：{{ post.date | date: "%Y-%m-%d" }}&nbsp;&nbps;分类{{ post.category }}</div>
    </header>
</article>
{% endfor %}
{% if list == null %}
<article class="m-post">
    <p>该分类下还没有文章</p>
</article>
{% endif %}