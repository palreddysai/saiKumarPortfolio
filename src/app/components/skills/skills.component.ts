import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillsList = [
    {skillName: "HTML", skillProgress:95},
    {skillName: "CSS", skillProgress:90},
    {skillName: "JavaScript", skillProgress:80},


    {skillName: "TypeScript", skillProgress:80},
    {skillName: "Angular", skillProgress:80},
    {skillName: "React", skillProgress:80},

    
    {skillName: "Bootstrap", skillProgress:95},
    {skillName: "Angular Material", skillProgress:90},


    {skillName: "NodeJs", skillProgress:80},    
    {skillName: "Java", skillProgress:75},

    
    {skillName: "MySql", skillProgress:75},
    {skillName: "MongoDB", skillProgress:75},

    
    {skillName: "Git", skillProgress:80},

  ]
}
