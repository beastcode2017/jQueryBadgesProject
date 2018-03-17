$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/Kingbreaker.json',
  dataType:'jsonp',
  success: function(response){
    response.courses.completed.forEach(function(course){
      var msg = $('<div></div>');
      msg.addClass('course');

      msg.append('<h3></h3>').text(course.title);
      msg.after('<img/>').attr('src','course.badge');
      msg.after("<a href='course.url' target='_blank'></a>").addClass("btn btn-primary").text("See Course");
      $('#badges').append(msg);
    });
  }
});

});
