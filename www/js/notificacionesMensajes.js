$(document).ready(function() {
   
    $.ajax({
            type: "POST",
            url: "http://localhost/php/mensajesPanel.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestradeMensajesPanel").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestradeMensajesPanel').html(response).fadeIn();
                $("#muestradeMensajesPanel").listview("refresh");
                
            }
    });

});


$(document).ready(function() {
   
    $.ajax({
            type: "POST",
            url: "http://localhost/php/mensajes.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
          
            success: function(response)
            {
                $('#mns').html(response).fadeIn();
                $("#mns").listview("refresh");
               
            }
    });

});