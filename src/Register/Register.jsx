import React, { useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import "./Register.css";
const Register = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Container className="py-4">
        <h1 className="text-center fw-bold">CURD PRERATION IN REACT JS</h1>
        <Button
          onClick={() => setModal(true)}
          className="text-white border-0 btn-design">
          <i className="fa fa-plus"></i> Add
        </Button>
        {/*==== table section =====*/}
        <Table striped border hover className=" text-center mt-5">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Image</th>
              <th>Cloth Name</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td>T-shirt</td>
              <td>Red</td>
              <td>M</td>
              <td>520$</td>
              <td>1</td>
              <td>Lorem ipsum dolor</td>
              <td>
                <i className="fa fa-edit "></i>
                <i className="fa fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </Table>
        <Modal show={modal} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Sr.</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Choose Your Color</option>
                  <option value="1">Red</option>
                  <option value="2">Blue</option>
                  <option value="3">Green</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="M"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="L"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="XL"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button className="w-100 mt-2 mb-3">Add New</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Register;
