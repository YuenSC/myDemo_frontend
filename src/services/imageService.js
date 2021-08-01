import HttpService from "./httpService";

const apiEndPoint = "api/photos";

export function getPhotos(query, page, perPage) {
  return HttpService.get(
    `${apiEndPoint}?query=${query}&page=${page}&perPage=${perPage}`
  );
}
