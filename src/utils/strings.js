// Funcion para validar si e sun correo
export function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
    );
}

//Funcion para validar el password y ver si tiene mas de 8 caracteres.
export function isPasswordValid(password) {
    // Si el texto es mayor o igual a 8 caracteres retorna true si no false
    return password.length >= 8
}