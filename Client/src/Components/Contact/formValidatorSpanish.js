export function validateSpanish(input) {
  let errors = {};

  // Validaciones para el formulario de registro
  if (!input.name) {
    errors.name = "Ingresa tu nombre";
  }

  if (!input.lastName) {
    errors.lastName = "Ingresa tu apellido";
  }

  if (!input.email) {
    errors.email = "Ingresa tu correo electrónico";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
  ) {
    errors.email = "Correo electrónico inválido";
  }

  return errors;
}
