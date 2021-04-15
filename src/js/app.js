import { getUsers } from './helpers/getUers.js';
import { getBlogPostData } from './helpers/getData.js';
import { render } from './render.js';
import { Story } from './components/Story.js';
import { Post } from './components/Post.js';

const $mobileNavbar = document.getElementById('mobile-navbar'),
  $panelMobileSearch = document.getElementById('mobile-search-panel'),
  $panelMobileReels = document.getElementById('mobile-reels-panel'),
  $panelMobileShooping = document.getElementById('mobile-shooping-panel'),
  $panelMobileAccount = document.getElementById('mobile-account-panel'),
  $iconCloseStory = document.getElementById('close-story'),
  $storiesContainer = document.getElementById('stories'),
  $postsContainer = document.getElementById('posts');

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

// function showStory() {
//   window.story.classList.toggle('is-active');
// }

// $mobileNavbar.addEventListener('click', showMenu);
// $iconCloseStory.addEventListener('click', showStory);

async function renderDOM() {
  const list = await getBlogPostData();
  // console.log(list[0]);
  render(list, Story, $storiesContainer);
  render(list, Post, $postsContainer);
}
document.addEventListener('DOMContentLoaded', renderDOM);
