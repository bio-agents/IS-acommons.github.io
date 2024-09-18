var TOUCH_DEVICE = !!('ontouchstart' in window);

$(document).ready(function () {

    $('#site_nav .dd').each(function () {
        new isaDropdown(this);
    }); //dropdown


    showTwitterFeeds();

    $(".carousel").jCarouselLite({
        auto:true,
        scroll:1,
        speed:1000,
        visible:6.5

    });

    $("#highlights").carouFredSel({
        circular:true,
        infinite:false,
        auto:false,
        width:870,
        height:380,

        align:"right",
        prev:{
            button:"#highlights_prev",
            key:"left"
        },
        next:{
            button:"#highlights_next",
            key:"right"
        },
        items:{
            height:300,
            marginRight:40
        }
    });


});


function showTwitterFeeds() {
    twitterFetcher.fetch('361827374599389184', 'twitter', 1, true, false, false);
}


var isaHeader = function () {
    var th = this;

    $.extend(th, {
        $els:{
            header:$("#hd"),
            headerBar:$("#hd_bar"),
            overlay:$("<div/>", {"id":"blackOverlay"}).fadeTo(0, 0).hide().appendTo("body"),
            shaderStrip:$("<div/>", {"class":"shaderStrip checkedOverlay"}).appendTo("#hd"),
            shadow:$("<div/>", {"class":"shadow"}).appendTo("#hd_nav")
        }
    });

    $("#hd").find(".dd").each(function () {
        $("<div/>", {"class":"shadow"}).appendTo(this)
    });
}

var isaDropdown = function (el) {
    var t = this, $el = $(el);

    $.extend(t, {
        $el:$el,
        wrapper:$el.children('.sub_nav_wrapper').eq(0),
        master:$el.parent(),
        ol:$("#blackOverlay")
    });

    t.$el.show();
    t.upMarg = (t.wrapper.children('ul').eq(0).height() * t.wrapper.children('ul').length * -1) - 6;

    t.wrapper.css('margin-top', t.upMarg);

    if (!TOUCH_DEVICE) {
        t.master.hoverIntent({
            over:function () {
                t.onOver()
            },
            out:function () {
                t.onOut()
            },
            interval:200,
            timeout:200
        })
    }
}
isaDropdown.prototype.onOver = function () {
    var t = this, b = $('body');
    t.wrapper.animate({'margin-top':0}, {duration:250, easing:'easeOutCirc'});
    t.ol.stop(true).show().fadeTo(200, 0.3);
    t.master.addClass('down');
}
isaDropdown.prototype.onOut = function () {
    var t = this;
    t.wrapper.animate({'margin-top':t.upMarg}, {duration:250, easing:'easeOutCirc'});
    t.ol.stop(true).fadeTo(200, 0, function () {
        $(this).hide();
    });
    t.master.removeClass('down');
}