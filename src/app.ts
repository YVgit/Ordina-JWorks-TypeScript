function publishItems(title: string, genre: string, description: string, articleArg: HTMLElement): void {

    let article: HTMLElement = document.createElement("article")
    article.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p>" + genre + "</p>" +
        "<span>" + description + "</span>";


    document.getElementById("items").appendChild(article);

}

//publishItems("Matrix", "Thriller", "Did you know, Neo is the one?");

//publishItems("Moby Dick", "Drama", "Is this fish for real?");


class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}


class Author {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


interface Rating {
    age: number;
    name: string;
}

abstract class Item {
    title: string;
    genre: string;
    description: string;

    constructor(title: string,
                genre: string,
                description: string) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }

    abstract render(element: HTMLElement): void ;
}

class Movie extends Item implements Rating {
    age: number;
    name: string;

    constructor(title: string
        , genre: string
        , description: string
        , age: number
        , name: string) {
        super(title, genre, description);
        this.age = age;
        this.name = name;
    }

    render(element: HTMLElement): void {
        publishItems(this.title, this.genre, this.description, element);
    }
}

class Book extends Item {
    name: string;
    author: string;

    constructor(title: string
        , genre: string
        , description: string
        , author: string) {
        super(title, genre, description);
        this.name = name;
        this.author = author;
    }

    render(element: HTMLElement): void {
        publishItems(this.title, this.genre, this.description, element);
    }
}

class Library {
    items: Array<Item> = [];

    constructor() {console.log("constructing");
        this.items.push(new Movie("Inception", "Heist", "Dreaming stuff", 10, "tieners"));
        this.items.push(new Movie("The Dark Knight", "Superhero", "Why so serious", 16, "pubers"));
        this.items.push(new Book("Harry Potter", "Fantasy", "Wingardium Leviosa", "JK Rowling"));
        this.items.push(new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", 10, "tieners"));
        this.items.push(new Book("Moby Dick", "Drama", "Is this fish for real?","haai dunno"));
        console.log("constructingstop");
    }

    showAll() {console.log("xxx");
        for(let item of this.items) {
            item.render(null);
        }
    }
}

console.log("constructingstart");
let lib:Library = new Library();
console.log("befroe");
lib.showAll();
console.log("after");