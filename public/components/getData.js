function getUser() {
  return fetch('http://localhost:3000/getData')
    .then((res) => res.json())
    .catch(console.log('ERRRORRRR'))
}
