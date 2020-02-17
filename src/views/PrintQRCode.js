import React from 'react';
import QRCode from 'qrcode.react';

const PrintQRCode = props => {
  const { qrCodeValue } = props.match.params;

  return (
    <div className="center-flex">
      <div style={{height: '50vh'}}>
        <QRCode value={qrCodeValue} size={400} />
      </div>
    </div>
  );
}

export default PrintQRCode;