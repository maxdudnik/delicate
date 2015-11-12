$(document).ready(function() {


  $(".thanks input, html").click(function(){
    $(".thanks").fadeOut(300);
  });

$("#thanks2-wrapper .thanks2 input, html").click(function(){
    $("#thanks2-wrapper").fadeOut(300);
  });



  /*-----Header button-----*/
  $(".feedback .call").click(function(){

    $("#header-form").toggle(300);
  });

  $("#close-header-form").click(function(){
    $("#header-form").hide();
  });
 

/*--------Fancy Box ------------*/

$("a[rel=gallery]").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });


/*-------------LCarousel---------------*/

  $("#owl-demo").owlCarousel({
 
      navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : false,
      autoPlay: 5000

  });

  $("#carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation : true,
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigationText : false
 
  });


  $(".employ").click(function(){
    $(".slider-form").show();
    return false;
  });

  $(".form-close").click(function(){
    $(".slider-form").hide();
  });


/*-----------Timer-------------------*/


function counter(){
        var now = new Date();
        var finDate = new Date("Nov,07,2016,23:09:00");
        var totalRemains = (finDate.getTime() - now.getTime());
        if (totalRemains > 1){
            var RemainsSec = (parseInt(totalRemains / 1000));
            var RemainsFullDays = (parseInt(RemainsSec/(24 * 60 * 60)));
            if (RemainsFullDays < 10){
                RemainsFullDays = "0" + RemainsFullDays
            };
            var secInLastDay = RemainsSec-RemainsFullDays * 24 * 3600;
            var RemainsFullHours = (parseInt(secInLastDay / 3600));
            if (RemainsFullHours < 10){
                RemainsFullHours = "0" + RemainsFullHours
            };
            var secInLastHour = secInLastDay - RemainsFullHours * 3600;
            var RemainsMinutes = (parseInt(secInLastHour / 60));
            if (RemainsMinutes < 10){
                RemainsMinutes = "0" + RemainsMinutes
            };
            var lastSec = secInLastHour - RemainsMinutes * 60;
            if (lastSec < 10){
                lastSec = "0" + lastSec
            };
            // var mcend = Date.parse("Jan 1, 2009, 00:00:00");
            // var mcnow = now.getTime();
            // var mc = ((mcend - mcnow)/10).toFixed(0).substr(8);

            $(".timer .days").html(RemainsFullDays);
            $(".timer .hours").html(RemainsFullHours);
            $(".timer .minutes").html(RemainsMinutes);
            $(".timer .seconds").html(lastSec);
        }
        else {
            $(".timer").html("Время вышло.");
        }
    };
    setInterval(counter, 1000);

/*------------------Vlidation--------------------*/
/*-------------Header form validate-----------*/

$("#header-form1").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16,
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $(form).parent().fadeOut();
                        $("#thanks2-wrapper").fadeIn(300);
                     }
                );
                return false;
              }
        });

/*--------Light Box Form validate--------------*/


$("#offer-form .offer-form").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16,
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
                
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $("#lightbox").fadeOut();
                        $("#thanks2-wrapper").fadeIn(300);
                     }
                );
                return false;
              }
  });

 $("#offer-form-close").click(function(){
    $("#lightbox").hide();
  });


/*-----Slider forms validation-----*/

$("#form1").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16,
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $(form).parent().fadeOut();
                        $(".thanks").fadeIn(300);
                     }
                );
                return false;
              }
        });

$("#form2").validate({
            rules:{
                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16,
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $(form).parent().fadeOut();
                        $(".thanks").fadeIn(300);
                     }
                );
                return false;
              }
        });


$("#form3").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16,
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $(form).parent().fadeOut();
                        $(".thanks").fadeIn(300);
                     }
                );
                return false;
              }
        });


/*----Special forms validation-----*/

    $("#specialoffer_form").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16
                  },

                  phone:{
                      required: true,
                      digits: true
                  },
                  email:{
                      required: true,
                      email:true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  },
                  email:{
                      email: "Вы ввели не верный Email"
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $("#thanks2-wrapper").fadeIn(300);
                     }
                );
                return false;
              }
        });



/*----Map form validation-----*/

    $(".map-form").validate({
            rules:{

                  name:{
                      required: true,
                      minlength: 2,
                      maxlength: 16
                  },

                  phone:{
                      required: true,
                      digits: true
                  }
             },
             messages:{

                  name:{
                      minlength: "Имя должно быть не менее 2-х символов",
                      maxlength: "Максимальное число символо - 16",
                  },

                  phone:{
                      digits: "Введите цифровое значение",
                  }
             },
              submitHandler: function(form) {
                $.post($(form).attr('action'), $(form).serialize(), function(data)  {
                        $("#thanks2-wrapper").fadeIn(300);
                     }
                );
                return false;
              }
        });

/*-------LightBox-------*/

  
  

  $("#offers .order").click(function(){
		var title = $(this).siblings("h2").text();
     	$("#offer-form h3").html(title);
     	$("#lightbox").show();
     	return false;
  });

  $("#offer-form .close").click(function(){
   		$("#lightbox").hide();
  });

});


