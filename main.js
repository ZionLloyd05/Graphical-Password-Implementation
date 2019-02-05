window.addEventListener('load', function () {
    generate()

    // $("#grids").on("click", ".grid", function () {
    //     let value = $(this).text()
    //     alert("You click " + value)
    // })

    $("#clearButton").on("click", function () {
        $("#grids").html(" ")
    })
})

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('grid')) {
        let btnId = e.target.getAttribute('id')

        let grid = document.getElementById(btnId)
        grid.style.transform = 'scale(0.85)'
        grid.style.background = '#01010c8b'
    }
})

function generate() {
    let value = 12

    let content = ""
    let num = 1
    for (let i = 1; i <= value; i++) {
        for (let j = 1; j <= 5; j++) {
            if (j === 1) {
                content += "<div class='row'><div class='grid' id='grid" + num + "'></div>"
            } else if (j === 5) {
                content += "<div class='grid' id='grid" + num + "'></div></div>"
            } else {
                content += "<div class='grid' id='grid" + num + "'></div>"
            }
            num++
        }
    }
    $("#grids").html(content)
}