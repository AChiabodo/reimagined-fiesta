book = {author : "jhon"  , pages : 1000};

book2  = Object.assign({},book);
book2.pages = 12;
console.log(book2);