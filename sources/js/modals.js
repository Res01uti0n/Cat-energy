'use strict';

(function () {

  var btnMenu = document.querySelector('.btn__burger');
  var modalMenu = document.querySelector('.menu__block');

  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('btn__burger--close');
    modalMenu.classList.toggle('menu--show');
  });

})();
