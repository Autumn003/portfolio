import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "motion/react";

interface Props {
  index: number;
  activeCard: number;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  // image?: string;
  // video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  index,
  activeCard,
  title,
  href,
  description,
  dates,
  tags,
  link,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden transition-all duration-300 ease-out h-full",
        className
      )}
    >
      <CardHeader className="px-2">
        <div key={title + index} className=" rounded-xl">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
            }}
            className="text-2xl font-bold "
          >
            {title}
          </motion.h2>
          <motion.time
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
            }}
            className="font-sans sm:text-sm text-xs "
          >
            {dates}
          </motion.time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
            }}
            className="text-kg my-10 max-w-sm"
          >
            <Markdown>{description}</Markdown>
          </motion.div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge className="" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
