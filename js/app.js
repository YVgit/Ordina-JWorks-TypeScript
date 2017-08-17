var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function publishItems(title, genre, description, element) {
    var article = document.createElement("article");
    article.innerHTML =
        "<h3>" + title + "</h3>" +
            "<p>" + genre + "</p>" +
            "<span>" + description + "</span>";
    element.appendChild(article);
}
//publishItems("Matrix", "Thriller", "Did you know, Neo is the one?");
//publishItems("Moby Dick", "Drama", "Is this fish for real?");
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var Author = (function () {
    function Author(name) {
        this.name = name;
    }
    return Author;
}());
var Item = (function () {
    function Item(title, genre, description) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }
    return Item;
}());
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, age, name) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    Movie.prototype.render = function (element) {
        publishItems(this.title, this.genre, this.description, element);
    };
    return Movie;
}(Item));
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, genre, description, author) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.name = name;
        _this.author = author;
        return _this;
    }
    Book.prototype.render = function (element) {
        publishItems(this.title, this.genre, this.description, element);
    };
    return Book;
}(Item));
var Library = (function () {
    function Library() {
        this.items = [];
        console.log("constructing");
        this.items.push(new Movie("Inception", "Heist", "Dreaming stuff", 10, "tieners"));
        this.items.push(new Movie("The Dark Knight", "Superhero", "Why so serious", 16, "pubers"));
        this.items.push(new Book("Harry Potter", "Fantasy", "Wingardium Leviosa", "JK Rowling"));
        this.items.push(new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", 10, "tieners"));
        this.items.push(new Book("Moby Dick", "Drama", "Is this fish for real?", "haai dunno"));
        console.log("constructingstop");
    }
    Library.prototype.showAll = function () {
        console.log("xxx");
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.render(document.getElementById("items"));
        }
    };
    return Library;
}());
console.log("constructingstart");
var lib = new Library();
console.log("befroe");
lib.showAll();
console.log("after");
//# sourceMappingURL=app.js.map