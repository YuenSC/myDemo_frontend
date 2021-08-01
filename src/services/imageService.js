import HttpService from "./httpService";

const apiEndPoint = "/photos";

export function getPhotos(query, page, perPage) {
  return HttpService.get(
    `/api/${apiEndPoint}?query=${query}&page=${page}&perPage=${perPage}`
  );
}
