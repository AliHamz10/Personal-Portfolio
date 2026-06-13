import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      
      {/* Sections to test scrolling and active status highlighting */}
      {["Home", "About", "Services", "Experience", "Work", "Contact"].map((section) => {
        const id = section.toLowerCase().replace(/\s+/g, "-");
        return (
          <section
            key={section}
            id={id}
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px dashed rgba(100, 255, 218, 0.1)",
              paddingTop: "80px",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ textTransform: "uppercase", fontSize: "3rem", color: "#64FFDA" }}>
              {section} Section
            </h1>
          </section>
        );
      })}
    </div>
  );
};

export default App;
