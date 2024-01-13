interface Section {
    name: string,
    icon: string
}

interface SectionProps extends React.PropsWithChildren {
    title: string,
    id: string
}

interface SectionState {
    value: Section[]
}

interface EducationItem {
    name: string,
    institution: string,
    startYear: number,
    endYear: number,
    imageURL: string
}

interface EducationSectionProps {
    items: EducationItem[]
}

interface Skill {
    name: string,
    progress: number
}

interface SkillsSectionProps {
    skills: Skill[]
}