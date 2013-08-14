{% for post in list %}
    <article class="post">
        <header class="post-hd">
            <h1 class="post-title"><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></h1>
            {% include meta.tpl %}
        </header>
    </article>
{% endfor %}
{% if list == null %}
<article class="post">
    <p>该分类下还没有文章</p>
</article>
{% endif %}