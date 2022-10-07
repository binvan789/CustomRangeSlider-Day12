var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerText = `${percent}%`
    let percentBackground = percent / 100
    body.style.backgroundColor = `rgba(0,0,0,${percentBackground})`
    if (percent < 50) {
        h1.style.color = `rgba(0,0,0,1)`
    }
    else {
        h1.style.color = `rgba(255,255,255,${percentBackground})`
    }
}


range.addEventListener('mousemove', function(e) {
    let processWidth = e.pageX - this.offsetLeft
    let percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess('30')

