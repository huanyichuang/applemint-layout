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
    });
})(jQuery);