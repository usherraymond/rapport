function hello() {
    let d = document.getElementById("select");
    let text = d.options[d.selectedIndex].value;
    document.body.style.backgroundColor = text;
}