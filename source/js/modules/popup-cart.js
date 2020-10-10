$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

// $(".popup-cart").click(function() {
//     $('.toggled_block').toggle();
//   });
//   $(document).on('click', function(e) {
//     if (!$(e.target).closest(".popup-cart__close").length) {
//       $('.toggled_block').hide();
//     }
//     e.stopPropagation();
//   });