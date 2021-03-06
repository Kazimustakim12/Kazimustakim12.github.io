$(document).ready(function () {
  // for parallex
  let scrollImage = document.querySelector("#img");
  let title = document.querySelector(".site-title");
  let textEffect = document.querySelector(".text-effect");
  const icons = document.querySelectorAll(".icon");
  let sun = document.querySelector("#sun");
  // console.log(sun)
  var btn = $("#button");
  //

  //

  // for toggle

  window.addEventListener("scroll", function () {
    var value = window.scrollY;

    scrollImage.style.top = value * 0.5 + "px";
    title.style.top = value * 0.5 + "px";
    // textEffect.style.top = value * 0.5 + 'px';
  });

  // for close menu on click
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".nav-icon-2").removeClass("open");
  });
  // end of close menu on click

  // top scroll effect
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  // end of top effect

  // for toggle menu

  icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classList.toggle("open");
    });
  });

  // end toggle menu

  // project area effect

  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  // Owl-carousel

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });
  // end of project area effect

  // dark mode toggle
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      sun.innerHTML = `<i class="fas fa-sun" style="font-size: 28px;"></i>`;
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      sun.innerHTML = `<i class="fas fa-moon" style="font-size: 28px;"></i>`;
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
  // end dark mod toggle

  // sticky navbar

  let nav_offset_top = $(".headerarea").height() + 50;
  function navbarFixed() {
    if ($(".headerarea").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".headerarea .mainmenu").addClass("navbar_fixed");
        } else {
          $(".headerarea .mainmenu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});

// preloader
// preloader
$("#status").fadeOut(); // will first fade out the loading animation
$("#preloader").delay(3050).fadeOut("slow"); // will fade out the white DIV that covers the website.
$("body").delay(3050).css({
  overflow: "visible",
});
$(function () {
  var text = $(".text");

  text.removeClass("hidden").delay(3050).fadeIn("slow");
  setTimeout(function () {
    text.addClass("hidden").delay(2052).fadeOut("slow");
  }, 2000);
});

// project filter btn active
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
