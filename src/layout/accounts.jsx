import React from "react";
import {Card,Container,Row,Col} from 'react-bootstrap'
class Accounts extends React.Component
{
    render()
    {
        return(
            <div className="col-md-9">
          <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
          <Container>
  <Row>
    <Col> <Card border="primary" style={{ width: '18rem' }}>
        
        <Card.Header><h4>SAVNINGS ACCOUNT</h4></Card.Header>
        <Card.Body>
         
          <Card.Text>
            Account number : 1JSN123LS<br/><br/>
            IFSC Code      : DBS12312<br/><br/>
            Balance : 2000 rs<br/>

          </Card.Text>
        </Card.Body>
      </Card></Col>
    <Col><Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header><h4>CURRENT ACCOUNT</h4></Card.Header>
    <Card.Body>
      <Card.Title>CURRENT</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card></Col>
  </Row>
  </Container>
 
</div>
</div>
</div>
        );
    }
}
export default Accounts;