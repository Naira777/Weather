import React, {useEffect, useRef, useState, useLayoutEffect} from 'react'
import './App.css';
import video from '../src/Video/video.mp4'
import useOnScreen from './Visible';



function App() {

const [anim, setAnim] = useState(false)
const [anim1, setAnim1] = useState(false)
const ref= useRef()


const isVisible = useOnScreen(ref);



const handleScroll =() => {

setAnim(true)


}
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


const handleScroll1 =() => {

  setAnim(true)
 openFullscreen(document.getElementById("video"))
}


useEffect(()=> {

window.addEventListener('scroll',  handleScroll1 )




return () =>{


window.removeEventListener('scroll', handleScroll1)
}

},[anim])




  return (   
  
  
  <div className="App" >
      
     
  { !anim && <video className="v"    muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop> 
  <source src={video} type="video/mp4">

   </source>

   </video>}

  {isVisible && <video className="" ref={ref} muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop
  src={video} type="video/mp4">
 
   </video>}

  {anim && <video className="vanima"  muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop
  src={video} type="video/mp4">
 
   </video>}
   

 
      
    </div>
  );
}
   
export default App;


