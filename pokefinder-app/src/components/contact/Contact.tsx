import { Link, Text } from "@chakra-ui/react";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Text>Hecho por Cristian Rios</Text>
      <Link href="https://github.com/rioscris/pokefinder">Ir al repo</Link>
    </div>
  );
};

export default Contact;
