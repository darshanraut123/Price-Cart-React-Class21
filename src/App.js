import React from "react";
import ReactDOM from "react-dom";
import {Button} from "react-bootstrap"
import Card from "./Components/Card";
function App(){

    let data = [
        {

            cost : 'FREE',
            price: '0',
            period: 'month',
            users: 'Single',
            storage:'5GB Storage',
            publicProjects:'Unlimited Public Projects',
            access:'Community Access',
            privateProjects:'Restricted Private Projects',
            support:'Dedicated Phone Support',
            domain:'Charged Subdomain',
            reports:'No Status Reports'

        },
        {

            cost : 'PLUS',
            price: '9',
            period: 'month',
            users: '5 Users',
            storage:'50GB Storage',
            publicProjects:'Unlimited Public Projects',
            access:'Community Access',
            privateProjects:'Unlimited Private Projects',
            support:'Dedicated Phone Support',
            domain:'Limited Free Subdomain',
            reports:'No Status Reports'

        },
        {

            cost : 'PRO',
            price: '49',
            period: 'month',
            users: 'Unlimited Users',
            storage:'150GB Storage',
            publicProjects:'Unlimited Public Projects',
            access:'Community Access',
            privateProjects:'Unlimited Private Projects',
            support:'Dedicated Phone Support',
            domain:'Unlimited Free Subdomain',
            reports:'Monthly Status Reports'

        }



    ];


return (


<section className="pricing py-5">
  <div className="container">
    <div className="row">
        {
            data.map(d=><Card obj={d}></Card>)
        }
    </div>
  </div>
</section>

);


}

export default App;