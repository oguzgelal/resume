/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import resume from "../resume";
import Wrapper from "../components/Wrapper";
import Column from "../components/Column";
import Header from "../components/Header";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Subsection from "../components/Subsection";
import SubsectionHeader from "../components/SubsectionHeader";
import HeaderName from "../components/HeaderName";
import HeaderImage from "../components/HeaderImage";
import Renderable from "../components/Renderable";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderImage src={resume.image} name={resume.name} />
        <HeaderName>{resume.name}</HeaderName>
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
};

export default Home;
