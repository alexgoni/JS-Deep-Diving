const request1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const request2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const request3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.all([request1(), request2(), request3()])
  .then(console.log)
  .catch(console.error);
