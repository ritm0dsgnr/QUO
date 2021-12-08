$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
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
