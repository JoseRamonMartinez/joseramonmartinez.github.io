import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var phone= this.props.data.phone;
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


            </aside>

         </div>

  
      </div>
   </section>
    );
  }
}

export default Contact;
