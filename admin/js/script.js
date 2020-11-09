function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline-block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.display = "inline-block";
    document.getElementById("close").style.display = "none";
}
