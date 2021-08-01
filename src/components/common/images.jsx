import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";

import "../../styles/images.css";
import { getPhotos } from "./../../services/imageService";

const Images = () => {
  const [hasMore, setHasMore] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cat");
  const [page, setPage] = useState(1);
  const perPage = 30;

  useEffect(() => {
    if (photos.length > 90) setHasMore(false);
    async function getPhotosAsync() {
      try {
        const { data } = await getPhotos(query, page, perPage);
        const photos = data.results;
        setPhotos((prevPhotos) => [...new Set([...prevPhotos, ...photos])]);
      } catch (error) {
        console.log("Error in receiving photos");
      }
    }
    getPhotosAsync();
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
