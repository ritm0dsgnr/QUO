$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".nav__adapt").toggleClass("active");
    $(".burger").toggleClass("active");
    $(".nav__link__adapt").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__adapt").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".nav__link__adapt").removeClass("active");
    $(".nav__adapt").removeClass("active");
    $("body").removeClass("lock");
});

function onEntry(entry) {
  entry.forEach(change => {
  if (change.isIntersecting) {
      change.target.classList.add('anim-show');
  }
  else {
      change.target.classList.remove('anim-show');
  }
  });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');

  for (let elm of elements) {
    observer.observe(elm);
  };
