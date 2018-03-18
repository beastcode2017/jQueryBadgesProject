$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
  for (var i=0; i < response.courses.completed.length; i++){
      $('#badges').append("<div class='course'></div>");
      $('.course:last').append('<h3></h3>');
      $('.course h3:last').append(course.title);
      $('.course h3:last').after("<img src="+"'"+course.badge+"'"+"/>");
      $('.course h3 img:last').add("a");
    }
  }
});
})();
