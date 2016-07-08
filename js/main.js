// Main Js Configuration

$(document).ready(function() {

    //# Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    $(".modal .bl_links a").click(function(e){
        e.preventDefault();
        $this =$(this);
        $this.parent().find("a").removeClass("active");
        $this.addClass("active");
        $this.parents(".modal").find(".bl_wrap_enter_register").find(" > div").removeClass("active");
        $this.parents(".modal").find(".bl_wrap_enter_register").children("div").eq($this.index()).addClass("active");
    });

    $(".modal .bl_link_password a").click(function(e){
        e.preventDefault();
        $this = $(this);
        $(".modal .bl_links a").hide();
        $this.parents(".modal").find(".bl_wrap_enter_register").find(" > div").removeClass("active");
        $this.parents(".modal").find(".bl_wrap_enter_register").children("div").eq(2).addClass("active");
    });

    $(".modal .back_form_enter_link a").click(function(e){
        e.preventDefault();
        $(".modal .bl_links a").show();
        $this.parents(".modal").find(".bl_wrap_enter_register").find(" > div").removeClass("active");
        $this.parents(".modal").find(".bl_wrap_enter_register").children("div").eq(0).addClass("active");
    });

});