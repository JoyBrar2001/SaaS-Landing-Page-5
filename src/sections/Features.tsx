import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>
            Features
          </Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6">
          Where power meets{" "}
          <span className="text-lime-400">
            simplicity
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
          >
            <div>
              <Avatar>
                <Image
                  src={avatar1}
                  alt="Avatar 1"
                />
              </Avatar>

              <Avatar>
                <Image
                  src={avatar2}
                  alt="Avatar 2"
                />
              </Avatar>

              <Avatar>
                <Image
                  src={avatar3}
                  alt="Avatar 3"
                />
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
          >

          </FeatureCard>

          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
          >

          </FeatureCard>
        </div>

        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>

              <span>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
