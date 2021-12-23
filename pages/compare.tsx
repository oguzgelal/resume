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
import SubsectionParagraphs from "../components/SubsectionParagraphs";
import SubsectionPills from "../components/SubsectionPills";
import SubsectionList from "../components/SubsectionList";
import HeaderName from "../components/HeaderName";
import HeaderImage from "../components/HeaderImage";
import Link from "../components/Link";
import Important from "../components/Important";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderImage src={resume.image} name={resume.name} />
        <HeaderName>{resume.name}</HeaderName>
      </Header>

      <Column>
        <Section
          header={<SectionHeader>ABOUT ME</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionHeader
                title="User Interface Designer"
                description="Since 2010"
              />

              <SubsectionParagraphs
                items={[
                  `Minimal and formal résumé website template for print, mo­bile,
                  and desktop. The proportions are the same on the screen and
                  paper. Built with amazing`,
                  <Link
                    key="1"
                    inline
                    title="Tailwind CSS"
                    href="https://tailwindcss.com/"
                  />,
                ]}
              />
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader
                title="Front-End Developer"
                description="Since 2013"
              />
              <SubsectionParagraphs
                items={[
                  `“docs/index.html” is the main content file. By copying HTML: add
                  pages, sec­tions, subsection, and other parts.`,
                ]}
              />
              <SubsectionParagraphs
                items={[
                  <Important key="1">Important:</Important>,
                  `Too much content on one page will break the page in the form of
                  additional columns.`,
                ]}
              />
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>EXPERIENCE</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionHeader
                title="WebPraktikos Inc."
                description="Jun 2018 – Present | Web Developer"
              />
              <SubsectionParagraphs
                items={[
                  `Built doner pork chop • Served salmon, cream soft cheese, and
                  brisket • Acted 55% pork chop • Filled burgdoggen &amp;
                  frankfurter strip steak with 90% burger patties and broth`,
                ]}
              />
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader
                title="Mammoth GmbH"
                description="Feb 2017 – Apr 2018 | Android Developer"
              />
              <SubsectionList
                items={[
                  "Cooked shrimps for 2 to 3 minutes per side, or until opaque then, transfered to a serving dish with limon",
                  "Roasted a pig, turning frequently, until meat reached 160°F in the thickest part of the shoulder or thigh",
                ]}
              />
            </Subsection>,
            <Subsection key="3">
              <SubsectionHeader
                title="Exquisite Systems d.o.o."
                description="May 2015 – Dec 2016 | Software QA Specialist"
              />
              <SubsectionList
                items={[
                  "Made stockfish, which is unsalted fish, usully cod, dried by cold air and wind on wooden racks on the foreshore",
                  "Preserved meat without salt by removing fat, cutting it into very thin strips and drying it in the sun or by a fire.",
                ]}
              />
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>EDUCATION</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionHeader
                title="Graz University of Technology"
                description="2014 – 2015 | Master's Degree in Chemistry"
              />
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader
                title="Vienna University of Technology"
                description="2010 – 2013 | Bachelor’s Degree in Biology"
              />
            </Subsection>,
            <Subsection key="3">
              <SubsectionHeader
                title="Vienna University of Technology"
                description="2010 – 2013| Bachelor’s Degree in Chemistry"
              />
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>PROJECTS</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionHeader
                title="Universal Resume"
                titleHref="https://github.com/WebPraktikos/universal-resume"
                description="Since 2019 | HTML CSS"
              />
              <SubsectionParagraphs
                items={[
                  `Good design is as little design as possible. Less, but better —
                  because it concentrates on the essential aspects, and the
                  products are not burdened with non-essentials.`,
                ]}
              />
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader
                title="tailwindcss-rich-docs"
                titleHref="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                description="2017 | JavaScript"
              />
              <SubsectionParagraphs
                items={[
                  `Good design is long-lasting. It avoids being fashionable and
                  therefore never appears antiquated.`,
                  <br key="1" />,
                  `Good design is honest. It does not make a product more
                  innovative, powerful or valuable than it really is.`,
                ]}
              />
            </Subsection>,
            <Subsection key="3">
              <SubsectionHeader
                title="Third One"
                description="2013 – 2014 | Vue"
              />
              <SubsectionParagraphs
                items={[
                  `Good design is innovative. Technological development is always
                  offering new opportunities for innovative design.`,
                ]}
              />
            </Subsection>,
            <Subsection key="4">
              <SubsectionHeader
                title="Fantastic Project"
                description="2012 | JavaScript"
              />
              <SubsectionParagraphs
                items={[
                  `Strip steak tail capicola alcatra ground round tenderloin ar.
                  Venison tri-tip porchetta, brisket tenderloin pig beef.`,
                ]}
              />
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>SKILLS</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionHeader title="JavaScript" description="Middle Level" />
              <SubsectionParagraphs
                items={[
                  `Good parts: pure function, higher-order functions, factory
                  functions, composition. Bad parts: inheritance, this, new.`,
                ]}
              />
              <SubsectionPills
                items={["ES6", "Vue", "Functional Programming", "Node"]}
              />
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader title="Other" />
              <SubsectionPills
                items={[
                  "CSS",
                  "Rust",
                  "Git",
                  "Go",
                  "Linux Server",
                  "UI Design",
                  "Photoshop",
                  "Illustrator",
                  "Figma",
                  "Typography",
                ]}
              />
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>CONTACT</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <SubsectionList
                items={[
                  <Link
                    key="1"
                    title="webpraktikos.com"
                    href="//webpraktikos.com"
                  />,
                  <Link
                    key="2"
                    title="twitter.com/webpraktikos"
                    href="//twitter.com/webpraktikos"
                  />,
                  "1020 Wien, Austria",
                  "hi@webpraktikos.com",
                  "(+43) 0699 77 33 77 55",
                ]}
              />
            </Subsection>,
          ]}
        />
      </Column>
    </Wrapper>
  );
};

export default Home;
