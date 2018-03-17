$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
    response.courses.completed.forEach(function(course){
      var cbadge = course.badge;
      $('#badges').append("<div class='course'></div>");
      $('.course:last').append('<h3></h3>');
      $('.course h3:last').append(course.title);
      $('.course h3:last').after("<img />");
      $('.course h3 img:last').attr('src', cbadge);
      $('.course h3 img:last').after("<a target='_blank'>See Course</a>").addClass("btn btn-primary");
    });
  }
});

});
