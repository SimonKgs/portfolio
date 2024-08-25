export interface WorkExperience {
    position: string;
    company: string;
    months: number;
    description: string;
    technologies: TechnologyInterface[];
}

export interface TechnologyInterface {
    name: string;
    imgUrl: string;
}

export interface EducationInterface {
    degree: string;
    institution: string;
    year: number;
    details: string;
    degreeImg?: string;
}

export interface ProjectInterface {
    name: string;
    description: string;
    projectUrl?: string;
    projectImg: string;
}

export interface SkillInterface {
    tech: TechnologyInterface;
    ability: number;
}