import {
  SiGithub,
  SiLinkedin,
  SiDiscord,
  SiFacebook,
  SiInstagram,
  SiMinutemailer,
} from "react-icons/si";

const socials = [
  {
    title: "GitHub",
    url: "https://github.com/basicallycommits",
    icon: <SiGithub className="w-6 h-6" />,
    description: "My public projects and code.",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/basically-just-vincent",
    icon: <SiLinkedin className="w-6 h-6" />,
    description: "Let’s connect professionally.",
  },
  {
    title: "Discord",
    url: "https://discord.com/",
    icon: <SiDiscord className="w-6 h-6" />,
    description: "placeholder-username",
  },
  {
    title: "Email",
    url: "#contact", // This will scroll to the section with id="contact"
    icon: <SiMinutemailer className="w-6 h-6" />,
    description: "Reach out via email.",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/vincent.walker.374/",
    icon: <SiFacebook className="w-6 h-6" />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/basicallyjustvincent/",
    icon: <SiInstagram className="w-6 h-6" />,
    description: "Photos and such.",
  },
];

const FindMe = () => {
  return (
    <section id="find-me" className="py-12">
      <h2 className="mb-8">Find Me</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {socials.map((site, i) => (
          // Check if the link is internal (fragment identifier) or external
          <a
            key={i}
            href={site.url || "#"} // Fall back to "#" if no URL is provided
            target={
              site.url && site.url.startsWith("http") ? "_blank" : undefined
            } // Only set target="_blank" for external links
            className="flex items-center p-6 bg-[var(--colour-accent)] dark:bg-[var(--colour-accent-dark)] rounded-2xl shadow-md hover:shadow-lg transition hover:scale-[1.02]"
          >
            <div className="mr-4 text-sky-500 dark:text-sky-400">
              {site.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {site.title}
              </h3>
              {site.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {site.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { FindMe };
