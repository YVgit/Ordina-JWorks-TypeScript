
/*
let library:Library = new Library();
library.publishItems();
*/

 //activate when you finished exercise 3
let jsonParser = new JSONParser();

jsonParser.getJSON("items.json", data => {
    console.log("Parsing");
    let library:Library = Library.fromJSON(data);

    console.log("Get HTML location and rendering");
    var itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));

    console.log("Parsing and rendering complete");
});
