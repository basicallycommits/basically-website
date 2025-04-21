import vscodeImg from "@/assets/vscode_ss.png";
import wdccImg from "@/assets/wdcc_ss.png";
import freecyclingImg from "@/assets/freecycling_ss.png";
import escapeRoomImg from "@/assets/escape_room.png";

const Projects = () => {
  const projectList = [
    {
      title: "Smart Energy Monitor",
      descriptionHtml:
        'A system designed on a PCB to track energy usage and provide insights. Find more information <a href="https://courseoutline.auckland.ac.nz/dco/course/COMPSYS/209" target="_blank" rel="noopener noreferrer" class="underline text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100">on the university\'s website,</a> or on <a href="https://uoa-ece209.github.io/" target="_blank" rel="noopener noreferrer" class="underline text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100">this page</a>.',
      imageUrl:
        "https://images.unsplash.com/photo-1724770388447-30b015a5cbb6?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Expected Start: Jul 2025",
      status: "coming-soon",
      skillsUsed: ["Altium Designer", "Microchip Studio", "Proteus", "LTSpice"],
      placeholderImage: true,
    },
    {
      title: "VHDL Flappy Bird",
      description:
        "Classic Flappy Bird-inspired game implemented in VHDL on an FPGA. Displayed on a VGA screen. Built with Quartus and QuestaSim.",
      imageUrl:
        "https://images.unsplash.com/photo-1597862624292-45748390b00e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Apr 2025 – Present",
      status: "in-progress",
      skillsUsed: ["VHDL", "FPGA", "Quartus", "QuestaSim"],
      placeholderImage: true,
    },
    {
      title: "Portfolio Website",
      description:
        "This is it, right here! A clean personal site to showcase my projects and experience. Built with Vite, React, and TailwindCSS.",
      imageUrl: vscodeImg,
      repoUrl: "https://github.com/basicallycommits/basically-website",
      date: "Apr 2025 – Present",
      status: "published",
      skillsUsed: ["React", "Vite", "TailwindCSS"],
    },
    {
      title: "Brushless DC Motor",
      description:
        "Soldered, 3d-printed, laser-cut and assembled parts for a brushless DC motor.",
      imageUrl:
        "https://images.unsplash.com/photo-1723730741656-6333f4840ecf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Mar 2025 – Present",
      status: "in-progress",
      skillsUsed: [
        "Soldering",
        "3d-Printing",
        "Laser-Cutting",
        "Assembling",
        "Troubleshooting",
      ],
      placeholderImage: true,
    },
    {
      title: "AUSA Wellbeing Tracker",
      descriptionHtml:
        'Team project with @WDCC. A hub that enables University of Auckland students to seamlessly access the university\'s health and counselling services. Built by students, for students. Find out more <a href="https://wdcc.co.nz/projects/2025/ausa" target="_blank" rel="noopener noreferrer" class="underline text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100">here</a>.',
      imageUrl: wdccImg,
      repoUrl: "https://github.com/UoaWDCC/ausa",
      date: "Mar 2025 – Present",
      status: "in-progress",
      skillsUsed: ["Next.js", "React", "TailwindCSS", "Express.js", "Firebase"],
    },
    {
      title: "Freecycling Website",
      description:
        "High-fidelity prototype of an aesthically pleasing, responsive website designed to promote recycling. Built in vanilla HTML, CSS and JavaScript.",
      imageUrl: freecyclingImg,
      repoUrl: "https://github.com/basicallycommits/freecycling-website-hfp",
      date: "May 2024 – Jun 2024",
      status: "published",
      skillsUsed: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "AI Escape Room Game",
      description:
        "Text-based puzzle game with AI-powered game master. Built with OpenAI API and JavaFX.",
      imageUrl: escapeRoomImg,
      repoUrl: "https://github.com/basicallycommits/escaipe-room-game",
      date: "Jul 2023 – Nov 2023",
      status: "published",
      skillsUsed: ["Java", "JavaFX", "CSS", "OpenAI API"],
    },
  ];

  const statusColorMap = {
    published:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "coming-soon":
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h2>Projects</h2>

        <div className="space-y-12">
          {projectList.map((project, index) => {
            const Wrapper = project.repoUrl ? "a" : "div";
            const wrapperProps = project.repoUrl
              ? {
                  href: project.repoUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className="block transform transition hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl"
              >
                <div className="relative flex flex-col md:flex-row items-center bg-[var(--colour-accent)] dark:bg-[var(--colour-accent-dark)] rounded-2xl shadow-md overflow-hidden">
                  {/* Image */}
                  <div className="flex justify-center items-center p-4 w-full md:w-1/3">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-48 w-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-6 md:w-2/3 w-full flex flex-col gap-2">
                    {/* Title + Status Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white sm:truncate sm:whitespace-normal sm:flex-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 sm:mt-0 sm:shrink-0 sm:justify-end sm:max-w-[50%]">
                        <span
                          className={`text-sm font-medium rounded-full px-3 py-1 ${
                            statusColorMap[
                              project.status as keyof typeof statusColorMap
                            ]
                          }`}
                        >
                          {project.status.replace("-", " ")}
                        </span>
                        <span className="text-sm font-medium rounded-full px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          {project.date}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {project.descriptionHtml ? (
                      <p
                        className="text-gray-600 dark:text-gray-300"
                        dangerouslySetInnerHTML={{
                          __html: project.descriptionHtml,
                        }}
                      />
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    )}

                    {/* Placeholder image badge */}
                    {project.placeholderImage && (
                      <span className="text-xs mt-1 text-gray-400 italic">
                        * Image is a placeholder from Unsplash
                      </span>
                    )}

                    {/* Tech Stack Tags */}
                    {project.skillsUsed && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.skillsUsed.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Projects };
