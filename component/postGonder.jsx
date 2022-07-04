import { data } from 'autoprefixer';
import React, { Component } from 'react'
import UrlManager from './system/UrlManager'; 

class PostGonder extends Component { 
  constructor(props){ 
    super(props) 
        
    // Set initial state 
    this.state = {greeting : 
        [{"id":0,"name":"omer","surname":"teke","specs":{"test":"test"}}]} 
        
    // Binding this keyword 
    this.updateState = this.updateState.bind(this) 
  } 
    
  
  updateState(){ 
    // Changing state 
   
    const requestOptions = {
        method: 'GET',
      
   
    };

    const userUrl = UrlManager.userUrl;
    fetch(userUrl,requestOptions)
    .then(response => response.json().then(data=>({
        data:data
    })).then(res =>{
      
        this.setState({greeting:res.data})
    })

    );


        
  } 
      

  render(){ 
    return ( 
      <div> 
       <h2>Greetings Portal</h2>   

       {this.state.greeting.map((user)=>(
        <div key={ user.id}>
        <p> {user.name}
         {user.surname}</p>
        
        </div>
       ))}
      
        {/* Set click handler */} 
        <button onClick={this.updateState}> 
          Click me!
        </button> 
      </div> 
    ) 
  } 
} 
    
export default PostGonder;

