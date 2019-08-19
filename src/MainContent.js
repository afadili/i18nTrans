import React from 'react';
import SubContent from './SubContent'
import { Trad } from './Trad'

export default class MainContent extends React.Component {
  render(){
    return <div>
		  <Trad text="content" />
      <SubContent content="Mon texte de première partie" />
      <SubContent content="La seconde partie" />		  
      <SubContent content="Et la dernière partie !" />		  
    </div>
  }
}



