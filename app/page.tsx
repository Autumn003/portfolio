import ThemeToggler from "@/components/ui/theme-toggler";
import { UserCard } from "@/components/user-card";
import { VerticalCard } from "@/components/vertical-card";

const userInfo = {
  name: "Hemant",
  role: "Software Engineer",
  avatarUrl: "/avatar.jpg",
};
const userSkills = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C/C++"],
  },
  {
    title: "Development",
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Firebase",
      "GraphQL",
      "Redis",
      "Socket.IO",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
      "Shadcn/UI",
      "Radix UI",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Tools",
    skills: [
      "Docker",
      "AWS",
      "Postman",
      "Git",
      "GitHub",
      "VS Code",
      "MDX",
      "Multer",
      "Cloudinary",
    ],
  },
];

export default function Home() {
  return (
    <div className="bg-neutral-200 w-full p-4 dark:bg-neutral-900 min-h-screen flex flex-col items-center">
      <div>
        <UserCard userInfo={userInfo} />
        <div className="h-full grid grid-cols-3 gap-4 my-6">
          <VerticalCard
            skills={userSkills}
            className="col-span-1 border-red-400 border"
          />
          <div className="border col-span-2">
            <div className="w-full h-64 border"></div>
            <div className="flex">
              <div className="aspect-square w-full border "></div>
              <div className="aspect-square w-full border "></div>
            </div>
          </div>
        </div>
      </div>
      <ThemeToggler />
    </div>
  );
}
