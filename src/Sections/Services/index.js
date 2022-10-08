import gsap from "gsap";
import React, {useEffect, useRef,  useState} from "react";
import styled from "styled-components";
import Lottie from "lottie-web";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  // z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 1rem 1.5rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // useEffect(() => {
  //   const element = ref.current;
  //   ////
  //   const mq = window.matchMedia("(max-width: 48em)");
  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.getElementById("services"),

  //       start: "top top+=180",

  //       end: "bottom bottom",

  //       pin: element,
  //       pinReparent: true,
  //     },
  //   });
  //   t1.fromTo(
  //     document.getElementById("line"),

  //     {
  //       height: "15rem",
  //     },
  //     {
  //       height: "3rem",
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: document.getElementById("line"),
  //         start: "top top+=200",
  //         end: "bottom top+=220",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   revealRefs.current.forEach((el, index) => {
  //     // console.log(el.childNodes);
  //     if (mq.matches) {
  //       t1.from(
  //         el.childNodes[0],

  //         {
  //           x: -300,
  //           opacity: 0,
  //           duration: 2,

  //           ease: "power2",
  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el,
  //             start: "top center+=200",
  //             end: "bottom bottom-=100",
  //             scrub: true,
  //             snap: true,
  //             //
  //             // toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //         .to(el.childNodes[1], {
  //           transform: "scale(0)",

  //           ease: "power2.inOut",

  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el.childNodes[1],
  //             start: "top center",
  //             end: "bottom center",
  //             scrub: true,
  //             snap: true,

  //             // toggleActions: "play none none reverse",
  //           },
  //         })
  //         .from(
  //           el.childNodes[2],

  //           {
  //             y: 400,

  //             duration: 2,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top center+=100",
  //               end: "bottom bottom-=200",
  //               scrub: true,
  //               snap: true,
  //               //
  //               // toggleActions: "play none none reverse",
  //             },
  //           }
  //         )
  //         .to(
  //           el,

  //           {
  //             opacity: 0,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top top+=300",
  //               end: "center top+=300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //     } else {
  //       t1.from(
  //         el.childNodes[0],

  //         {
  //           x: -300,
  //           opacity: 0,
  //           duration: 2,

  //           ease: "power2",
  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el,
  //             start: "top center+=100",
  //             end: "bottom bottom-=200",
  //             scrub: true,
  //             snap: true,
  //             //
  //             // toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //         .to(el.childNodes[1], {
  //           transform: "scale(0)",

  //           ease: "power2.inOut",

  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el.childNodes[1],
  //             start: "top center",
  //             end: "bottom center",
  //             scrub: true,
  //             snap: true,

  //             // toggleActions: "play none none reverse",
  //           },
  //         })
  //         .from(
  //           el.childNodes[2],

  //           {
  //             y: 400,

  //             duration: 2,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top center+=100",
  //               end: "bottom bottom-=200",
  //               scrub: true,
  //               snap: true,
  //               //
  //               // toggleActions: "play none none reverse",
  //             },
  //           }
  //         )
  //         .to(
  //           el,

  //           {
  //             opacity: 0,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top top+=200",
  //               end: "center top+=300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //     }
  //   });
  // }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const corn = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: corn.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/corn-growing.json')
    })
  }, [])

  const farmersIndustrial = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: farmersIndustrial.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/farmers-to-industrial-workers.json')
    })
  }, [])

  const farmers = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: farmers.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/farmers.json')
    })
  }, [])

  const fork = useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation({
      container: fork.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/re-fork-farmer.json')
    })
  }, [])
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">Services</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Farmer"
          title={<h1>Crop Quality</h1>}
          subText={
            <div>
            <h5>
              This feature is focused to predict & analyze the crop 
              quality so that farmers get the true price of their yield 
              by the contractors and they can download the analysis report 
              of their particular crop from our application.
            </h5>
            <br></br>
            <a href="#contact">
          <Button>Try Now!</Button>
            </a>
            </div>
          }
        />
        {/* <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" /> */}
        <div style={{ zIndex: 7, width: 800 }} ref={corn}></div>
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Farmer"
          title={<h1>Yield Prediction</h1>}
          subText={
            <div>
            <h5>
              This feature implements the training model by using 
              different inputs data. The machine will able to learn 
              the features and extract the crop yield from the data 
              by using data mining and data science techniques.
            </h5>
            <br></br>
            <a href="#contact">
          <Button>Try Now!</Button>
            </a>
            </div>
          }
        />
        {/* <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" /> */}
        <div style={{ zIndex: 7, width: 1000 }} ref={farmers}></div>
      </Content>
      <Content>
        <TextBlock
          topic="Farmer"
          title={<h1>Disease Detection</h1>}
          subText={
            <div>
            <h5>
              This feature is a Crop Disease detection and Cure 
              suggestion system. It also provides details about the 
              symptoms and the description of the particular disease.
            </h5>
            <br></br>
            <a href="#contact">
          <Button>Try Now!</Button>
            </a>
            </div>
          }
        />
        {/* <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" /> */}
        <div style={{ zIndex: 7, width: 800 }} ref={farmersIndustrial}></div>
      </Content>
      <Content>
        <TextBlock
          topic="Farmer"
          title={<h1>Weed Detection</h1>}
          subText={
            <div>
            <h5>
              This feature is focused on the creation of an 
              image-processing algorithm to detect the existence 
              of weds in a specific site of crop. weed detection and 
              classification based on variable real-time machine learning.
            </h5>
            <br></br>
            <a href="#contact">
          <Button>Try Now!</Button>
            </a>
            </div>
          }
        />
        {/* <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" /> */}
        <div style={{ zIndex: 7, width: 1000 }} ref={fork}></div>
      </Content>
    </ServiceSection>
  );
};

export default Services;
