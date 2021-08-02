import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";

import { getPhotos } from "./../../services/imageService";

const Images = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const reset = useRef(true);
  const photosLength = useRef(0);
  const perPage = 30;

  useEffect(() => {
    reset.current = true;
    photosLength.current = 0;
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    async function getPhotosAsync() {
      if (query === "") return;
      if (!reset.current && photosLength.current > 30) {
        setHasMore(false);
        setPage(1);
        return;
      }
      try {
        const nextPage = reset.current ? 1 : page;
        const { data } = await getPhotos(query, nextPage, perPage);
        const newPhotos = data.results;

        setPhotos((prevPhotos) =>
          reset.current
            ? newPhotos
            : [...new Set([...prevPhotos, ...newPhotos])]
        );
        reset.current = false;
        photosLength.current += perPage;
      } catch (error) {}
    }
    getPhotosAsync();
  }, [query, page]);

  if (photos.length === 0) return null;
  return (
    <InfiniteScroll
      className="imageContianer"
      dataLength={photos.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4 className="imageContianer__loader">Loading...</h4>}
      endMessage={
        <p className="imageContianer__endMessage">
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </InfiniteScroll>
  );
};

export default Images;
