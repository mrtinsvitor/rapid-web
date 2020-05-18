import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode.react';
import { Button, Modal, ModalBody, ModalFooter } from "shards-react";

import PrintableQRCode from '../PrintableQRCode';

const QRModal = ({ open, toggle, qrCodeValue, eventName }) => {
  const componentRef = useRef();

  return (
    <>
      <Modal size="sm" open={open} toggle={toggle} centered>
        <ModalBody>
          <div className="center-flex">
            <QRCode value={qrCodeValue} size={160} />
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: 'center' }}>
          <div>
            <ReactToPrint
              trigger={() => <Button pill size="lg">Imprimir</Button>}
              content={() => componentRef.current}
            />
            <div style={{ display: 'none' }}>
              <PrintableQRCode
                ref={componentRef}
                qrCodeValue={qrCodeValue}
                eventName={eventName}
              />
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}


export default QRModal;