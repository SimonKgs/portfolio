import React from 'react'
import { detailsStyles } from '../styles'
import { skillsData } from '../data/cv.data'
import { SkillInterface } from '../interfaces/cv.interfaces';
import { Skill } from './';

export const Skills: React.FC = () => {

    const skills: SkillInterface[] = [...skillsData];

    const skillsSorted = skills.sort((a, b) => b.ability - a.ability)

    return (
        <>
            <p className={detailsStyles.title}>Skills</p>
            <div className="skill-list-container">
                { skillsSorted.map(({ tech, ability}) => (
                    <Skill key={`${tech.name}_skill`} tech={tech} ability={ability} />
                ))}
            </div>
        </>
    )
}