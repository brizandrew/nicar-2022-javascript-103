import { headline, article, coverArt, pubDate } from '../../article';
import { apdate, widont } from 'journalize';

export default function renderDesktop(){
  return `
    <div class="article mobile">
      <h1>${widont(headline)}</h1>

      <img class="cover-art mobile" src="${coverArt}" />

      <p class="pub-date">
        Published ${apdate(pubDate)}
      </p>

      ${article.map(text => `<p>${text}</p>`).join('')}
    </div>
  `;
}