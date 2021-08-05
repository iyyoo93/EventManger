import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import getModalStyle, { useStyles } from '../../util/ModalStyle.js';

function EventModal({setModal, isOpen, children}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
      <Modal
        open={isOpen}
        onClose={() => setModal(false)}
      >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
      </Modal>
  );
}

export default EventModal;
