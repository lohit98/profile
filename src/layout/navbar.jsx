import React from "react"; 
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
           
                <div className="col-md-3 pt-0">
          <div className="list-group list-group-flush account-settings-links">
            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/General">General</Link>
            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/ChangePassword">Change password</Link>
            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/Transactions">Recent Transactions</Link>
            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/Accounts">All Accounts</Link>
            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/ClaimedOffers">Claimed offers</Link>
          </div>
          
        </div>
                
                
        );
    }
}

export default Navbar;
