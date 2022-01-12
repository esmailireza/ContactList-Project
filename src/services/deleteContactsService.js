import http from "./httpService";

export default function deleteOneContatc(id) {
  return http.delete(`/contacts/${id}`);
}
