import clsx from "clsx";
import React, { useState } from "react";

const data = [
  {
    title: "Enhancing Global Agricultural Productivity and Sustainability",
    text: `As the regional Center Lead for the Soy Excellence Center (SEC) initiative, Homics International has been instrumental in elevating agricultural practices and outcomes across SSA. Our efforts have resulted in:
Increased adoption of sustainable soy production practices, leading to improved soil health and reduced environmental impact across the region.Through our comprehensive educational programs, we've equipped farmers with the knowledge and tools to implement eco-friendly farming techniques.
Significant improvements in crop yields and quality, directly contributing to enhanced food security in SSA.By providing crucial technical support to farmers and agribusinesses, we've helped optimize soy production processes, resulting in more abundant and nutritious harvests.
Strengthened connections between U.S.soy producers and international markets, fostering a more resilient and diverse global supply chain.Our role in facilitating market development has opened new avenues for trade, benefiting both local economies in SSA and U.S.soy exporters.
`,
    bg: "url(/hero-section/bg-1.svg)",
  },
  {
    title: "Agricultural Revolution for a Sustainable Future",
    text: `Homics International is at the forefront of driving an agricultural revolution that prioritizes sustainability and future-readiness:

Pioneering workforce development initiatives that are creating a new generation of skilled professionals in the soy industry. Through the SEC program, we're building capacity and expertise that will drive innovation in agriculture for years to come.

Spearheading the integration of advanced agricultural technologies in SSA, promoting precision farming techniques that optimize resource use and minimize waste. This technological revolution is setting new standards for efficiency in the region's agricultural sector.

Catalyzing a shift towards more sustainable protein sources, with soy at the forefront. Our work in promoting soy utilization is contributing to more balanced and environmentally friendly food systems, addressing both nutritional needs and climate concerns.

Fostering a culture of continuous learning and adaptation in the face of climate change. Our educational programs emphasize resilience and innovation, preparing the agricultural sector to meet future challenges head-on.

Through these impactful initiatives, Homics International is not just implementing USSEC's vision but actively shaping a more productive, sustainable, and forward-thinking agricultural landscape. Our work today is laying the foundation for a more food-secure and environmentally conscious tomorrow.`,
    bg: "url(/hero-section/bg-2.svg)",
  },
  {
    title: "Strengthening Global Soy Industry Connections and Knowledge Transfer",
    text: `Homics International's unique position as a bridge between the U.S. Soybean Export Council (USSEC) and the Sub-Saharan African (SSA) region has fostered significant advancements in global industry connections and knowledge sharing:

Facilitating cross-cultural exchange and understanding between U.S. soy producers and SSA markets, leading to more effective and mutually beneficial trade relationships. Our role has helped break down cultural barriers and misconceptions, paving the way for smoother international collaborations.

Establishing a robust knowledge transfer pipeline from developed soy markets to emerging ones in SSA. By adapting and disseminating best practices from the U.S. soy industry, we've accelerated the learning curve for local farmers and agribusinesses, helping them avoid common pitfalls and adopt proven strategies more quickly.

Creating a feedback loop that informs U.S. soy producers about the specific needs and challenges of SSA markets. This two-way communication has led to more targeted product development and marketing strategies, benefiting both U.S. exporters and African importers.

Developing a network of soy industry professionals across SSA, fostering regional cooperation and knowledge sharing. This network has become a powerful force for advancing the soy industry across the continent, enabling faster dissemination of innovations and collaborative problem-solving.

Elevating the profile of SSA in the global soy market, attracting increased investment and attention to the region's agricultural potential. Our work has helped position SSA as a key player in the future of the global soy industry, opening up new opportunities for economic growth and development.

Through these efforts, Homics International is not just implementing programs but is actively shaping the global soy industry landscape. We're fostering connections, facilitating knowledge transfer, and creating a more integrated and efficient global soy market that benefits stakeholders across the value chain.`,
    bg: "url(/hero-section/bg-3.svg)",
  },
  {
    title: " Empowering Local Communities and Economies Through Soy Industry Development",
    text: `Homics International's work goes beyond agricultural productivity and sustainability, directly contributing to the socio-economic development of local communities in Sub-Saharan Africa (SSA):
Creating new employment opportunities across the soy value chain, from farming to processing and trade. Our initiatives have helped establish and grow soy-related businesses, providing stable income sources for many families in the region.
Enhancing food security and nutrition in local communities by promoting soy as a high-quality, affordable protein source. This has led to improved dietary diversity and better health outcomes, particularly for vulnerable populations.
Empowering women and youth in agriculture through targeted training and entrepreneurship programs. By focusing on these often-underrepresented groups, we're fostering more inclusive economic growth and challenging traditional gender roles in the agricultural sector.
Stimulating local economies by encouraging the development of soy-based industries. From small-scale tofu production to larger soybean oil extraction facilities, these industries are creating economic multiplier effects in rural and urban areas alike.
Building resilience in rural communities by diversifying agricultural production and income sources. By introducing soy as a viable crop option, we're helping farmers mitigate risks associated with climate change and market fluctuations.
Fostering a spirit of innovation and entrepreneurship in local agribusiness sectors. Our training programs and knowledge transfer initiatives are inspiring a new generation of agripreneurs who are finding creative solutions to local challenges.
Through these initiatives, Homics International is not just driving agricultural change but is actively contributing to the broader socio-economic transformation of communities across SSA. We're helping to build a future where the benefits of the soy industry extend far beyond the farm, touching lives and livelihoods throughout the region.`,
    bg: "url(/hero-section/bg-4.svg)",
  },
];

const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

export const OurProjects: React.FC = () => {
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const handleShowMore = (text: string) => {
    setSelectedText(text);
  };

  const closeModal = () => {
    setSelectedText(null);
  };

  return (
    <main
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-section/section-bg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-[1440px] mx-auto flex flex-col gap-4 pt-[clamp(1.5rem,4.5vw,4.5rem)] px-[clamp(1rem,2vw,2rem)] pb-[clamp(1rem,2vw,2rem)]">
        <h3 className="text-white font-semibold text-[1.25rem] text-center">
          Our Impressive Impact
        </h3>
        <h3 className="text-green-500 font-xs text- text-center">

          At Homics International, our work extends far beyond business operations. We're proud to drive significant changes in the agricultural landscape, particularly in Sub-Saharan Africa (SSA) and across the global soy industry. <br></br>Our impacts can be seen in the following key areas

        </h3>
        <figure className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4">
          {data.map(({ title, text, bg }, idx) => {
            const truncatedText = truncateText(text, 50);
            const isTruncated = truncatedText !== text;

            return (
              <article
                key={idx}
                className="flex flex-col gap-3 rounded-xl p-[clamp(1.2rem,2vw,2rem)] min-h-[400px]"
                style={{
                  background: bg,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3
                  className={clsx(
                    idx === 1 || idx === 3
                      ? "text-white"
                      : "text-homics-success-500",
                    "text-base font-semibold"
                  )}
                >
                  {title}
                </h3>
                <p
                  className={clsx(
                    idx === 1 || idx === 3 ? "text-[#000]" : "text-[#666666]",
                    "text-sm font-medium"
                  )}
                >
                  {truncatedText}
                  {isTruncated && (
                    <span
                      className={clsx(
                        idx === 1 || idx === 3 ? "text-white  text-xs" : "text-green-500 text-xs",
                        "cursor-pointer"
                      )}
                      onClick={() => handleShowMore(text)}
                    >
                      {" "}
                      Show More
                    </span>
                  )}
                </p>
              </article>
            );
          })}
        </figure>
      </section>

      {selectedText && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto "
          >
            <h3 className="text-xl font-semibold mb-4"></h3>
            <p className="mb-4">{selectedText}</p>
            <button
              onClick={closeModal}
              className="text-white bg-green-500 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};