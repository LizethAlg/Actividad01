/*
Descripcion: Actividad01 Ejercicio2 


*/



// Definir los nombres de usuario permitidos y la contraseña válida
const usuariosPermitidos = ['juan', 'pedro', 'maria', 'raul'];
const contrasenaValida = 'D153n0W3b2';

// Solicitar al usuario el nombre de usuario y la contraseña
let nombreUsuario = prompt('Ingrese su nombre de usuario:');
let contrasenaIngresada = prompt('Ingrese su contraseña:');

// Verificar si el nombre de usuario está en la lista de usuarios permitidos y si la contraseña es válida
if (usuariosPermitidos.includes(nombreUsuario.toLowerCase()) && contrasenaIngresada === contrasenaValida) {
    console.log('Bienvenido, ' + nombreUsuario + '. Ha ingresado correctamente.');
} else {
    console.log('Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
}