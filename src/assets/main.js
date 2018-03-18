$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
  for (var i=0; i < response.courses.completed.length; i++){
      $('#badges').append("<div class='course'></div>");
      $('.course:last').append('<h3></h3>');
      $('.course h3:last').append(response.courses.completed[i].title);
      $('.course h3:last').after("<img src="+"'"+response.courses.completed[i].badge+"'"+"/>");
      $('a').appendTo($('.course:last'));
    }
  }
});
})();
