function testbericht (invoer : string) {
    alert (invoer);
}

//testbericht("koekoek")


function oefening1 (invoer : string, naam : string) {
    let element = document.getElementById(invoer);
    element.innerText = "Hallo "+naam+"!";
}

oefening1("welcome-text", "Sigriet")