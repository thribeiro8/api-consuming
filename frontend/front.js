async function getContent() {
  try {
    const response = await fetch('http://localhost:9783/');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getContent();

function show(people) {
  let result = '';

  for (let person of people) {
    result += `<li>${person.name}</li>`;
  }

  document.querySelector('main').innerHTML = result;
}
