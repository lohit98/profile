import React from "react";

class ChangePass extends React.Component
{

render ()
{

return(
    <div className="col-md-9">
    <div className="tab-content">
    <div className="tab-pane fade active show" id="account-change-password">
    <div className="card-body pb-2">

      <div className="form-group">
        <label className="form-label">Current password</label>
        <input type="password" className="form-control" defaultValue="password"/>
      </div>

      <div className="form-group">
        <label className="form-label">New password</label>
        <input type="password" className="form-control" defaultValue="password"/>
      </div>

      <div className="form-group">
        <label className="form-label">Repeat new password</label>
        <input type="password" className="form-control" defaultValue="password"/>
      </div>

    </div>
  </div>
  </div>
  </div>
);
}
}
export default ChangePass;