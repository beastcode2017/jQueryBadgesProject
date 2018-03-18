$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
    response.courses.completed.forEach(function(course){
      $('#badges').append("<div class='course'></div>");
      $('.course:last').append('<h3></h3>');
      $('.course h3:last').append(course.title);
      $('.course h3:last').after("<img src="+"'"+course.badge+"'"+"/>");
      $('.course h3 img:last').after("<a href="+"'"+course.url+"'"+">See Course</a>").addClass("btn btn-primary");
      $('.course h3 img a:last').attr('target','_blank');
    });

    });
  }
});

});
