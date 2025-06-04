import { Project } from "../lib/types";

const statusColorMap = {
  published:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "in-progress":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "coming-soon":
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const Wrapper = project.repoUrl ? "a" : "div";
  const wrapperProps = project.repoUrl
    ? { href: project.repoUrl, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="block transform transition hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl"
    >
      <div className="relative flex flex-col md:flex-row items-center project-card overflow-hidden">
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
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <h3 className="text-left h3 font-semibold text-gray-800 dark:text-white sm:truncate sm:whitespace-normal sm:flex-1">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1 sm:mt-0 sm:shrink-0 sm:justify-end sm:max-w-[50%]">
              <span
                className={`text-sm font-medium rounded-full px-3 py-1 ${
                  statusColorMap[project.status]
                }`}
              >
                {project.status.replace("-", " ")}
              </span>
              <span className="text-sm font-medium rounded-full px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                {project.date}
              </span>
            </div>
          </div>

          {project.descriptionHtml ? (
            <p
              className="text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          )}

          {project.placeholderImage && (
            <span className="text-xs mt-1 text-gray-400 italic">
              * Image is a placeholder from Unsplash
            </span>
          )}

          {Array.isArray(project.skillsUsed) &&
            project.skillsUsed.length > 0 && (
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
};
