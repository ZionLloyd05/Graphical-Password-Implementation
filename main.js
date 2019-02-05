window.addEventListener('load', function () {
    generate()

    $("#grids").on("click", ".grid", function () {
        let value = $(this).text()
        alert("You click " + value)
    })

    $("#clearButton").on("click", function () {
        $("#grids").html(" ")
    })
})

function generate() {
    let value = 10

    let content = ""
    let num = 1
    for (let i = 1; i <= value; i++) {
        for (let j = 1; j <= 5; j++) {
            if (j === 1) {
                content += "<div class='row'><div class='grid' id='grid" + num + "'>" + num + "</div>"
            } else if (j === 5) {
                content += "<div class='grid' id='grid" + num + "'>" + num + "</div></div>"
            } else {
                content += "<div class='grid' id='grid" + num + "'>" + num + "</div>"
            }
            num++
        }
    }
    $("#grids").html(content)
}