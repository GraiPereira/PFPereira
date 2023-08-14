var DateTime = luxon.DateTime;

const now = DateTime.now();
console.log(now.toLocaleString(DateTime.DATETIME_MED))


Swal.fire({
    title: 'Ingresa tu nombre',
    input: 'text',
    inputAttributes: {
    autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    showLoaderOnConfirm: true,
    preConfirm: (nombre) => {
    localStorage.setItem("usuario-ingresado", nombre);
    let usuarioJSON = JSON.stringify(nombre);
    localStorage.setItem("usuario", usuarioJSON);
    return nombre;
    },
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
    console.log(result.value);
    }
  });

const prom = Notification.requestPermission();
prom.then(function(param) {
    if (param === "granted") {
        console.log('El usuario ha aceptado recibir notificaciones');
    } else {
        console.log('El usuario ha rechazado recibir notificaciones');
    }
    
});
prom.catch(function(err){
    console.error(err);
});
prom.finally(function(){
    console.log('terminó la promesa');
});