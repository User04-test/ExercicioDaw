function enviarFormulario(form) {
    let cumpleaños = new Date(form.fecha.value), hoy = new Date().getTime(), milisegundos, resultado, dias=0, horas=0, minutos=0, segundos=0;

    cumpleaños.setFullYear(new Date().getFullYear());
    milisegundos = cumpleaños.getTime();
    resultado = parseInt((milisegundos - hoy) / 1000);
    alert(typeof(resultado));

    while(resultado > 60) {
        if (resultado - 86400 > 86400) {
            resultado -= 86400;
            dias++;
        }else if (resultado - 3600 > 3600) {
            resultado -= 3600;
            horas++;
        }else {
            resultado -= resultado - 60;
            minutos++;
        }
        
    }
    segundos = 59;
    
    document.write( `${dias} Dias, ${horas} Horas, ${minutos} Minutos y ${segundos} Segundos`);

    
}