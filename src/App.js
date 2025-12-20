import React from "react";

const colors = {
    headerBg: "#FFFFFF",
    navbarBg: "#FFFFFF",
    mainBg: "#F7F4ED",
    cardBg: "#FFFFFF",
    cardHoverBg: "#F9F9F9",
    accent: "#191919",
    text: "#242424",
    textLight: "#191919",
    buttonBg: "#191919",
    buttonText: "#FFFFFF",
    footerBg: "#F7F4ED",
    footerText: "#6B6B6B",
};

const projects = [
    {
        title: "To-Do List CLI (Java)",
        description:
            "A command-line Java application with tasks, reminders, priority, and undo functionality.",
        link: "https://github.com/AnthonySoltvedt/ToDoListCLI",
    },
    {
        title: "BBJ Tracker App",
        description:
            "A tracker app for logging BBJ sessions, progress, and personal routines.",
        link: "https://github.com/AnthonySoltvedt/BBJTrackerApp",
    },
];

const uniProjects = [
    {
        title: "Advanced Programming",
        description:
            "Built a prototype application that processes and reshapes data from a provided dataset to generate specific outputs. Focused on data transformation, formatting, and structured output generation using modular program design.",
        link: "https://github.com/AnthonySoltvedt/Advanced-programming/blob/main/Assesment-1.ipynb",
    },

    {
        title: "Big Data Analytics",
        description:
            "Built a data mining application that cleans and analyses rental housing data using regression and classification techniques to identify key problem areas related to rent increases and generate targeted insights.",
        link: "https://github.com/AnthonySoltvedt/Big-Data-Project/blob/main/Rental%20Price%20Prediction%20and%20Data%20Analysis.ipynb",
    },
];

function App() {
    return (
        <>
            {/* HEADER */}
            <header
                style={{
                    padding: "20px",
                    background: colors.headerBg,
                    color: colors.textLight,
                    textAlign: "center",
                }}
            >
                <h1>Anthony Soltvedt - Portfolio</h1>
            </header>

            {/* NAVBAR */}
            <nav
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    padding: "15px",
                    background: colors.navbarBg,
                }}
            >
                <a
                    href="#about-me"
                    style={{ color: colors.textLight, textDecoration: "none", fontWeight: "bold" }}
                >
                    About Me
                </a>
                <a
                    href="#projects"
                    style={{ color: colors.textLight, textDecoration: "none", fontWeight: "bold" }}
                >
                    Projects
                </a>
                <a
                    href="#contacts"
                    style={{ color: colors.textLight, textDecoration: "none", fontWeight: "bold" }}
                >
                    Contact
                </a>
            </nav>

            {/* ABOUT ME SECTION */}
            <div
                id="about-me"
                style={{
                    fontFamily: "Arial, sans-serif",
                    padding: "40px",
                    background: colors.mainBg,
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: colors.accent, marginBottom: "10px" }}>About Me</h1>
                <p style={{ color: colors.text, maxWidth: "700px", margin: "0 auto" }}>
                    I am currently pursuing a <strong>Master’s degree in Computer Science and AI</strong> at the University of York. I also hold a degree in <strong>Music Production from BIMM London</strong>.
                    I am passionate about combining technology and creativity to build innovative solutions and projects. My focus is on developing software that solves real-world problems, exploring AI applications, and continuing to grow as a developer.
                </p>
            </div>

            {/* PROJECTS SECTION */}
            <div
                id="projects"
                style={{
                    fontFamily: "Arial, sans-serif",
                    padding: "40px",
                    background: colors.mainBg,
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "10px", color: colors.accent }}>
                    Anthony’s Programming Projects
                </h1>
                <p style={{ textAlign: "center", marginBottom: "40px", color: colors.text }}>
                    A showcase of my completed projects
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                background: colors.cardBg,
                                width: "300px",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                textAlign: "center",
                                transition: "transform 0.2s, background 0.2s",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.background = colors.cardHoverBg;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.background = colors.cardBg;
                            }}
                        >
                            <h2 style={{ color: colors.accent }}>{project.title}</h2>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    marginTop: "10px",
                                    padding: "8px 15px",
                                    borderRadius: "5px",
                                    backgroundColor: colors.buttonBg,
                                    color: colors.buttonText,
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* UNIVERSITY PROJECTS */}
            <div
                id="uni-projects"
                style={{
                    fontFamily: "Arial, sans-serif",
                    padding: "40px",
                    background: colors.mainBg,
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "10px", color: colors.accent }}>
                    University Projects
                </h1>

                <p style={{ textAlign: "center", marginBottom: "40px", color: colors.text }}>
                    Academic projects completed during my university studies
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    {uniProjects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                background: colors.cardBg,
                                width: "300px",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <h2 style={{ color: colors.accent }}>{project.title}</h2>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    marginTop: "10px",
                                    padding: "8px 15px",
                                    borderRadius: "5px",
                                    backgroundColor: colors.buttonBg,
                                    color: colors.buttonText,
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* CONTACT SECTION */}
            <div
                id="contacts"
                style={{
                    fontFamily: "Arial, sans-serif",
                    padding: "40px",
                    background: colors.mainBg,
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: colors.accent, marginBottom: "20px" }}>
                    Contact
                </h1>

                <p style={{ color: colors.text, marginBottom: "10px" }}>
                    Email:{" "}
                    <a
                        href="anthonysoltvedt1996@gmail.com"
                        style={{ color: colors.accent, textDecoration: "none", fontWeight: "bold" }}
                    >
                        anthonysoltvedt1996@gmail.com
                    </a>
                </p>

                <p style={{ color: colors.text, marginBottom: "10px" }}>
                    GitHub:{" "}
                    <a
                        href="https://github.com/AnthonySoltvedt"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: colors.accent, textDecoration: "none", fontWeight: "bold" }}
                    >
                        github.com/AnthonySoltvedt
                    </a>
                </p>

                <p style={{ color: colors.text }}>
                    LinkedIn:{" "}
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: colors.accent, textDecoration: "none", fontWeight: "bold" }}
                    >
                        View Profile
                    </a>
                </p>
            </div>

            {/* FOOTER / CONTACT */}
            <footer
                id="contacts"
                style={{
                    padding: "20px",
                    textAlign: "center",
                    background: colors.footerBg,
                    color: colors.footerText,
                }}
            >
                © {new Date().getFullYear()} Anthony Soltvedt — All Rights Reserved
            </footer>

            {/* BACK TO TOP BUTTON */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "10px 15px",
                    borderRadius: "50%",
                    background: colors.buttonBg,
                    color: colors.buttonText,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                ↑ Top
            </button>
        </>
    );
}

export default App;
