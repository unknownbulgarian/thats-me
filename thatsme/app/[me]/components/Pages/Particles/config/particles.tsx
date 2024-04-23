'use client'


import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Particles from "react-tsparticles";
import type { Engine, Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

import { useParticlesConfig } from '@/app/states/config/Particles_CF'
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesCF() {

    const { particles } = useParticlesConfig()

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);


    return (
        <>
            {particles &&
                <div className={styles.particles}>
             <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} 
             options={
                 { background: {
                    color: {
                      value: "#0d47a1",
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
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
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
               }
             } />
                </div>
            }
        </>
    )
}
