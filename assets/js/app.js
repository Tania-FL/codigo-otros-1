const baseEndpoint = 'https://api.github.com';
const usersEndpoint = ${baseEndpoint}/users;
const $n = document.querySelector('.name'); //Este está mal escrito porque para llamar a una clase, se debe poner .name
const $b = document.querySelector('.blog');//Este está mal porque no es un ID, sino una clase, por lo tanto sería .blog
const $l = document.querySelector('.location'); //Este no apunta a nada porque no existe una clase="location"

async function displayUser(username) { /* Faltaba agregar async */
  try{ //Se agregó un Try y un Catch
  $n.textContent = 'cargando...';
  const response = await fetch(${usersEndpoint}/${username}); /* response no está siendo llamada en ninguna parte. Posiblemente querría decir usersEndpoint */
  const data = await response.json()
  console.log(data);
  $n.textContent = ${data.name}; //Se cambiaron las comillas para un correcto funcionamiento
  $b.textContent = ${data.blog};
  $l.textContent = ${data.location};
}
} catch (error) {
  console.log(error);
}



getAllProducts();

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = Algo salió mal: ${err}
}

displayUser('stolinski').catch(handleError);