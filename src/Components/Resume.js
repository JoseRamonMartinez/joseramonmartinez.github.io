import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

var work = this.props.data.work.map(function (work) {
  let dotEncountered = false; // Flag to track if a dot has been encountered

  return (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span>
        <em className="date">{work.years}</em>
      </p>
      <p>
        {work.description.split(" ").map((word, index) => {
          if (word === "Techs:") {
            return <span key={index}><br/><b>{word}</b>&nbsp;</span>
          }
          if (word.startsWith("•")) {
            if (dotEncountered) {
              return (
                <span key={index}>
                  <br />
                  {word}&nbsp;
                </span>
              );
            } else {
              dotEncountered = true; // Mark dot as encountered
              return <span key={index}>{word} </span>;
            }
          } else {
            return <span key={index}>{word} </span>;
          }
        })}
      </p>
    </div>
  );
});

      var skills = this.props.data.skills.map(function(skill){
        return (
        <div key={skill}>
          <h5>{skill.category}</h5>
          {skill.technologies.map(technology => {
           return <img alt="skill" src={technology} style={{'margin': '3px'}}></img>
          })}
        </div> 
        )
      })
    }

    return (
      <section id="resume">

    <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

    <div className="row work">

      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>

      <div className="nine columns main-col">
        {skills}
      </div>
    </div>
   </section>
    );
  }
}

export default Resume;