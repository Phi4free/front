import api from "../../services/api";

export async function fetchArticle(id) {
  try {
    let response = await api.get(`lerArtigo/?id=${id}`);
    let body = await response.json();
    return { status: response.status, body };
  } catch (error) {
    console.log(error.message);
  }
}
