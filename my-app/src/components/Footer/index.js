import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import ImageWrapper from "../ImageWrapper";

import footerImg from "../../assets/images/footer.png";

import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brands-list">
        <ContentWidthLimiter>
          <ImageWrapper src={footerImg} name="footer" />
        </ContentWidthLimiter>
      </div>
      <ContentWidthLimiter>
        <div className="footer__copyright-block">
          Copyright &copy; 2014-2020 Cssauthor.com
        </div>
      </ContentWidthLimiter>
    </footer>
  );
}
