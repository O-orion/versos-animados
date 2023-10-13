class Footer {
    constructor () {
        this.filtroTurbulencia = document.getElementById('filtro-turbulencia')
     }

     efeitoOndinha() {
        TweenMax.to(this.filtroTurbulencia, 20, { 
            attr: {
                baseFrequency: 0.02,
             }, 
             repeat: -1, 
            yoyo: true 
         })
     }
}

export { Footer }