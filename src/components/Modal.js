import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Test from './Test';
import './Modal.css'


class MyVerticallyCenteredModal extends React.Component {

    render() {
      return (
        <div>
          <ModalMaker/>
        </div>
      );
    };
  }
  
  function MyVerticallyCenteredModalFunction(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center" style={{ color: 'rgb(119, 119, 119)'}}>
            <div>Nepal Data</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Test />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ModalMaker() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar style={{float:'right',}}>
        <Button style={{borderRadius: 10, height: 40}} onClick={() => setModalShow(true)} variant="info">More</Button>
        <MyVerticallyCenteredModalFunction
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  
  export default MyVerticallyCenteredModal;