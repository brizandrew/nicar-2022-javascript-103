import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
  // Grab the container and window width
  const container = document.getElementById('app');
  const windowWidth = window.innerWidth;

  if(windowWidth > 760){
    // Get the desktop HTML
    const content = renderDesktop();

    // Render it in the container
    container.innerHTML = content;
  } else {
    // Get the mobile HTML
    const content = renderMobile();

    // Render it in the container
    container.innerHTML = content;
  }
}