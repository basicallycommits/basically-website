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
    url: null,
    icon: <SiDiscord className="w-6 h-6" />,
    description: "placeholder-username",
  },
  {
    title: "Email",
    url: "#contact",
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
      <h2 className="text-3xl font-bold text-center text-sky-500 dark:text-white mb-8">
        Find Me
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {socials.map((site, i) => (
          <div
            key={i}
            className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            {...(site.url ? { as: "a", href: site.url, target: "_blank" } : {})}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export { FindMe };
