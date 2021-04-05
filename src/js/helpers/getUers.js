const getRandomNumber = () => Math.floor(Math.random() * 20);

export async function getUsers() {
  const api = `https://randomuser.me/api/?results=${getRandomNumber()}`;
  const users = await fetch(api);
  const response = await users.json();
  console.log(response);
}
