import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";

import { getPhotos } from "./../../services/imageService";

const Images = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const reset = useRef(true);
  const perPage = 30;

  useEffect(() => {
    reset.current = true;
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    async function getPhotosAsync() {
      if (!reset.current && photos.length > 30) {
        console.log("Images run to the bottom");
        setHasMore(false);
        setPage(1);
        return;
      }
      try {
        // Get new data
        const nextPage = reset.current ? 1 : page;
        const { data } = await getPhotos(query, nextPage, perPage);
        const newPhotos = data.results;

        // Put new data based on boolean reset
        const nextSetOfPhotos = reset.current
          ? newPhotos
          : [...new Set([...photos, ...newPhotos])];
        setPhotos(nextSetOfPhotos);
        reset.current = false;
      } catch (error) {
        console.log("Error in receiving photos", error);
      }
    }
    getPhotosAsync();
  }, [query, page]);

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
