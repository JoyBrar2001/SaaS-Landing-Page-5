import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";

import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

const integrations = [
  { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative design tool" },
  { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs" },
  { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform" },
  { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and desgin system" },
  { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool" },
  { name: "Github", icon: githubIcon, description: "Github is the leading platform for code collaboration" },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <Tag>
              Integrations
            </Tag>

            <h2 className="text-6xl font-medium mt-6">
              Plays well with{" "}
              <span className="text-lime-400">others</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate playforms.
            </p>
          </div>

          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationsColumn
              integrations={integrations}
            />
            <IntegrationsColumn
              integrations={integrations.slice().reverse()}
              className="max-md:hidden"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}