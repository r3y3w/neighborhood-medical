import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { v4 } from "uuid";
const Gallery = () => {

  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);
  
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={5}>
            <h6 className="aBoutUsH4">Health Fair - March 25, 2023 </h6>
            {imageUrls.map((url) => {
               return <img src={url} />;
                })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
