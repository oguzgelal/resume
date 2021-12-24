import { FC } from "react";
import { Resume as ResumeType } from "../data/types";
import Wrapper from "./Wrapper";
import Column from "./Column";
import Header from "./Header";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Subsection from "./Subsection";
import SubsectionHeader from "./SubsectionHeader";
import HeaderName from "./HeaderName";
import HeaderImage from "./HeaderImage";
import Renderable from "./Renderable";

type ResumeProps = {
  resume: ResumeType;
};

const Resume: FC<ResumeProps> = ({ resume }) => (
  <Wrapper>
    <Header>
      <HeaderImage src={resume.image} name={resume.name} />
      <HeaderName name={resume.name} title={resume.title} />
    </Header>

    <Column>
      {resume.sections.map((section, sectionIndex) => (
        <Section
          key={sectionIndex}
          header={<SectionHeader>{section.title}</SectionHeader>}
          subsections={section.subsections.map(
            (subsection, subsectionIndex) => (
              <Subsection key={subsectionIndex}>
                {(subsection.title || subsection.description) && (
                  <SubsectionHeader
                    title={subsection.title}
                    titleHref={subsection.titleHref}
                    description={subsection.description}
                  />
                )}
                {subsection.body &&
                  subsection.body.length > 0 &&
                  subsection.body.map((renderable, renderableIndex) => (
                    <Renderable key={renderableIndex} data={renderable} />
                  ))}
              </Subsection>
            )
          )}
        />
      ))}
    </Column>
  </Wrapper>
);

export default Resume;
