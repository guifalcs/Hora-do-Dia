var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date() 
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'photomorning.jpg'
    document.body.style.background = "#ffdb58"
} else if (hora >= 12 && hora <= 18) {

    img.src = 'photoafternoon.jpg'
    document.body.style.background = "#8b4513"
} else {
    img.src = 'photonight.jpg'
    document.body.style.background = "#111111"
}

