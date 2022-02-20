import { headline, article, coverArt, pubDate } from '../../article';
import { apdate, widont } from 'journalize';


export default function renderDesktop(){
  const firstParagraph = article[0];
  const otherParagraphs = article.slice(1);

  return document
    .createRange()
    .createContextualFragment(`
      <div class="article desktop">
      <h1>${widont(headline)}</h1>
        
        <p class="pub-date">
          Published ${apdate(pubDate)}
        </p>
        
        <p>${firstParagraph}</p>

        <img class="cover-art desktop" src="${coverArt}" />

        ${otherParagraphs.map(text => `<p>${text}</p>`).join('')}
      </div>
    `);
}