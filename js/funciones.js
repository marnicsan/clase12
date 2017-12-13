/*Debera tener los registros pares de un color y los registros impares de otro
La primer y ultima articulo deberan tener fuente en bold*/

var numero = 0;

function agregarNoticia(){
    numero++;
    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var estilo = $("#estilo").val();

    var noticiasCant=$("#noticias div").length;
    if(noticiasCant>1){
    	$("#noticias div:last-child").removeClass("primeroUltimo");	
    }
    
    $("#noticias").append("<div id=\"noticia" + numero + "\"></div>");
    $("#noticia" + numero).append("<span id=\"titulo" + numero + "\"></span>")
    $("#titulo" + numero).append(titulo+"<br>")
    $("#noticia" + numero ).append("&emsp;"+contenido);

    $("#noticias div:odd").addClass("impar");
    $("#noticias div:even").addClass("par");
    
    $("#noticias div:first-child").addClass("primeroUltimo");
    $("#noticias div:last-child").addClass("primeroUltimo");
}