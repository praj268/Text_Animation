function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent

    var splittedText = h1text.split("")

    var halfvalue = Math.floor(splittedText.length / 2)
    var clutter = ""

    splittedText.forEach(function(e, index) {
        if (index < halfvalue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })
    h1.innerHTML = clutter
}
breakTheText()

gsap.from("h1 .a", {
    y: 50,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})
gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})