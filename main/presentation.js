document.body.addEventListener(
  'click',
  function (e) {
    var target = e.target;
    if (target.classList.contains('tile')) {
      target.classList.add('bounceout');
      setTimeout(function () {
        if (target.href) window.location = target.dataset.redirect;
        else window.location.href = 'index.html';
      }, 1000);
    }
  },
  false
);
