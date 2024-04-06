function toggleMenu() {

   var x = document.getElementsByClassName("links")
   var icon = document.getElementById("icon")
    for (i=0;i<x.length;i++) {
        x[i].classList.toggle("mobile")
        
    }
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-x')
    
}