import React from "react";
import Table from 'react-bootstrap/Table'
class Offers extends React.Component
{
    render()
    {
        return(
            <div className="col-md-9">
          <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Offer Name</th>
      <th>Promocode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>movies discount</td>
      <td>A1WH12122HH12JJ</td>
    </tr>
    <tr>
      <td>2</td>
      <td>uber Offer</td>
      <td>ASD123DJK12J21H3</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Zomato Offer</td>
      <td>JSDFGHS123LJ</td>
    </tr>
  </tbody>
</Table>
</div>
</div>
</div>
        );
    }
}
export default Offers;