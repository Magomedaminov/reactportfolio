import { useCallback } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function ParticleBackground() {
    const particlesInit = useCallback(async (main) => {
        console.log(main);
        await loadFull(main);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
      return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={
                {
                    background: {
                        color: {
                          value: "",
                        },
                      },
                      fpsLimit: 60,
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
                          value: "#30A71C",
                        },
                        links: {
                          color: "#30A71C",
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
                          speed: 4,
                          straight: false,
                        },
                        number: {
                          density: {
                            enable: true,
                            area: 1000,
                          },
                          value: 40,
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
                }
            }
        />
      )
}

export default ParticleBackground;