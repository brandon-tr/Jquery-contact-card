$(document).ready(function(){
  $('button').click(function(){
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var descriptionText = $('#description').val();
    $('#cards').append('<p class=cardProperties>'+"<span class=name>"+firstName+"  "+lastName+" </span> <span class=description>"+descriptionText+'</span></p>');
    return false;
  })

  $(document).on("click","#cards",function(){

    $('p').children().toggle();
      return false;
  })

});
