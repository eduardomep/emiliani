$(document).ready(function() {
    $('.btn-descargar').hover(function(){
        $('.btn-descargar').addClass('btn-descargar-efecto');
    },function(){
        $('.btn-descargar').removeClass('btn-descargar-efecto');
    });

    $('#btn-inicio').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/fondo-carreras.JPG)"});
    });
    $('#btn-electronica').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/electronica.JPG)"});
    });
    $('#btn-electricidad').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/electricidad.JPG)"});
    });
    $('#btn-mecanica').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/mecanica.JPG)"});
    });
    $('#btn-computacion').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/computacion.JPG)"});
    });
    $('#btn-dibujo').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/dibujo.JPG)"});
    });
    $('#btn-ciencias').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/ciencias.JPG)"});
    });
     $('#btn-basicos').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/basico.JPG)"});
    });

});
