var pathname = document.location.pathname
var splitted = pathname.split("/")
var current = document.getElementById(splitted[splitted.length - 1])
current.className += " active"