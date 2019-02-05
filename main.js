let dropArea = document.getElementById('grids')

window.addEventListener('load', function () {

    $("#clearButton").on("click", function () {
        $("#grids").html(" ")
    })

    // preventing default  behaviours and stopping the events from bubbling up
    ;
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    })

    // adding highlight class on dragenter and dropover
    ;
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
    })

    // removing highlight class on dragenter and dropover
    ;
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

})

// kicks off when user drops the file
dropArea.addEventListener('drop', handleDrop, false)

document.addEventListener('click', function (e) {
    // let points = []
    if (e.target.classList.contains('grid')) {
        let btnId = e.target.getAttribute('id')

        let grid = document.getElementById(btnId)
        grid.style.transform = 'scale(0.85)'
        grid.style.background = '#01010c8b'

        // points.push(e.target.x, e.target.y)
        console.log(grid.offsetTop + ' ' + grid.offsetLeft)
    }
    // console.log(points)
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

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}


function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('highlight')
}

function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files)
}

function handleFiles(files) {
    ([...files]).forEach(file => {
        // console.log(file)
        loadFile(file)
    })
}

function loadFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        dropArea.style.backgroundImage = "url(" + reader.result + ")"
        generate()
        dropArea.style.height = 'auto'
        dropArea.style.padding = '0'
    }
}