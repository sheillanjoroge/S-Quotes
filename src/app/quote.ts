export class Quote {
    name: string;
    quote: string;
    author: string;
    date: Date;
    upVote: number;
    downVote:number;
  
    constructor(name: string, quote:string, author:string, date:Date){
        
    this.name=name;
    this.quote=quote;
    this.author=author;
    this.date=date;
    this.upVote=0;
    this.downVote=0;
    }
  
}
