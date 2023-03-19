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
    <>
    <Particles className="z-0"
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
                        value: "#ff0000",
                    },
                    links: {
                        color: "#ff0000",
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
    <div className='w-full h-full' style={{textAlign: 'center'}}>
      <div className='loginWindow opacity-95 z-10 w-full h-full flex justify-center items-center flex-col' >
        <div className='rounded-xl p-6 z-20' style={{backgroundColor: 'white'}}>
          <h1 className="p-3 text-3xl font-bold opacity-95 tracking-wide z-100"
          style={{fontFamily: 'Courier New'}}>Log In</h1>

          <form className='ml-3 p-2 font-bold' style={{fontFamily: 'Courier New', width: '300px', height: '240px'}}>
            <label className='m-5 p-4' htmlFor='email'>Email:</label>
            <input style={{backgroundColor: '#D3D3D3'}} className='p-2 m-2 rounded-lg opacity-20' type='email' id='email' name='email' required />
            <br />
            <label className='m-5 p-4' htmlFor='password'>Password:</label>
            <input style={{backgroundColor: '#D3D3D3'}} className='p-2 m-2 rounded-lg opacity-20' type='password' id='password' name='password' required />
            <br />
            <button className='p-3 m-5 rounded-lg w-32 text-xl' style={{backgroundColor: '#ff0000'}}type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  </>
    );
  };
  
  export default Login;
