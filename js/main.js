(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#textarea1').val('New Text');
    $('input#input_text, textarea#textarea2').characterCounter();
	M.textareaAutoResize($('#textarea1'));
  });
})(jQuery);