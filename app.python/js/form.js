const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
});

const gmail = document.getElementById('mail')

// Listen for the "input" event
gmail.addEventListener('.form-input', validarCorreo);

function validarCorreo() {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    // Get the input value
    var correo = gmail.value;

    var esValido = expReg.test(correo);

    // Use the equality comparison operator (===) for comparison
    if (esValido === true) {
        alert("El correo electrónico es válido");
    } else {
        alert("El correo electrónico NO es válido");
    }
}


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var texto = document.getElementById("texto").value;

    if (nombre === "") {
      alert("Por favor, complete el campo de nombre.");
      return false; // Evita que el formulario se envíe
    }
    
    if (mail === "") {
      alert("Por favor, complete el campo de Mail.");
      return false; // Evita que el formulario se envíe
    }

    if (texto === "") {
        alert("Por favor, complete el campo de Mensaje.");
        return false; // Evita que el formulario se envíe
      }

    return true; // Permite que el formulario se envíe
}
