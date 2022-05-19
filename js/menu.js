let openMenu = (nav, active) => {
  nav.classList.add(active);
};

let closeMenu = (nav, active) => {
  nav.classList.remove(active);
};


let slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);

/* Больше закрытие по крестику как отдельное событие не нужно
  burgerBtn.addEventListener('click', () => {
    openMenu(navigation, classActiveMenu);
  });
 */

  navigationClose.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu(navigation, classActiveMenu);
    });
  });

  // Закрытие меню по Escape
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && navigation.classList.contains(classActiveMenu)) {
      closeMenu(navigation, classActiveMenu);
    }
  });

  // Закрытие меню при клике на пустоту и закрытие по крестику
  document.addEventListener('click', (e) => {
    if (e.target.closest(openBtn))  {
      openMenu(navigation, classActiveMenu);
      //console.log('Открыть меню');
    } else if (e.target.closest(menu) == null && navigation.classList.contains(classActiveMenu)) {
      closeMenu(navigation, classActiveMenu);
      //console.log('Закрыть меню');
    } /* else if (e.target.closest(menu) == null && navigation.classList.contains(classActiveMenu) == false) {
      console.log('Ничего');
    } */ /* else if (e.target.closest(menu) && navigation.classList.contains(classActiveMenu)) {
      console.log('Это меню');
    } */
  });
};

export default slideMenu;