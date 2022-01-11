import http from "./httpService";

function getContacts() {
  return http.get("/contacts");
}

export default getContacts();
