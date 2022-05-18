//d683f3a7a92b108c92530a32793b8795
import slideMenu from './menu.js';

/* Обычный вызов
slideMenu('.header__burger-btn',
  '.navigation',
  'navigation_active',
  '.navigation__link, .navigation__close');
 */

// Вызов через объект

slideMenu({
  openBtn: '.header__burger-btn',
  menu: '.navigation',
  classActiveMenu: 'navigation_active',
  closeTrigger:'.navigation__link, .navigation__close',
});