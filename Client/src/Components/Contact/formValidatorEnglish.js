export function validateEnglish(input) {
  let errors = {};

  // Validaciones para el formulario de registro
  if (!input.name) {
    errors.name = "Enter your name";
  }

  if (!input.lastName) {
    errors.lastName = "Enter your last name";
  }

  if (!input.email) {
    errors.email = "Enter your email";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
  ) {
    errors.email = "Invalid email";
  }

  return errors;
}
