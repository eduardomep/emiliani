$(document).ready(function() {
    $('.btn-descargar').hover(function(){
        $('.btn-descargar').addClass('btn-descargar-efecto');
    },function(){
        $('.btn-descargar').removeClass('btn-descargar-efecto');
    });

    $('#btn-inicio').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/fondo-carreras.jpg)"});
    });
    $('#btn-electronica').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/electronica.jpg)"});
    });
    $('#btn-electricidad').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/electricidad.jpg)"});
    });
    $('#btn-mecanica').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/mecanica.jpg)"});
    });
    $('#btn-computacion').on("click", function(){
       $('#carreras_general').css({"background-image":"url(img/computacion.jpg)"});
    });
    $('#btn-dibujo').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/dibujo.jpg)"});
    });
    $('#btn-ciencias').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/ciencias.jpg)"});
    });
     $('#btn-basicos').on("click", function(){
        $('#carreras_general').css({"background-image":"url(img/basico.jpg)"});
    });

});
