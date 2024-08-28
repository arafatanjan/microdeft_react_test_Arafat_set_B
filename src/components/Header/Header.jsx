import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./header.css"

const Header = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Send data to server or handle it as needed
      };

    return (
        <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <h2>Submit Form</h2>
        <div style={{ margin: '10px 300px', border: '1px solid black', padding: '30px 40px' }} >
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
  
        <Form as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form>
        
  
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 1, offset: 5}}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
      </div>

      <div style={{ margin: '100px 300px', border: '1px solid black', padding: '30px 40px' }}> 
      <form class="form">
  <div class=" row mb-3" >
    <label for="email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" id="email" class="form-control" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="password" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" id="password" class="form-control" placeholder="Password"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="email2" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" id="email2" class="form-control" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="password2" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" id="password2" class="form-control" placeholder="Password"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="email3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" id="email3" class="form-control" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="password3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" id="password3" class="form-control" placeholder="Password"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <div class="col-sm-1 offset-sm-5">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
      </div>

      
      <div style={{ margin: '100px 300px', border: '1px solid black', padding: '30px 40px' }}>
      <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          placeholder="Enter product title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          className="form-control"
          placeholder="Enter stock quantity"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          className="form-control"
          placeholder="Enter price"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="discount">Discount (%)</label>
        <input
          type="number"
          step="0.01"
          id="discount"
          name="discount"
          className="form-control"
          placeholder="Enter discount"
          required
        />
      </div>

      <input type="hidden" id="email" name="email" value="your-email@example.com" />

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
      </div>
    );
};

export default Header;