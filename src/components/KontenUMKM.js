import React from "react";
import "../styles/Destinasi.css";
import data from "../data/umkm2.json";
import parse from "html-react-parser";
import { Container,Col, ButtonGroup, Dropdown,DropdownButton, Row } from "react-bootstrap";
const KontenUMKM = (props) => {
  const umkms = data.umkms;
  return (
    <Container>
      {umkms
        .filter((umkm) => umkm.id == props.umkmID)
        .map((filteredumkms) => (
          <Row className="mt-5 mb-4">
            <Col lg="8">
              <p className="title">{filteredumkms.city}</p>
              <p className="konten-intro">{filteredumkms.intro1}</p>
              <p className="title2">{filteredumkms.title2}</p>
              <p className="konten-intro">{filteredumkms.intro2}</p>
              {filteredumkms.destination.map((filteredumkm) => (
                <div>
                  <p className="nama-destinasi">{filteredumkm.name}</p>
                  <img
                    className="img-wisata"
                    alt=""
                    src={require(`../images/other/${filteredumkm.img_folder}/${filteredumkm.picture}`)}
                  ></img>
                  <div className="description">
                    {parse(filteredumkm.description)}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        ))}
        							<>
							<center>
							<ButtonGroup>
							{umkms.map((umkm) => (
							 <DropdownButton as={ButtonGroup} title="UMKM" id="bg-nested-dropdown">
								<Dropdown.Item key={umkm.id} href={`/Destinasi/${umkm.id}`}>{umkm.city}</Dropdown.Item>
								</DropdownButton>
								))}
								</ButtonGroup>								
						 </center>
						 </>
    </Container>
  );
};

export default KontenUMKM;