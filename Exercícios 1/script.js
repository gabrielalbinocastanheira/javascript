function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 13 //data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <= 12) {
    // Bom Dia!
    img.src = 'manhã.png'
    document.body.style.background = '#FFE4C4'
} else if (hora >= 12 && hora <= 18) {
    // Boa Tarde!
    img.src = 'tarde.png'
    document.body.style.background ='#B8860B'
} else {
    // Boa Noite!
    img.src = 'noite.png'
    document.body.style.background ='#191970'
}
}
