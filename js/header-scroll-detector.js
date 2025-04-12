const header = document.querySelector(".header")

function scrollDetected() {
    if (window.scrollY > 0) {
        console.log("EEE")
        header.classList.add("header_non-top")
    } else {
        header.classList.remove("header_non-top")
        console.log("DSD")
    }
}

document.addEventListener('scroll', function(event) {
    scrollDetected()
  })
