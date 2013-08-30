{% for post in list %}
    <article class="post">
        <header class="post-hd">
            <h1><a href="{{ post.url }}" class="color1">{{ post.title }}</a></h1>
        </header>
        <section class="post-bd">
            <!--post.excerpt-->
            <p class="post-meta color9">
                <span>分类：<a href="category/{{ post.categories }}.html">{{ post.categories }}</a></span>
                <span>时间：<time class="color9">{{ post.date | date: "%Y-%m-%d" }}</time></span>
            </p>
        </section>
        <footer class="post-ft"></footer>
    </article>
{% endfor %}
{% if list == null %}
    <p>该分类下还没有文章</p>
{% endif %}