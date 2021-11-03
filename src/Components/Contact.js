import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="row">
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title"></h4>
                  <ul id="twitter">
                     <li>
                       
                     </li>
                  </ul>
		         </div>
            </aside>

         </div>

  
      </div>
   </section>
    );
  }
}

export default Contact;
