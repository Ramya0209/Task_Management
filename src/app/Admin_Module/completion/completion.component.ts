import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
interface Manager {
value: string;
viewValue: string;
}
@Component({
selector: 'app-completion',
templateUrl: './completion.component.html',
styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {
completedPercent = 0;
progressPercent = 0;
pendingPercent = 0;
managers: Manager[] = [
{value: 'manager-0', viewValue: 'Manager1'},
{value: 'manager2-1', viewValue: 'Manager2'},
{value: 'manager3-2', viewValue: 'Manager3'}
];
constructor() { }
ngOnInit(): void {
}
progress() {
let count =0;
let res=0;
let prog=0;
let pending=0;
const counts = [{status :"completed"},
{status :"in progress"},
{status :"pending"},
{status :"completed"}];
//completed
const Completionstatus= counts.filter(function(counts:{
status: string
}): boolean{
return counts.status === "completed"
})
for (let i = 1; i <= 2; i++) {
count += i;
}
res = ( count / counts.length ) * 100;
this.completedPercent = res;
res=40
// console.log(res+" percent")
//in progress
const progressStatus= counts.filter(function(counts:{
status: string
}): boolean{
return counts.status === "in progress"
})
for (let i = 1; i <= progressStatus.length; i++) {
count += i;
console.log(count)
}
// prog = ( count / counts.length ) * 100;
prog=20
this.progressPercent = prog;
console.log(prog+" percent")
//pending 
// this.pendingPercent = counts.length - (this.completedPercent + this.progressPercent )
pending=20

this.pendingPercent = pending;
console.log(res+" percent")
console.log(prog+" percent")
console.log(pending+" percent")
}
}