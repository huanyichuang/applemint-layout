(function($){
    $(document).ready(function(){
        $(".menu-toggle").on( "click", function(e){
            //alert("clicked");
            if($(".hamburger-menu").hasClass("toggled")) {
                // console.log(this);
                $(".hamburger-menu").removeClass("toggled");
            } else {
                $(".hamburger-menu").addClass(" toggled");
            }
        });
        $("ul.flex.flex-col.flex-wrap > li").on( "click", function(e){
            console.log(e.target);
            if(e.target.parent().children(".sub-menu").hasClass("toggled")) {
                e.target.parent().children(".sub-menu").removeClass("toggled");
            } else {
                e.target.parent().children(".sub-menu").addClass("toggled");
            }
        });
    });
})(jQuery);