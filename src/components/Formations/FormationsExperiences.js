import React from "react";
import "./FormationsExperiences.css";
import DataFormation from "../../datas/Formations" 
import Formations from "../Formations2/Formations";
import dataExperiences from "../../datas/Experiences";
import Experiences from "../Formations2/Experiences";




function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormation}/>
      <Experiences datas={dataExperiences}/>
    </>
  )
}

export default FormationsExperiences