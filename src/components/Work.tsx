import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "EVA-00 — AI Learning OS",
    description:
      "Orchestration layer for adaptive education at Edversity. Designed the service architecture, product flows, and delivery cadence to move from prototype to production. Won Ignite AI Competition — PKR 1M grant.",
    image: "/images/project1.png",
    link: null,
    linkLabel: "Private",
  },
  {
    title: "finprep — Financial Literacy Platform",
    description:
      "Lightweight fintech experience for guided financial planning, portfolio insights, and literacy onboarding for first-time investors. Built with React and TypeScript.",
    image: "/images/project2.png",
    link: "https://github.com/AliHamz10/finprep",
    linkLabel: "GitHub",
  },
  {
    title: "Sentiment Analysis — NLP Pipeline",
    description:
      "End-to-end sentiment classification with preprocessing pipeline, model selection, evaluation loop, and visual reporting. Built to be explainable and iteration-ready.",
    image: "/images/project3.png",
    link: "https://github.com/AliHamz10/Sentiment-Analysis",
    linkLabel: "GitHub",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            type="button"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            type="button"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link"
                            data-cursor="disable"
                          >
                            {project.linkLabel}{" "}
                            <MdArrowOutward className="carousel-link-icon" />
                          </a>
                        ) : (
                          <span className="carousel-link-private">
                            {project.linkLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
