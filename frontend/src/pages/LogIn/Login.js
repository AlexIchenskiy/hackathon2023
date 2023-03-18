import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Login = () => {
      const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
    <><Particles className="z-0"
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
      <div className='text-center'>
      <div className='loginWindow opacity-40 z-10 w-2/4' 
      style={{ textAlign: 'center',
      backgroundColor:'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
       }}>
          <h1>Log In</h1>
          <form>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
            <br />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
  </>
    );
  };
  
  export default Login;
