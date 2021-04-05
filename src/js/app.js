const $mobileNavbar = document.getElementById('mobile-navbar'),
  $panelMobileSearch = document.getElementById('mobile-search-panel'),
  $panelMobileReels = document.getElementById('mobile-reels-panel'),
  $panelMobileShooping = document.getElementById('mobile-shooping-panel'),
  $panelMobileAccount = document.getElementById('mobile-account-panel');

function setEscene(panel) {
  panel.classList.toggle('is-active');
}

function showMenu(e) {
  const action = e.target.dataset.menu;
  if (!action) {
    return;
  }
  switch (action) {
    case 'home':
      return setEscene();
    case 'search':
      return setEscene($panelMobileSearch);
    case 'reels':
      return setEscene($panelMobileReels);
    case 'shoop':
      return setEscene($panelMobileShooping);
    case 'account':
      return setEscene($panelMobileAccount);

    default:
      break;
  }
}

$mobileNavbar.addEventListener('click', showMenu);
