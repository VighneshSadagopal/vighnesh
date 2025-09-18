interface SkillItemProps {
    skillName: string;
    proficiency: string;
    description: string;
    percentage: number;
}
export default function SkillItem({ skillName, proficiency, description, percentage }: SkillItemProps) {
    return (
        <li className="skills-item">
            <div className="title-wrapper">
                <h5 className="h5">{skillName} - {proficiency}</h5>
                <data value={percentage}>{percentage}%</data>
            </div>
            <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${percentage}%` }} />
            </div>
        </li>
    );
}