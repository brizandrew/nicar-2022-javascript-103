import { headline, pubDate } from '../article';
import { apdate } from 'journalize'

export default function renderArticle(){
  console.log(headline);
  console.log(apdate(pubDate))
}