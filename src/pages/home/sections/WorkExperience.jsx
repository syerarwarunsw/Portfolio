import React, { useState } from "react";
import HeaderTwo from "../../../components/HeaderTwo";
import HeaderThree from "../../../components/HeaderThree";
import SectionTwo from "../../../components/SectionTwo";
import WorkExperienceCard from "../../../components/WorkExperienceCard";
import WorkExperienceDescription from "../../../components/WorkExperienceDesciption";

function WorkExperience() {
  const [hoveredWorkExperience, setHoveredWorkExperience] = useState("");
  const [clickedWorkExperience, setClickedWorkExperience] = useState("");

  const workExperienceList = [
    { colour: "#9F3B47", rotate: "5deg", top: "100px",  information: { title: "Product Manager", company: "Mastercard", description: ["Did this", "did that", "did another hing", "a", "b", "c"]}},
    { colour: "#D37B44", rotate: "-5deg", top: "200px", information: { title: "Human Centred Design", company: "ASIC",  description: ["Worked on projects for ASIC to uplift products and create new products that impacts 100,000+ organisations", "Conducted user research and usability testing with regulated organisations", "Lead the Moneysmart Homepage usability research project", "Assisted with navigating ambiguous problem spaces and ideating solutions", "Contributed to ASIC's 2030 digital vision to \"become a leading digitally enabled and data-informed regulator by 2030\""]}},
    { colour: "#B25754", rotate: "10deg", top: "300px", information: { title: "Technical Business Analyst", company: "ASIC",  description: ["Drove innovation within Digital Applications team at ASIC", "Developed templates to automate PDF generation for Professional Search Register", "Tested and analysed the release of new products, including Australian Financial Service Licence application form"]}},
    { colour: "#9F3B47", rotate: "-9deg", top: "400px", information: { title: "Digital Journey Optimisation", company: "CBA",  description: ["Drove innovation and customer experience with CommBank's new loyalty program ~ Yello", "Created and tested assets that was deliver to the live CommBank application to millions of customers", "Streamlined internal processes to reduce time by 50% for asset generation for Yello", "Conducted in-depth competitor research"]}},
    { colour: "#D37B44", rotate: "10deg", top: "500px", information: { title: "Digital A.I. Engineer", company: "Optus",  description: ["Drove innovation in an agile environment through the creation of analytical business intelligent assets and dashboards to help efficiency and effectiveness of data-driven business decision", "Developed an application to automate dashboard creation processes, reducing processes from a week to a few hours", "Managed multiple stakeholders and prioritised value creation generated by actionable-level and analytical insights"]}},
  ];

  return (
    <SectionTwo>
      <div className="flex flex-row gap-[100px] justify-between h-[200vh]">
        <div className="flex flex-col gap-11 sticky top-[100px] self-start">
          <HeaderTwo>Work Experience.</HeaderTwo>
          <HeaderThree>In the past I have worked at various different organisations (as an intern).</HeaderThree>
          <div className="h-[60vh] w-full border border-black rounded-xl flex items-center justify-center">
            {clickedWorkExperience || hoveredWorkExperience
              ? <WorkExperienceDescription workExperience={clickedWorkExperience || hoveredWorkExperience} /> 
              : "Hover to view work experience information. Click to save the work experience information."
            }
          </div>
        </div>
        <div className="flex flex-col gap-[30vh] py-[0px]">
          {workExperienceList.map((workExperience, index) => (
            <WorkExperienceCard
              workExperience={workExperience.information}
              colour={workExperience.colour}
              rotate={workExperience.rotate}
              top={workExperience.top}
              key={index}
              onMouseEnter={() => setHoveredWorkExperience(workExperience.information)}
              onMouseLeave={() => setHoveredWorkExperience("")}
              onClick={() => setClickedWorkExperience(
                clickedWorkExperience?.title === workExperience.information.title
                  ? "" : workExperience.information
              )}
              selected={clickedWorkExperience?.title === workExperience.information.title}
            />
          ))}
        </div>
      </div>
    </SectionTwo>
  );
}

export default WorkExperience;
