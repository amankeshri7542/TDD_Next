let users = [];
let lastId = 0;

export function getUsers() {
  return users;
}

export function addUser(user) {
  lastId++;
  const newUser = { ...user, id: lastId };
  users.push(newUser);
  return newUser;
}

export function resetUsers() {
  users = [];
  lastId = 0;
}
