import React from 'react';
import QRCode from 'qrcode.react';

export default class PrintableQRCode extends React.Component {
  render() {
    return (
      <div className="center-flex flex-column h-100-vh">
        <h1
          style={{ fontWeight: 600, marginBottom: '30px', color: '#000' }}
        >
          {this.props.eventName}
        </h1>
        <QRCode value={this.props.qrCodeValue} size={600} />
      </div>
    );
  }
}