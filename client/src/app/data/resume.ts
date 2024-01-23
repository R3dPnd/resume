export interface Biography {
    name: string,
    overview: string,
    goals: string[],
    picture: string,
}

export interface Certifiation {
    name: string,
    icon: string,
    date: Date,
}

export interface Education {
    degree: string,
    major: string, 
    graduationDate: Date
}

export interface Skill {
    name: string,
    monthsExp: number,
    skillType: SkillType,
}

export enum SkillType {
    frontEnd,
    frameWork,
    language,
    devOps,
    systemDesign,
}

export interface Resume {
    biography: Biography,
    certicaions: Certifiation[],
    education: Education[],
    skills: Skill[],
}