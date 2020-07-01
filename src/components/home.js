import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled, { keyframes } from 'styled-components'

// interesting code for animations
//https://www.react-spring.io/docs/hooks/basics
// https://www.react-spring.io/docs/hooks/use-spring
// npm install react-spring   // to install
// https://styled-components.com/
// https://github.com/moetichentuf/Workshop om de code  te downloaden github
// https://github.com/moetichentuf/Portfolio om de code te downloaden github

const Home = ({name, paragraph, authorImage})=>{
    const props = useSpring({config:{duration:1000},opacity:1, from: {opacity:0}}) // for the fade-in

    const [,setY]= useSpring(()=>({y:0})); // voor de back to top button

    const [toggle, setToggle] = useState()
    return(
        <div>
            <div className="home_container">

                <div className="home_head_wrapper">
                    <animated.h1 style={props}> Hi, I 'm <br></br> <span>{name}</span></animated.h1>
                    <p>{paragraph}</p>
                </div>
                <div className="image_container">
                    <img src={authorImage} alt="Author"/>
                    <div className="bg">

                    </div>
                </div>

            </div>
            <button
                className={"backToTop"}
                onClick={()=>{
                    setY({
                        y: 0,
                        reset: true,
                        from: {y: window.scrollY},
                        onFrame: props => window.scroll(0,props.y)

                    });
                }}

                style={{
                    position:"fixed",
                    zIndex: "1",
                    bottom:1,
                    right:1,
                    marginRight:"5%",
                    marginBottom:"5%",
                    border:"none",
                    backgroundColor: "navy",
                    color:"white",
                    cursor:"pointer",
                    padding: "1rem"}}

            >
                back to top
            </button>
        </div>
    );
}

export default Home;
