function detalleReto(reto){
    $.ajax({
        type: "POST",
        url: "http://localhost/php/mostrarDetalleRetos.php",
        cache: false,
        data: "nombre="+usuario+"&reto="+reto,
        beforeSend: function() {
            $("#detalleReto").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleReto').html(response).fadeIn();
            $("#detalleReto").listview("refresh");
           
        }
    }); 
}