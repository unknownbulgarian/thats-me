'use client'


import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Particles from "react-tsparticles";
import type { Engine, Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

import { useParticlesConfig } from '@/app/states/config/Particles_CF'
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesCF() {

  const {
    particles,

    //general
    shape,
    randomShape,
    particlesNumber,
    particlesSize,
    randomSize,
    minSize,
    maxSize,
    particlesOpacity,
    links,
    linksWidth,
    linksOpacity,

    //movement
    move,
    randomSpeed,
    speed,
    direction,
    outMode,

    //colors
    particlesColor,
    linksColor,

    //Interactivity
    hover,
    click,

    clickMode,
    hoverMode,


  } = useParticlesConfig()

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
              {
                background: {
                  color: {
                    value: "",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: click,
                      mode: clickMode,
                    },
                    onHover: {
                      enable: hover,
                      mode: hoverMode,
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
                    value: particlesColor,
                  },
                  links: {
                    color: linksColor,
                    distance: 150,
                    enable: links,
                    opacity: linksOpacity,
                    width: linksWidth,
                  },
                  move: {
                    direction: direction,
                    enable: move,
                    outModes: {
                      default: outMode,
                    },
                    random: randomSpeed,
                    speed: speed,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                    },
                    value: particlesNumber,
                  },
                  opacity: {
                    value: particlesOpacity,
                  },
                  shape: {
                    type: randomShape ? ["circle", "edge", "triangle", "polygon", "polygon"] : shape,
                  },
                  size: {
                    value: randomSize ? { min: minSize, max: maxSize } : particlesSize,
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
