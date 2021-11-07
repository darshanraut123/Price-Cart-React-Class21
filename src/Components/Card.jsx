import React from "react";

function Card(props){

    // cost : 'PRO',
    // price: '49',
    // period: 'month',
    // users: 'Unlimited Users',
    // storage:'150GB Storage',
    // publicProjects:'Unlimited Public Projects',
    // access:'Community Access',
    // privateProjects:'Unlimited Private Projects',
    // support:'Dedicated Phone Support',
    // domain:'Unlimited Free Subdomain',
    // reports:'Monthly Status Reports'

    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.obj.cost}</h5>
            <h6 className="card-price text-center">${props.obj.price}<span className="period">/{props.obj.period}</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.obj.users}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.obj.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.obj.publicProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.obj.access}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.obj.privateProjects}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.obj.support}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.obj.domain}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.obj.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
        
        
        
        );


}

export default Card;