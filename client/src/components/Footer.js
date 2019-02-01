import React, { Component } from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)"
}

var phantom = {
  display: 'block',
  padding: '20px',
  width: '100%',
}

class Footer extends Component {
    render() {
        return (
            <div>
            <div style={phantom} />
            <div style={style}>
                asşmfaskmfafamfasmfampo
            </div>
        </div>
        );
    }
}

export default Footer;
