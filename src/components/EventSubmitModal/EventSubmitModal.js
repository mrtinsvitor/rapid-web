import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode.react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "shards-react";

import PrintableQRCode from '../PrintableQRCode';

const EventSubmitModal = ({ open, toggle, qrCodeValue, eventName, history }) => {
  console.log('history', history)
  const componentRef = useRef();

  return (
    <>
      <Modal size="sm" open={open} toggle={toggle} centered>
        <ModalHeader>
          Evento criado com sucesso
        </ModalHeader>
        <ModalBody>
          <div className="center-flex">
            <QRCode value={qrCodeValue} size={160} />
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: 'space-around' }}>
          <ReactToPrint
            trigger={() => <Button pill size="md">Imprimir</Button>}
            content={() => componentRef.current}
          />
          <Button pill size="md" theme="success" onClick={() => history.replace('/eventos')}>Finalizar</Button>
        </ModalFooter>
        <div style={{ display: 'none' }}>
          <PrintableQRCode
            ref={componentRef}
            qrCodeValue={qrCodeValue}
            eventName={eventName}
          />
        </div>
      </Modal>

    </>
  );
}


export default EventSubmitModal;