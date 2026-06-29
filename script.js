function admin(event) {

let pass = prompt("What is the magic word?");

    if (pass === "cza") {
        window.location.href = "adminpage.html"; 
    } else {
        alert("OOPS! Wrong magic word...");
    }
}
