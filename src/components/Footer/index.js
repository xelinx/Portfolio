import React from "react";

const hStyle = {
    textShadow: "1px 1px 1px #000000",
    fontSize: "1vw",
    paddingTop: "60px",
    color: "white",
};

function Footer() {
    return (
        <div style={ hStyle }>
            <footer style={{ backgroundColor: "#9867C5" }} className="footer mt-auto py-3 text-white">
        <div className="container">Thank you for visiting</div>
      </footer>
        </div>
    )
}

export default Footer;