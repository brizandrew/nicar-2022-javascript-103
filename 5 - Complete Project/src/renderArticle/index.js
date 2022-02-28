import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
  // Grab the container
  const container = document.querySelector('#app');

  // Reset the contents
  container.innerHTML = '';

  // Render the right contents depending on the width
  const windowWidth = window.innerWidth;
  if(windowWidth > 760){
    // Get the desktop HTML
    const content = renderDesktop();

    // Add it to the container
      container.innerHTML = content;
  } else {
    // Get the mobile HTML
    const content = renderMobile();

    // Add it to the container
      container.innerHTML = content;
  }
}