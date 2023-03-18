import React from 'react';
import { Link } from 'react-router-dom';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const Home = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <>
      <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1a1818",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#9ac5e3",
                    },
                    links: {
                        color: "#9ac5e3",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
        }}
        />
      <div className="text-center self-center" style = {{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }} >
        <h1 className="p-10 text-7xl font-bold mb-8 opacity-95 tracking-wide"
        style={{color:'#9ac5e3', fontFamily: 'Courier New'}}>Spider Cyber Security</h1>
        <div className="p-40" style={{display: 'block'}}>
          <Link to='/login'>
            <button className="self-center w-44 opacity-95 font-bold mr-4 px-6 py-3 text-xl rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            style = {{
              display: 'block',
              backgroundColor:'#9ac5e3',
              fontFamily: 'Courier New',
              padding: '10px',
              margin: '10px',
            }}>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className="self-center w-44 opacity-95 font-bold mr-4 px-6 py-3 text-xl rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            style = {{
              backgroundColor:'#9ac5e3',
              fontFamily: 'Courier New',
              padding: '10px', 
              margin: '10px',
            }}>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
    );
};



export default Home;