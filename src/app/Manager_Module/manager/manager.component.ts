import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  isCollapsed = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.route.navigate(['/login']);
}
}
