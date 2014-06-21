$(document.body).on('click',function(e){
    var _this = $(this), el = $(e.target);
    if(!el.closest('.f-editbox').length){
        if($('.f-editbox').length){
            removeEditbox();
        }
    }
    if(el.hasClass('m-table-edit')){
        var el_right = _this.width()-el.offset().left-el.width(),
            el_top = el.offset().top+el.height();
        
        el.parents('tr').addClass('crt');
        
        var html=[
            '<div class="f-editbox" style="top:'+el_top+'px;right:'+el_right+'px;">',
            '<div class="f-editbox-bd">',
            '<label>状态：</label>',
            '<dl class="f-select">',
            '<dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt>',
            '<dd class="f-select-bd">',
            '<ul><li>开放</li><li>关闭</li></ul>',
            '</dd>',
            '</dl>',
            '</div>',
            '<div class="f-editbox-ft">',
            '<a href="javascript:;" class="u-orange-btn u-orange-btn-s j-save-status">保存</a>',
            '<a href="javascript:;" class="u-operate-btn u-operate-btn-s j-cancel-status">取消</a>',
            '</div>',
            '</div>'
        ];
        _this.append(html.join(''));
        $('.f-select').select();
    }
    if(el.hasClass('j-save-status')){
        alert('ajax');
        removeEditbox();
    }
    if(el.hasClass('j-cancel-status')){
        removeEditbox();
    }
})

function removeEditbox(){
    $('.f-editbox').remove();
    $('.m-table').find('tr').removeClass('crt');
}