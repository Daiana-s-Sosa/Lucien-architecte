document.body.addEventListener(
  'click',
  function (e) {
    var target = e.target;
    if (target.classList.contains('tile')) {
      target.classList.add('bounceout');
      setTimeout(function () {
        if (target.href) window.location = target.dataset.redirect;
        else window.location.href = 'init.html';
      }, 1000);
    }
  },
  false
);
const initRedirection = document.getElementById('init');
initRedirection.addEventListener('click', function (e) { window.location.href = 'init.html' });

const projectsRedirections = document.getElementById('projects');
projectsRedirections.addEventListener('click', function(e){window.location.href = 'projects.html'});
