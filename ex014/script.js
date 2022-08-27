function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9a'
    } else if (hora >= 12 && hora < 18){
        //Bom Tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}