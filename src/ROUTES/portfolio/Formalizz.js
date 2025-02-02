import React from 'react';
import { ProjectDataClass, SectionProjectDataClass } from "../../Classes/ProjectDataClass.tsx"
import { Project } from './Project';
import LogoRPDrancy from "../../IMG/Logo_Captain-Pare-Brise.png"
import FormalizzFrontImg from "../../IMG/Formalizz-front.jpg"


export function Formalizz(data) {
	return (
		<Project data={FormalizzData} />
	)
}

export const FormalizzData = new ProjectDataClass(
	{
		"title": "Formalizz",
		"technoList": ["PHP", "SQL"],
		"imgUrl": LogoRPDrancy,
		"projectPath": "/portfolio/Formalizz",
		"I18nDescriptionId": "project.formalizz.description",
		"listOfSection": [
			new SectionProjectDataClass(
				{
					title: "Formalizz.FrontEnd.title",
					i18nTextId: "Formalizz.FrontEnd.text",
					imgUrl: FormalizzFrontImg
				}
			)
		]
	}
)