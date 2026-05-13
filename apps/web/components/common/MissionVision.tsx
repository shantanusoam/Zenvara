import Image from "next/image"
import { Reveal } from "../home/reveal"
import { SectionLayout } from "../layout/section-layout"
import { MISSION_VISION } from "@/lib/home-content";

const MissionVision = () => {
    
const missionImage = "/assets/mission.png";
const visionImage = "/assets/vision.png";
  return (
    <>
    <SectionLayout>
      
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal className="rounded-2xl bg-[#0b1f2a] p-8 text-white">
                <Image
                  src={missionImage}
                  alt="Mission"
                  width={50}
                  height={50}
                />
                <p className="text-2xl font-medium mt-4">{MISSION_VISION.mission.title}</p>
                <p className="mt-4 text-lg leading-relaxed">{MISSION_VISION.mission.body}</p>
              </Reveal>
              <Reveal className="rounded-2xl bg-[var(--zen-accent)] p-8 text-[#0a0a0a]">
                <Image
                  src={visionImage}
                  alt="Vision"
                  width={50}
                  height={50}
                />
                <p className="text-2xl font-medium mt-4">{MISSION_VISION.vision.title}</p>
                <p className="mt-4 text-lg leading-relaxed">{MISSION_VISION.vision.body}</p>
              </Reveal>
            </div>
    
    </SectionLayout>
    </>
)
}

export default MissionVision