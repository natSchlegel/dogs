import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "../Photo/PhotoContent";
import { PHOTO_GET } from "../../Api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

function handleOutsideClick(event){
  if(event.target === event.currentTarget){
    setModalPhoto(null);
  }

}

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
     
    </div>
  );
};

export default FeedModal;
