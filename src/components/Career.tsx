import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Transformation Lead</h4>
                <h5>Edversity</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Guiding AI platform vision and shipping EVA-00 — an adaptive
              learning orchestration system built end-to-end, from architecture
              to production deployment with measurable student outcomes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head of Partnerships</h4>
                <h5>Edversity</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Closed strategic university and B2B collaborations, translated
              partner needs into fast product pilots, and built the commercial
              foundation for Edversity&apos;s AI roadmap.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ignite AI — 1st Place</h4>
                <h5>PKR 1M grant</h5>
              </div>
              <h3>Earlier</h3>
            </div>
            <p>
              Won Pakistan&apos;s national AI Wrapper Competition with an
              AI-powered EdTech solution. Led product direction, demo strategy,
              and experience polish to secure the top position.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.A.Sc. AI — Grade A</h4>
                <h5>PAF IAST · 2023–2027</h5>
              </div>
              <h3>Start</h3>
            </div>
            <p>
              Studying Artificial Intelligence at Pak-Austria Fachhochschule —
              carrying strong fundamentals in ML, systems thinking, and
              engineering practice into every product I build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
