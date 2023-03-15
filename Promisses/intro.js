function getSomeData() {
  return new Promise((resolve, reject) => {
    // Simulando uma chamada assíncrona para uma API externa
    setTimeout(() => {
      const data = 'Deu certo';
      resolve(data);
    }, 1000);
  });
}



getSomeData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });