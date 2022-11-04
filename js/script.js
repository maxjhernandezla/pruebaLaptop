let nombreUsuario = "Michi";
let passUsuario = "1234";
let ingresar = false;


function login() {
  for (let i = 3; i >= 0; i--) {
    if (i === 0) {
      alert("Te equivocaste demasiado, pichón!");
      break;
    }

    let nombreElegido = prompt("Ingresa tu nombre de usuario.");
    let passElegida = prompt("Ingresa tu contraseña");

    if (nombreElegido === nombreUsuario && passElegida === passUsuario) {
      alert("Ingreso exitoso. Puedes adoptar una mascota!");
      ingresar = true;
      break;
    }
  }

  return ingresar;
}
login();

if (ingresar) {
  let usuario = "Max";
  function menuPrincipal() {
    let respuestaMenu = prompt(
      "Bienvenido/a " +
        usuario +
        " que tipo de mascota quieres adoptar hoy? \n1- Animales \n2- Peces \n3- Pájaros \n4- Cerrar sesión."
    );

    switch (respuestaMenu) {
      case "1":
        const animal = prompt(
          "Puedes adoptar: \n1- Gato \n2- Perro \n3- Conejo"
        );
        switch (animal) {
          case "1":
            let preguntaAnimal = prompt("Tienes red?");
            preguntaAnimal.toLowerCase();
            if (preguntaAnimal.toLowerCase() === "si") {
              alert("Felicidades por adoptar un mishi!");
              seguirAdoptando();
            } else {
              alert(
                "No puedes adoptar un mishi, tienes que poner una red en tu casa!"
              );
              seguirAdoptando();
              break;
            }
            break;
          case "2":
            alert("Felicitaciones, adoptaste un perrito!");
            seguirAdoptando();
            break;
          case "3":
            alert("Felicitaciones, adoptaste un conejo!");
            seguirAdoptando();
            break;
          default:
            alert("No ingresaste una opción válida");
            seguirAdoptando();
            break;
        }
        break;
      case "2":
        let preguntaPez = prompt("Tienes pecera?");
        preguntaPez.toLowerCase();
        if (preguntaPez.toLowerCase() === "si") {
          alert("Felicidades, puedes adoptar un pez!");
        } else if (preguntaPez.toLowerCase() === "no") {
          alert(
            "No puedes adoptar un pez, primero tienes que comprar una pecera!"
          );
          seguirAdoptando();
          break;
        } else {
          alert("No ingresaste una opción válida.");
          seguirAdoptando();
        }
        const pez = prompt(
          "Puedes adoptar: \n1- Goldfish \n2- Angel \n3- Payaso"
        );
        switch (pez) {
          case "1":
            alert("Felicitaciones, adoptaste un Goldfish");
            seguirAdoptando();
            break;
          case "2":
            alert("Felicitaciones, adoptaste un Pez Ángel!");
            seguirAdoptando();
            break;
          case "3":
            alert("Felicitaciones, adoptaste un Pez Payaso!");
            seguirAdoptando();
            break;
          default:
            alert("No escogiste una opción válida, intentalo de nuevo!");
            seguirAdoptando();
            break;
        }
        break;
      case "3":
        let preguntaPajaro = prompt("Tienes jaula?");
        preguntaPajaro.toLowerCase();
        if (preguntaPajaro.toLowerCase() === "si") {
          alert("Felicidades, puedes adoptar un pajarito!");
        } else if (preguntaPajaro.toLowerCase() === "no") {
          alert(
            "No puedes adoptar un pájaro, primero tienes que comprar una jaula!"
          );
          seguirAdoptando();
          break;
        } else {
          alert("No ingresaste una opción válida.");
          seguirAdoptando();
        }
        const pajaro = prompt(
          "Puedes adoptar: \n1- Cotorra \n2- Loro \n3- Tucán"
        );
        switch (pajaro) {
          case "1":
            alert("Felicidades, adoptaste una cotorra!");
            seguirAdoptando();
            break;
          case "2":
            alert("Felicidades, adoptaste un loro!");
            seguirAdoptando();
            break;
          case "3":
            alert("Felicidades, adoptaste un tucán!");
            seguirAdoptando();
            break;
          default:
            alert("No has ingresado una opción válida.");
            seguirAdoptando();
            break;
        }
        break;
      case "4":
        alert("Has cerrado sesión.");
        break;
      default:
        alert("No has ingresado una opción válida.");
        menuPrincipal();
        break;
    }
  }
  menuPrincipal();

  function seguirAdoptando() {
    let respuestaSeguir = prompt("Quieres seguir adoptando?");

    if (respuestaSeguir.toLowerCase() === "si") {
      menuPrincipal();
    } else if (respuestaSeguir.toLowerCase() === "no") {
      alert("Has cerrado sesión!");
    } else {
      while (
        respuestaSeguir.toLowerCase !== "si" &&
        respuestaSeguir.toLowerCase !== "no"
      ) {
        seguirAdoptando();
        break;
      }
    }
  }
}

alert("Adiós");


function menuPrincipal() {
  let respuestaMenu = prompt(
    "Bienvenido/a " +
      usuario +
      " que tipo de mascota quieres adoptar hoy? \n1- Animales \n2- Peces \n3- Pájaros \n4- Cerrar sesión."
  );

  switch (respuestaMenu) {
    case "1":
      const animal = prompt(
        "Puedes adoptar: \n1- Gato \n2- Perro \n3- Conejo"
      );
      switch (animal) {
        case "1":
          let preguntaAnimal = prompt("Tienes red?");
          preguntaAnimal.toLowerCase();
          if (preguntaAnimal.toLowerCase() === "si") {
            alert("Felicidades por adoptar un mishi!");
            seguirAdoptando();
          } else {
            alert(
              "No puedes adoptar un mishi, tienes que poner una red en tu casa!"
            );
            seguirAdoptando();
            break;
          }
          break;
        case "2":
          alert("Felicitaciones, adoptaste un perrito!");
          seguirAdoptando();
          break;
        case "3":
          alert("Felicitaciones, adoptaste un conejo!");
          seguirAdoptando();
          break;
        default:
          alert("No ingresaste una opción válida");
          seguirAdoptando();
          break;
      }
      break;
    case "2":
      let preguntaPez = prompt("Tienes pecera?");
      preguntaPez.toLowerCase();
      if (preguntaPez.toLowerCase() === "si") {
        alert("Felicidades, puedes adoptar un pez!");
      } else if (preguntaPez.toLowerCase() === "no") {
        alert(
          "No puedes adoptar un pez, primero tienes que comprar una pecera!"
        );
        seguirAdoptando();
        break;
      } else {
        alert("No ingresaste una opción válida.");
        seguirAdoptando();
      }
      const pez = prompt(
        "Puedes adoptar: \n1- Goldfish \n2- Angel \n3- Payaso"
      );
      switch (pez) {
        case "1":
          alert("Felicitaciones, adoptaste un Goldfish");
          seguirAdoptando();
          break;
        case "2":
          alert("Felicitaciones, adoptaste un Pez Ángel!");
          seguirAdoptando();
          break;
        case "3":
          alert("Felicitaciones, adoptaste un Pez Payaso!");
          seguirAdoptando();
          break;
        default:
          alert("No escogiste una opción válida, intentalo de nuevo!");
          seguirAdoptando();
          break;
      }
      break;
    case "3":
      let preguntaPajaro = prompt("Tienes jaula?");
      preguntaPajaro.toLowerCase();
      if (preguntaPajaro.toLowerCase() === "si") {
        alert("Felicidades, puedes adoptar un pajarito!");
      } else if (preguntaPajaro.toLowerCase() === "no") {
        alert(
          "No puedes adoptar un pájaro, primero tienes que comprar una jaula!"
        );
        seguirAdoptando();
        break;
      } else {
        alert("No ingresaste una opción válida.");
        seguirAdoptando();
      }
      const pajaro = prompt(
        "Puedes adoptar: \n1- Cotorra \n2- Loro \n3- Tucán"
      );
      switch (pajaro) {
        case "1":
          alert("Felicidades, adoptaste una cotorra!");
          seguirAdoptando();
          break;
        case "2":
          alert("Felicidades, adoptaste un loro!");
          seguirAdoptando();
          break;
        case "3":
          alert("Felicidades, adoptaste un tucán!");
          seguirAdoptando();
          break;
        default:
          alert("No has ingresado una opción válida.");
          seguirAdoptando();
          break;
      }
      break;
    case "4":
      alert("Has cerrado sesión.");
      break;
    default:
      alert("No has ingresado una opción válida.");
      menuPrincipal();
      break;
  }
}