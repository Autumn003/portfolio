import { Contacts } from "@/components/contacts";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/Content";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col space-y-10 max-w-5xl px-4 md:px-6 lg:px-8 mx-auto ">
        <section id="about">
          <h2 className="text-xl font-bold">About</h2>
          <div className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col space-y-10 max-w-5xl px-4 py-10 md:px-6 lg:px-8 mx-auto">
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Education</h2>
            {DATA.education.map((education, id) => (
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            ))}
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {DATA.work.map((work, id) => (
              <ResumeCard
                key={work.title}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            ))}
          </div>
        </section>
      </div>
      <section id="projects" className="w-full bg-accent/50">
        <div className=" max-w-5xl px-4 py-10 md:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground">
                I&apos;ve built a wide range of projects spanning web
                applications, open-source tools, design systems, and production
                platforms. Some evolved into real products used by users and
                businesses. Here are a few favorites.
              </p>
            </div>
          </div>
        </div>

        <Projects />
      </section>

      <section id="contacts">
        <div className="max-w-5xl px-4 py-10 md:px-6 lg:px-8 mx-auto">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out through any of the links below. I&apos;m
                always open to discussing ideas, collaborations, or
                opportunities.
              </p>
            </div>
            <Contacts />
          </div>
        </div>
      </section>
    </div>
  );
}
