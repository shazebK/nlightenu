const date  = require('../utils/current_date');

const articles = [
    {
        id:"234",
        title:"C++",
        content:"C++ is a high level programming language",
        date:"23 Nov 2023",
    },
];

module.exports = class Article{
    constructor(article){
        this.author = article.author;
        this.title = article.title;
        this.content = article.content;
        this.date = date();
    }

    save(){
        this.id = Math.random().toString();
        articles.push(this);
    }

    static fetchAll(){
        return articles;
    }

    static findArticle(id){
        return articles.find(article => article.id === id);
    }
}