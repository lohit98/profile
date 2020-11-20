import React from "react"

class Profile extends React.Component
{

render ()
{

return(
    <div className="col-md-9">
          <div className="tab-content">
    <div className="tab-pane fade active show" id="account-general">

              
              <hr className="border-light m-0"/>

              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control mb-1" defaultValue="lohit"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" defaultValue="Chandra Lohit"/>
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input type="text" className="form-control mb-1" defaultValue="chandralohit1234@gmail.com"></input>
                 
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" defaultValue="999999999"/>
                </div>
              </div>

            </div>
            </div>
            </div>
);
}
}
export default Profile;