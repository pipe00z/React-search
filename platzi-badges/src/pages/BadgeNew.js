import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() { 
        return ( 
           <div>
               <Navbar/>
               <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt='logo'/> 
               </div>
           
             <div className="container">
               <div className="row">
                   <div className="col">
                        <Badge firstName='Felipe'
                        lastName='Zapata' 
                        avatar='https://s.gravatar.com/avatar/457a95a1b3bfd22fe22b97a86ae742e5?' 
                        jobTitle='Web Developer' 
                        twitter='pipe00z'/>
                   </div>
               </div>
            </div>
           </div>
         );
    }
}
 
export default BadgeNew;

