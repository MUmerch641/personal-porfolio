import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Experience = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: index % 2 === 0 ? "-100%" : "100%", 
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="timeline-section" id="experience">
        <h1>Experience</h1>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">August 2024 to present</div>
          <div className="timeline-content">
            <h3>xpertspot </h3>
            <p>As a web developer at XpertSpot, I design and develop scalable, user-friendly applications. I leverage expertise in front-end, back-end, and database management to deliver high-quality solutions. Collaborating with cross-functional teams, I drive project success and stay updated on emerging trends. I've successfully delivered projects on time, improving code quality and user engagement.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">September 2023 to November 2023</div>
          <div className="timeline-content">
            <h3>Dev soft (remote)</h3>
            <p>Working at Dev Soft as a remote web developer has been a great experience. I collaborate with global teams to build innovative solutions and enjoy flexible hours, reduced commute time, and increased productivity. The company culture is supportive, and communication is seamless. I've expanded my skill set and expertise, and I feel connected to colleagues worldwide.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">september 2023 to present</div>
          <div className="timeline-content">
            <h3>React</h3>
          <p>Experienced React developer with 1 year of building scalable web applications. Skilled in React ecosystem, including Redux, Hooks, and Context API. Proficient in state management, component lifecycle, and optimization techniques. Successfully developed multiple projects, collaborating with cross-functional teams to deliver high-quality solutions. Strong understanding of JavaScript, HTML5, and CSS3. </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
