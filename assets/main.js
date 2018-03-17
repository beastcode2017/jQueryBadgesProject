$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
    response.courses.completed.forEach(function(course){
      var title = course.title;
      $('#badges').append("<div class='course'></div>");
      $('.course').append('<h3></h3>').text('course.title');
      $('.course h3:last').after('<img/>').attr('src','course.badge');
      $('.course h3 img:last').after("<a href='course.url' target='_blank'></a>").addClass("btn btn-primary").text("See Course");
    });
  }
});

});
