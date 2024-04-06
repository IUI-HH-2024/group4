function toggleMenu() {

   var x = document.getElementsByClassName("links")
   var icon = document.getElementById("icon")
        document.getElementById("mobile-links").classList.toggle('showing')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-x')
    
}