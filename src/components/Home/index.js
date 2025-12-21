import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s1.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { motion } from 'framer-motion'
import { slideIn } from '../../motion'
import EarthCanvas from '../../Earth'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const WelcomeText = ['H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!']

  const IntroText = [
    'Y',
    'o',
    'u',
    "'",
    'v',
    'e',
    ' ',
    'r',
    'e',
    'a',
    'c',
    'h',
    'e',
    'd',
    ' ',
    't',
    'h',
    'e',
  ]

  const PortfolioText = [
    'P',
    'e',
    'r',
    's',
    'o',
    'n',
    'a',
    'l',
    ' ',
    'p',
    'o',
    'r',
    't',
    'f',
    'o',
    'l',
    'i',
    'o',
    ' ',
    'o',
    'f',
  ]
  const nameArray = [
    'S',
    't',
    'e',
    'v',
    'e',
    ' ',
    'N',
    'a',
    't',
    'h',
    'a',
    'n',
    ' ',
    'd',
    'e',
    ' ',
    'S',
    'a',
    '!',
  ]

  const line1StartIdx = 1
  const line2StartIdx = line1StartIdx + WelcomeText.length
  const line3StartIdx = line2StartIdx + IntroText.length
  const line4StartIdx = line3StartIdx + PortfolioText.length

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 7700)
  }, [])

  useEffect(() => {
    // Function to create stars
    function stars() {
      let count = 200
      let scene = document.querySelector('.home-page')
      let i = 0
      while (i < count) {
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        let duration = Math.random() * 10
        let size = Math.random() * 2

        star.style.left = x + 'px'
        star.style.top = y + 'px'
        star.style.width = 1 + size + 'px'
        star.style.height = 1 + size + 'px'
        star.style.animationDuration = 5 + duration + 's'
        star.style.animationDelay = duration + 's'

        scene.appendChild(star)
        i++
      }
    }
    stars()
  }, [])

  const [showTimelinexy, setShowTimelinexy] = useState(false)

  useEffect(() => {
    const timerxy = setTimeout(() => {
      setShowTimelinexy(true)
    }, 8000)
    return () => clearTimeout(timerxy)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={WelcomeText}
              idx={line1StartIdx} // Start at 1
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={IntroText}
              idx={line2StartIdx} // Start after WelcomeText
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={PortfolioText}
              idx={line3StartIdx} // Start after IntroText
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={line4StartIdx} // Start after PortfolioText
            />
          </h1>
          <h2>COMPUTER SCIENCE @SDSMT</h2>
          <div className="linkbutts">
            <Link to="/about" className="flat-button">
              FIND OUT MORE ABOUT ME
            </Link>
            <Link to="/portfolio" className="flat-button">
              CHECK OUT MY PERSONAL PORTFOLIO!
            </Link>
          </div>
        </div>
      </div>
      {showTimelinexy && (
        <div className="earthanimdiv">
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="earthobjdiv"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      )}
      <Loader type="pacman" />
    </>
  )
}

export default Home
