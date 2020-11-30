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

$(document).ready(function () {


  $(".navbar-toggle").click(function (e) {
    e.preventDefault();
    $('.navbar-menu').slideToggle(300);
  });

  $(".collapse-toggle").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
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
