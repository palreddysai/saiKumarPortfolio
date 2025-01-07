import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navList:any = [
    {navBarItem:"About",routerLink:"./about"},
    {navBarItem:"Projects",routerLink:"./projects"},
    {navBarItem:"Skills",routerLink:"./skills"},
    {navBarItem:"Contact Me",routerLink:"./contactMe"},
    // {navBarItem:"Generate Report",routerLink:"/downloadReport"},
    // {navBarItem:"Create Certificate",routerLink:"/createCertificate"},
    // {navBarItem:"My Profile",routerLink:"/myprofile"},

  ]



}
