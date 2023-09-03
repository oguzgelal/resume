import type { ResumeSchema as JsonResume } from '../types/json-resume'
import type { Pills, List, Important, Paragraph, Section, Link, Resume as UniversalResume } from '../types/universal-resume'

import jsonResume from './sample.resume.json'

type SubSection = Section['subsections'][number]

const formatDate = (dateString: string) =>
  new Date(dateString.trim()).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

const duration = (startDate: string | undefined, endDate: string | undefined) => {
  if (!startDate) return
  return `${formatDate(startDate)} – ${endDate ? formatDate(endDate) : 'Present'}`
}

const isPresent = <TValue>(value: TValue | null | undefined): value is TValue => {
  return !!value
}

const filterJoin = (separator: string, strs: Array<string | undefined>) => {
  return strs.filter(isPresent).map((str) => str.trim()).filter(isPresent).join(separator) || undefined
}

const addressString = (location: NonNullable<JsonResume['basics']>['location']) => {
  const { address: street, postalCode, city, region, countryCode } = location || {}
  return filterJoin(', ', [
    street,
    filterJoin(' ', [postalCode, city]),
    filterJoin(' ', [region, countryCode]),
  ])
}

const contactSection = (basics: JsonResume['basics'] = {}): Section => {
  const toLink = (profile: NonNullable<NonNullable<JsonResume['basics']>['profiles']>[number]): Link | undefined => {
    const { url, username, network } = profile
    if (!url) { return }
    const text = filterJoin(' @ ', [username, network]) || url
    const link: Link = {
      type: 'link',
      text,
      href: url
    }
    return link
  }

  const { email, phone, url, profiles = [], location } = basics
  return {
    title: "Contact",
    subsections: [{
      body: [{
        type: "list",
        items: [
          url && toLink({ url }),
          phone && toLink({ url: `tel:${phone}`, username: phone }),
          email && toLink({ url: `mailto:${email}`, username: email }),
          addressString(location),
          ...(profiles.map(toLink)),
        ].filter(isPresent),
      }]
    }]
  }
}

const aboutSection = ({ summary }: JsonResume['basics'] = {}): Section | undefined => {
  if (!summary) { return }
  const body: Paragraph[] = [{ type: 'paragraph', items: [summary] }]
  return { title: 'About me', subsections: [{ body }] }
}

const fromBasics = (basics: JsonResume['basics'] = {}) => {
  const { name = '', image: nullableImage, label = '', summary } = basics
  const image = nullableImage || '/avatar.png'
  const about: Section = summary
    ? { title: 'About me', subsections: [{ description: summary }] }
    : { title: 'About me', subsections: [] }
  return { image, name, title: label, about }
}

const awardsSection = (awards: JsonResume['awards']): Section | undefined => {
  if (!(awards && awards.length > 0)) { return }
  const toSubsection = (award: NonNullable<JsonResume['awards']>[number]): SubSection => {
    const { title, summary, date, awarder } = award
    const description = filterJoin(' | ', [date && formatDate(date), awarder])
    const summaryParagraph: Paragraph | undefined = summary ? { type: 'paragraph', items: [summary] } : undefined
    const body = [
      summaryParagraph,
    ].filter(isPresent)
    return {
      title,
      description,
      body
    }
  }
  return {
    title: 'Awards',
    subsections: awards.map(toSubsection)
  }
}

const educationSection = (educations: JsonResume['education']): Section | undefined => {
  const toSubsection = (education: NonNullable<JsonResume['education']>[number]): SubSection => {
    const { url, startDate, endDate, area, score, courses, studyType, institution = '' } = education
    const description = filterJoin(' | ', [
      duration(startDate, endDate),
      filterJoin(' ', [studyType, score && `(${score})`]),
    ])
    const coursesList: List | undefined = courses ? { type: 'list', items: courses } : undefined
    const areaImportant: Important | undefined = area ? { type: 'important', text: area } : undefined
    const body = [
      areaImportant,
      coursesList,
    ].filter(isPresent)
    return {
      title: institution,
      titleHref: url,
      description,
      body
    }
  }

  if (!(educations && educations.length > 0)) { return }
  return {
    title: 'Education',
    subsections: educations.map(toSubsection)
  }
}

const certificatesSection = (certificates: JsonResume['certificates']): Section | undefined => {
  const toSubsection = (certificate: NonNullable<JsonResume['certificates']>[number]): SubSection => {
    const { name, url, date, issuer } = certificate
    const description = [date && formatDate(date), issuer].filter(isPresent).join(' | ')
    return {
      title: name,
      titleHref: url,
      description,
      body: []
    }
  }

  if (!(certificates && certificates.length > 0)) { return }
  return {
    title: 'Certificates',
    subsections: certificates.map(toSubsection)
  }
}

const publicationsSection = (publications: JsonResume['publications']): Section | undefined => {
  const toSubsection = (publication: NonNullable<JsonResume['publications']>[number]): SubSection => {
    const { name, url, summary, publisher, releaseDate } = publication
    const description = [releaseDate && formatDate(releaseDate), publisher].filter(isPresent).join(' | ')
    const summaryParagraph: Paragraph | undefined = summary ? { type: "paragraph", items: [summary] } : undefined
    const body = [summaryParagraph,].filter(isPresent)
    return {
      title: name,
      titleHref: url,
      description,
      body
    }
  }

  if (!(publications && publications.length > 0)) { return }

  return {
    title: 'Publications',
    subsections: publications.map(toSubsection)
  }
}

const projectsSection = (projects: JsonResume['projects']): Section | undefined => {
  const toSubsection = (project: NonNullable<JsonResume['projects']>[number]): SubSection => {
    const { name, type, url, roles, entity, keywords, startDate, endDate, description: projectDescription, highlights } = project
    const description = filterJoin(' | ', [duration(startDate, endDate), filterJoin(', ', roles || [])])
    const descriptionParagraph: Paragraph | undefined = projectDescription ? { type: "paragraph", items: [projectDescription] } : undefined
    const entityImportant: Important | undefined = entity ? { type: "important", text: (filterJoin(' @ ', [type, entity]) || '') } : undefined
    const highlightsList: List | undefined = highlights ? { type: 'list', items: highlights } : undefined
    const keywordsPills: Pills | undefined = keywords ? { type: 'pills', items: keywords } : undefined
    const body = [
      entityImportant,
      descriptionParagraph,
      keywordsPills,
      highlightsList,
    ].filter(isPresent)
    return {
      title: name,
      titleHref: url,
      description,
      body
    }
  }

  if (!(projects && projects.length > 0)) { return }

  return {
    title: 'Projects',
    subsections: projects.map(toSubsection)
  }
}

const volunteerSection = (volunteers: JsonResume['volunteer']): Section | undefined => {
  const toSubsection = (volunteer: NonNullable<JsonResume['volunteer']>[number]): SubSection => {
    const { summary, url, highlights, startDate, endDate, position, organization } = volunteer
    const description = filterJoin(' | ', [duration(startDate, endDate), position])
    const summaryParagraph: Paragraph | undefined = summary ? { type: "paragraph", items: [summary] } : undefined
    const highlightsList: List | undefined = highlights ? { type: 'list', items: highlights } : undefined
    const body = [summaryParagraph, highlightsList].filter(isPresent)
    return {
      title: organization,
      titleHref: url,
      description,
      body
    }
  }

  if (!(volunteers && volunteers.length > 0)) { return }

  return {
    title: 'Volunteering',
    subsections: volunteers.map(toSubsection)
  }
}

const skillsSection = (skills: JsonResume['skills']): Section | undefined => {
  const toSubsection = (skill: NonNullable<JsonResume['skills']>[number]): SubSection => {
    const { name, keywords, level } = skill
    const keywordsPills: Pills | undefined = keywords ? { type: 'pills', items: keywords } : undefined
    const body = [
      keywordsPills,
    ].filter(isPresent)
    return {
      title: name,
      description: level,
      body
    }
  }

  if (!(skills && skills.length > 0)) { return }

  return {
    title: 'Skills',
    subsections: skills.map(toSubsection)
  }
}

const interestsSection = (interests: JsonResume['interests']): Section | undefined => {
  const toSubsection = (interest: NonNullable<JsonResume['interests']>[number]): SubSection => {
    const { name, keywords } = interest
    const keywordsPills: Pills | undefined = keywords ? { type: 'pills', items: keywords } : undefined
    const body = [
      keywordsPills,
    ].filter(isPresent)
    return {
      title: name,
      body
    }
  }

  if (!(interests && interests.length > 0)) { return }

  return {
    title: 'Interests',
    subsections: interests.map(toSubsection)
  }
}

const referencesSection = (references: JsonResume['references']): Section | undefined => {
  const toSubsection = (ref: NonNullable<JsonResume['references']>[number]): SubSection => {
    const { name, reference } = ref
    const referenceParagraph: Paragraph | undefined = reference ? { type: "paragraph", items: [reference] } : undefined
    const body = [
      referenceParagraph,
    ].filter(isPresent)
    return {
      title: name,
      body
    }
  }

  if (!(references && references.length > 0)) { return }

  return {
    title: 'References',
    subsections: references.map(toSubsection)
  }
}

const languagesSection = (languages: JsonResume['languages']): Section | undefined => {
  const toSubsection = (lang: NonNullable<JsonResume['languages']>[number]): SubSection => {
    const { language = '', fluency } = lang
    return {
      title: language,
      description: fluency,
      body: []
    }
  }

  if (!(languages && languages.length > 0)) { return }

  return {
    title: 'Languages',
    subsections: languages.map(toSubsection)
  }
}


const workSection = (works: JsonResume['work']): Section | undefined => {
  const toSubsection = (work: NonNullable<JsonResume['work']>[number]): SubSection => {
    const { url, location, summary, name = '', description: companyDescription, startDate, endDate, position, highlights } = work
    const description = filterJoin(' | ', [duration(startDate, endDate), position])
    const summaryParagraph: Paragraph | undefined = summary ? { type: "paragraph", items: [summary] } : undefined
    const locationParagraph: Paragraph | undefined = location ? { type: "paragraph", items: [location] } : undefined
    const companyImportant: Important | undefined = companyDescription ? { type: 'important', text: companyDescription } : undefined
    const highlightsList: List | undefined = highlights ? { type: 'list', items: highlights } : undefined
    const body = [
      companyImportant,
      locationParagraph,
      summaryParagraph,
      highlightsList,
    ].filter(isPresent)
    return {
      title: name,
      titleHref: url,
      description,
      body
    }
  }

  if (!(works && works.length > 0)) { return }

  return {
    title: 'Experiences',
    subsections: works.map(toSubsection)
  }
}

const toUniversalResume = (jsonResume: JsonResume): UniversalResume => {
  const { meta, basics, education, work, projects, awards, skills, volunteer, interests, languages, references, certificates, publications } = jsonResume

  const { name, image, title } = fromBasics(basics)

  return {
    name, image, title, sections: [
      aboutSection(basics),
      workSection(work),
      volunteerSection(volunteer),
      educationSection(education),
      projectsSection(projects),
      awardsSection(awards),
      certificatesSection(certificates),
      publicationsSection(publications),
      skillsSection(skills),
      languagesSection(languages),
      interestsSection(interests),
      referencesSection(references),
      contactSection(basics),
    ].filter(isPresent)
  }
}


export default toUniversalResume(jsonResume);


export const __test = {
  formatDate,
  addressString,
}
