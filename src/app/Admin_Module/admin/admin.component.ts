import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.route.navigate(['/login']);
}
}
