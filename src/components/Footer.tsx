import React from "react";
import styled from "@emotion/styled";
import { REGULAR_SPACE } from "../config/config";

const FooterStyle = styled.footer`
  margin-top: ${REGULAR_SPACE * 2}px;
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      Made with 💜 in{" "}
      <a href="https://github.com/franfaccin/mastermind" target="_blank">
        GitHub
      </a>
    </FooterStyle>
  );
};

export default Footer;
