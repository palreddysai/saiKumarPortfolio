import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projectHeader: string = "Projects"
  projectData:any = []
private projectUrl = "./assets/data/projects.json"
constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get(this.projectUrl).subscribe(
      (res) => {
       this.projectData = res;
        
      }
    )
  }

}
