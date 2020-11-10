import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Stl King','"Will, therefore, is the unbroken determination to exercise free choice as well as self-restraint, in spite of the unavoidable experience of shame and doubt in infancy."','Erick Erickson', new Date (2020,10,7)),
    new Quote('Victor Barasa', '"One day, in retrospect, the years of struggle will strike you as the most beautiful."','Sigmund Freud', new Date(2020,11,8)),
    new Quote('Kibet Steve', '“Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.”','BF Skinner', new Date(2020,11,10)),
  ];

  addNewQuote(quote){
    quote.name= quote.name;
    quote.quote= quote.quote;
    quote.author= quote.author;
    this.quotes.push(quote)
  }
  upVote (index){
    this.quotes[index].upVote++;
  }

  downVote (index){
    this.quotes[index].downVote++;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Delete this quote ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  bestquote: number;
  worstquote: number;
  quote:string;
  author:string;
  bestQuote(){
    this.bestquote=0;
    for(let i = 0; i < this.quotes.length; i++){
      if (this.quotes[i].upVote>this.bestquote){
        this.bestquote = this.quotes[i].upVote;
        this.worstquote = this.quotes[i].downVote;
        this.quote = this.quotes[i].quote;
        this.author = this.quotes[i].author;
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
