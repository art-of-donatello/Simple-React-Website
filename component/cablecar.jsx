import React from 'react';
import {useRef,useEffect} from 'react'
import Two from 'two.js';




function Cablecar() {
    var ref1 = useRef(null)
    var x;
    var y;
    var circle2;
    var dag;
    var circle4;
    var circle5;
    var line;
    var two;
    var image;
    var image1;
    var elem;
    var params ={
        fullscreen: false
        
      };
    var width;
    var height;
      useEffect(() => {
        // 👇️ use document.getElementById()
         width  = window.innerWidth*0.8;
         height = 70;
         elem = document.getElementById('canvas');;
         two = new Two(params).appendTo(elem);
         two.width=width;
        two.height=height;
         two.fit;
         image = new Two.Texture('/images/kabin.png');
         image1 = new Two.Texture('https://t3.ftcdn.net/jpg/00/99/93/84/360_F_99938432_2jyH55zJToJf05zIZ2LJ3k8ocJYDMnhE.jpg');
  
         circle2 = two.makeRectangle(100, 80, 100,80);
        
         
      line = two.makeLine(0,3,width,3);
     circle2.fill = image;
     circle2.rotation =0;
     circle2.noStroke();

    
     // Bind a function to scale and rotate the group to the animation loop.
     two.bind('update', update);
     // Finally, start the animation loop
    
      x = width
      y = 35;
      two.play();
      }, [elem,two]);
      
         
      
     
     
 function update(frameCount) {
    // This code is called every time two.update() is called.
    x-=1;
    if(x<-10) x=width;
    

    circle2.position.set(x, y);

  return
  }
    

  return (
    
    <div className=' container '>
        <div ref={ref1} id="canvas"> </div>

    </div>
    
  )
}

export default  Cablecar;

