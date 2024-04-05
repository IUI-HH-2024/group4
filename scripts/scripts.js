function toggleMenu() {

   var x = document.getElementsByClassName("links")
   var icon = document.getElementById("icon")
    for (i=0;i<x.length;i++) {
        if (document.getElementsByClassName("links")[i].style.display == "inline") {
            document.getElementsByClassName("links")[i].style.display = "none"
        }
        else {
        document.getElementsByClassName("links")[i].style.display = "inline"
        }
    }
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-x')
    
}