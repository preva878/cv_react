import React from "react";
import './Skills.css';
import Skill from "../Skill/Skill";
import Interests from "../interest/Interests";

function Skills(){
    return (<>
        <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="4"/>
        <Skill title="CSS" rating="4"/>
        <Skill title="REACT" rating="3"/>
        <Skill title="ANGULAR" rating="3"/>
        <Skill title="NODEJS" rating="3"/>
        <Skill title="Javascript" rating="3"/>
        </div>
        <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5"/>
        <Skill title="Anglais" rating="5"/>
        <Skill title="Espagnol" rating="2"/>
        </div>
        <Interests/>
    </>
    )
}
export default Skills