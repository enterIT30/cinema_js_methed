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

  burgerBtn.addEventListener('click', () => {
    openMenu(navigation, classActiveMenu);
  });

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

/* Не разобрался, как сделать закрытие на пустое место
  navigation.addEventListener('click', (e) => {
    if (e.target === navigation) {
      closeMenu(navigation, classActiveMenu);
      console.log(e.target);
    }
  });
   */
};

export default slideMenu;