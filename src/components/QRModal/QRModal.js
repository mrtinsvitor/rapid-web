import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "shards-react";

const QRModal = ({ open, toggle, qrCodeValue }) => {
  return (
    <>
      <Modal size="sm" open={open} toggle={toggle} centered>
        <ModalBody>
          <div className="center-flex">
            <QRCode value={qrCodeValue} size={160} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Link to={`/imprimir-qr/${qrCodeValue}`} target="_blank">Imprimir</Link>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default QRModal;