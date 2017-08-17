class Library {
    items: Array<Item> = [];
    movies: Array<Movie> = [];
    books: Array<Book> = [];

    constructor(movies: Array<Movie> = [],
                books: Array<Book>) {
        // let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        // let mobyDick = new Book("Moby Dick",new Author("Herman Malville"),"Drama","About a big fish");
        //
        // this.items.push(matrix);
        // this.items.push(mobyDick);


        console.log("Building library");
        this.movies = movies;
        console.log("Received " + this.movies.length + " movies.");
        this.books = books;
        console.log("Received " + this.books.length + " books.");
        this.merge();
        console.log("Library contains " + this.items.length + " items.");
    }

    merge() {
        this.items=this.items.concat(this.movies).concat(this.books);
    }

    getAll(): Array<Item> {
        console.log("Getting all items");
        return this.items;
    }

    static fromJSON(data: any): Library {
        console.log("Parsing books");
        let tmpBooks = data.books.map(rawBook => Book.fromJSON(rawBook));
        console.log("Parsing movies");
        let tmpMovies = data.movies.map(rawMovie => Movie.fromJSON(rawMovie));

        return new Library(tmpMovies, tmpBooks)
    }

    publishItems(): void { //Nu oefening 3 af is wordt deze niet meer gebruikt
        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }
}