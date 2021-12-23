/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Wrapper from "../components/Wrapper";
import Column from "../components/Column";
import Header from "../components/Header";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SubsectionBody from "../components/SubsectionBody";
import Subsection from "../components/Subsection";
import SubsectionHeader from "../components/SubsectionHeader";
import HeaderName from "../components/HeaderName";
import HeaderImage from "../components/HeaderImage";
import Link from "../components/Link";
import Important from "../components/Important";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderImage src="/oguz.jpg" name="Oguz Gelal" />
        <HeaderName>Oguz Gelal</HeaderName>
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

              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
                  `“docs/index.html” is the main content file. By copying HTML: add
                  pages, sec­tions, subsection, and other parts.`,
                ]}
              />
              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
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

              <ul>
                <li className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Cooked shrimps for 2 to 3 minutes per side, or until opaque;
                  then, transfered to a serving dish with limon
                </li>
                <li className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Roasted a pig, turning frequently, until meat reached 160°F in
                  the thickest part of the shoulder or thigh
                </li>
              </ul>
            </Subsection>,
            <Subsection key="3">
              <SubsectionHeader
                title="Exquisite Systems d.o.o."
                description="May 2015 – Dec 2016 | Software QA Specialist"
              />

              <ul>
                <li className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Made stockfish, which is unsalted fish, usully cod, dried by
                  cold air and wind on wooden racks on the foreshore
                </li>
                <li className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                    ›
                  </span>
                  Preserved meat without salt by removing fat, cutting it into
                  very thin strips and drying it in the sun or by a fire.
                </li>
              </ul>
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
              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
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
              <SubsectionBody
                contents={[
                  `Good parts: pure function, higher-order functions, factory
                  functions, composition. Bad parts: inheritance, this, new.`,
                ]}
              />
              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    ES6
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Vue
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Functional Programming
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Node
                  </li>
                </ul>
              </div>
            </Subsection>,
            <Subsection key="2">
              <SubsectionHeader title="Other" />

              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    CSS
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Rust
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Git
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Go
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Linux Server
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    UI Design
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Photoshop
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Illustrator
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Figma
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Typography
                  </li>
                </ul>
              </div>
            </Subsection>,
          ]}
        />

        <Section
          header={<SectionHeader>CONTACT</SectionHeader>}
          subsections={[
            <Subsection key="1">
              <ul className="list-inside pr-7">
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//webpraktikos.com" className="group">
                    webpraktikos.com
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//twitter.com/webpraktikos" className="group">
                    twitter.com/webpraktikos
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  1020 Wien, Austria
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  hi@webpraktikos.com
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  (+43) 0699 77 33 77 55
                </li>
              </ul>
            </Subsection>,
          ]}
        />
      </Column>
    </Wrapper>
  );
};

export default Home;
