define("page/user/subscribe", ["widget", "modules/dialog"],
function(i, t, s) {
    var e = i("widget"),
    a = i("modules/dialog"),
    n = e.extend({
        attrs: {
            element: $("#page-sub")
        },
        showSubBox: function(i) {
            var t = [];
            $.each(i,
            function(i, s) {
                t.push("<li>", "<label>", '<img src="http://s.lovewith.me/static/images/subscribe/', s.id, '.sub.jpg" width="120" height="120" />', '<input type="checkbox" name="cid" value="', s.id, '" />', s.name, "</label>", "</li>")
            });
            new a({
                width: 880,
                noClose: !0,
                title: "选择你感兴趣的话题",
                content: '<div class="di-subscribe" id="di-subscribe"><form><ul>' + t.join("") + '</ul><div class="da-sub-btn"><a href="javascript:;" class="inp-btn-pk" id="inp-btn-pk">进入个人空间</a></div><form><p>至少选择1个话题</p></div>'
            }).show();
            this.bind()
        },
        bind: function() {
            var i = this;
            $("#inp-btn-pk").click(function() {
                var t = [];
                $("#di-subscribe input").each(function() {
                    $(this).get(0).checked && t.push({
                        cid: $(this).val(),
                        name: $(this).data("name")
                    })
                }),
                t.length < 1 ? i.showTips() : i.addSub({
                    form: $("#di-subscribe form")
                })
            })
        },
        showTips: function() {
            $("#di-subscribe p").show(),
            setTimeout(function() {
                $("#di-subscribe p").hide()
            },
            1500)
        },
        addSub: function(i) {
            $.ajax({
                method: "post",
                url: "/subscribe/ajax/post/add/",
                dataType: "json",
                data: i.form.serialize() + "&csrfmiddlewaretoken=" + $("#csrf").val(),
                success: function(i) {
                    i.error || window.location.reload()
                }
            })
        },
        renderEdit: function() {
            var i = [],
            t = $("#st-subkey");
            t.on("click",function(t) {
                var s = $(t.target);
                s.hasClass("st-edit-btn") && $(this).addClass("s-tags-edit").find(".st-item a, .st-item em").each(function() {
                    $(this).addClass("ui-a").data("href", $(this).attr("href")),
                    $(this).attr("href", "javascript:;")
                }),
                s.hasClass("ui-a") && (i.push(s.html()), s.remove()),
                s.hasClass("inp-btn-pk") && (i.length > 0 ? $.getJSON("/subscribe/ajax/get/submit/?a=del&ks=" + encodeURIComponent(i.join("@_!")),
                function(i) {
                    i.error || (window.location.href = "/u/subscribe/all/")
                }) : $("body").click()),
                t.stopPropagation()
            }),
            $("body").click(function() {
                t.removeClass("s-tags-edit").find(".st-item a, .st-item em").each(function() {
                    $(this).removeClass("ui-a").attr("href", $(this).data("href"))
                })
            })
        },
        setup: function() {
            var i = this;
            0 == $("#share").size() ? $.getJSON("/share/ajax/g/cate_tag_and_color/",
            function(t) {
                i.showSubBox(t.cates)
            }) : this.renderEdit()
        }
    });
    s.exports = {
        render: function() {
            $(window).load(function() { (new n).render()
            })
        }
    }
});