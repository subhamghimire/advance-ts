interface Admin {
  name: string;
  role: string;
}

interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if ("role" in usr) {
    usr;
  }
}

// function isAdmin(usr: Admin | User): usr is Admin {
//   return (<Admin>usr).role !== undefined;
// }
