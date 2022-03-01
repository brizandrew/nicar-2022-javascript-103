import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
  const windowWidth = window.innerWidth;
  const container = document.getElementById('app');


  if(windowWidth > 760){
      const content = renderDesktop();
      container.innerHTML = content;
    } else {
      const content = renderMobile();
      container.innerHTML = content;
    }
}