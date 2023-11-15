rectangulo={
    alto,
    ancho,

    verAlto: function(){return rectangulo.alto},
    verAncho: function(){return rectangulo.ancho},

    darAlto: function(alto){ rectangulo.alto=alto},
    darAncho: function(ancho){ rectangulo.ancho},

    perimetro: function(){return 2*rectangulo.alto+2*rectangulo.ancho},
    area: function(){return rectangulo.alto * rectangulo.ancho},
}