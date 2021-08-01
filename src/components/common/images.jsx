import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";
import HttpService from "./../../services/httpService";

import "../../styles/images.css";

const Images = () => {
  const [hasMore, setHasMore] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cat");
  const [page, setPage] = useState(1);
  const perPage = 30;

  useEffect(() => {
    if (photos.length > 210) setHasMore(false);
    async function getPhotos() {
      console.log();
      const { data } = await HttpService.get(
        `/api/photos?query=${query}&page=${page}&perPage=${perPage}`
      );
      const photos = data.results;
      setPhotos((prevPhotos) => [...new Set([...prevPhotos, ...photos])]);
    }
    getPhotos();
  }, [page]);

  return (
    <div className="container">
      <InfiniteScroll
        className="imageContianer"
        dataLength={photos.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {photos.map((photo) => (
          <Image key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
