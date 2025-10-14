//Header scrolled

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//For hamburger menu

const menuToggle = document.querySelector(".menu-toggle");
const sidebarNav = document.querySelector(".sidebar-nav");

menuToggle.addEventListener("click", () => {
  console.log("menu clicked");
  sidebarNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  if (sidebarNav.classList.contains("active")) {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

// close sidebar when clicking outside or on a link
document.addEventListener("click", (e) => {
  if (!sidebarNav.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebarNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuToggle.textContent = "☰";
  }
});

sidebarNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebarNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuToggle.textContent = "☰";
  });
});

//for slick slider

$(document).ready(function () {
  $(".reviews").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Read more content

$(document).ready(function () {
  $(".review-data").each(function () {
    const $container = $(this);
    const $text = $container.find(".review-text");
    const $btn = $container.find(".read-more-btn");

    // Temporarily expand to get full height
    $text.addClass("expanded");
    const fullHeight = $text[0].scrollHeight;
    $text.removeClass("expanded");

    const collapsedHeight = parseInt($text.css("max-height"));

    if (fullHeight <= collapsedHeight) {
      $btn.hide(); // Hide button if no need for expansion
    }

    $btn.on("click", function () {
      $text.toggleClass("expanded");
      $btn.text($text.hasClass("expanded") ? "Read less" : "Read more");
    });
  });
});

// Contact now button redirect

const openContact = () => {
  // window.open("/contact.html");
  window.location.href = "/contact.html";
};
