import React from "react";
import { useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import LeftbarCards from "./LeftbarCards";
import { useState } from "react";
import { Card as MUiCard } from "@mui/material";
import { Card } from "@tremor/react";

const categories = [
  "Integrated Circuits (ICs)",
  "Discrete Semiconductors",
  "Board Mount Powerful Supplies",
  "Off Board Powerful Supplies",
  "Relays",
  "Resistors",
  "RF /IF & RFID",
  "Sensors",
  "Optoelectronics",
  "Switches",
  "Capacitors",
  "Connectors",
  "Crystals",
];

function Leftbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleShow = (title) => {
    setTitle(title);
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <MUiCard className="banner-leftbar">
      {categories.map((category, index) => (
        <OverlayTrigger
          key={index}
          trigger="manual"
          placement="right"
          show={show && title === category}
          overlay={
            <Popover
              id={`popover-positioned-${index}`}
              style={{ zIndex: "999" }}
            >
              <Popover.Header as="h3"></Popover.Header>
              <Popover.Body>
                <div
                  onMouseEnter={() => handleShow(category)}
                  onMouseLeave={handleHide}
                >
                  <Card style={{ zIndex: "999" }}>
                    <LeftbarCards title={category} />
                  </Card>
                </div>
              </Popover.Body>
            </Popover>
          }
          rootClose
          onHide={handleHide}
          delay={{ show: 250, hide: 400 }}
        >
          <span
            style={{ fontSize: "14px", marginBottom: "4px" }}
            onMouseEnter={() => handleShow(category)}
            onMouseLeave={handleHide}
          >
            {category}
          </span>
        </OverlayTrigger>
      ))}
      <span onClick={() => navigate("/categories")}>ALL CATEGORIES</span>
    </MUiCard>
  );
}

export default Leftbar;
