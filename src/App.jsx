    import React from "react"; 
    import Navbar from "./layout/navbar";
    import ChangePass from "./layout/changepass";
    
    import Transaction from "./layout/transaction";
    import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

    
import Profile from "./layout/profile";
import Offers from "./layout/offers";
import Accounts from "./layout/accounts";


    // var Image = ()=>
    // {
    // return <image src='user-profile-bg.jpg'/>
    // }


    class App extends React.Component{
     
        render(){
            return(
                <div className="container light-style flex-grow-1 container-p-y">
                    <div className="card overflow-hidden">
      <div className="row no-gutters row-bordered row-border-light">
                   <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Profile}/>
                        <Route exact path='/General' component={Profile}/>
                        <Route exact path='/Accounts' component={Accounts}/>
                        <Route exact path='/ChangePassword' component={ChangePass}/>
                        <Route exact path='/Transactions' component={Transaction}/>
                        <Route exact path='/ClaimedOffers' component={Offers}/>
                        
                        </Switch>
                    </Router>
                    </div>
                    </div>
                    
                    </div>
            );
        }
    }

    export default App;



