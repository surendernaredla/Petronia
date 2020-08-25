new ClipboardJS('.bd-copy', {
  target: function (trigger) {
    return trigger.parentElement.nextElementSibling
  }
});

anchors.add('.bd-content > h2, .bd-content > h3');

var toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// toggleSwitch.addEventListener("change", switchTheme, false);

// var currentTheme = localStorage.getItem("theme") ?
//   localStorage.getItem("theme") :
//   null;

// if (
//   !currentTheme &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   currentTheme = "dark";
// }

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);
//   if (currentTheme === "dark") {
//     toggleSwitch.checked = true;
//   }
// }

// $(function() {
 
//   $('.range').bind('change mousemove', function() {
//     var val = $(this).val();
//     var buf = ((100 - val) / 4) + parseInt(val);
//     $(this).css(
//       'background',
//       'linear-gradient(to right, #606670 0%, #606670 ' + val + '%, #d7dbdd ' + val + '%, #d7dbdd 100%)'
//     );
//   });
  
// });


$(document).ready(function () {


  $(".navbar-toggle").click(function (e) {
    e.preventDefault();
    $('.navbar-menu').slideToggle(300);
  });

  $(".collapse-toggle").click(function (e) {
    e.preventDefault();
    // $(".collapse-content").not($(this).next()).slideUp(300);
    $(".collapse-item").not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');
    // $(this).next().slideToggle(300);
  });
  $('.dropdown-toggle').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".dropdown").not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');
  });
  
  $(document).on("click", function(event){
    var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown").removeClass("active");
        }  
  });

  $("button[data-modal]").click(function(){
    $($(this).attr('data-modal')).toggleClass('active');
  });
  $(".modal-close").click(function(){
    $(this).closest('.modal').removeClass('active');
  });
  
});


/*! js-cookie v2.1.4 | MIT */
