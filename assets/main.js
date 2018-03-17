$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
    response.courses.completed.forEach(function(course){
      var msg = $('<div></div>');
      msg.addClass('course');
      $('#badges').append(msg);
      $('.course:last').append('<h3></h3>');
      $('h3').text(course.title);
      $('.course:last').append('<img/>').attr('src','course.badge');
      $('.course:last').append("<a href='course.url' target='_blank'></a>").addClass("btn btn-primary").text("See Course");
    });
  }
});

});
