import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamapp';

  newMemberName = "";
  members: string[] = [];
  errorMessage = ""
  numberOfTeams: number | "" = "";
  teams: string[][] = [[]];

  onInput(member: string) {
    this.newMemberName = member;
    //console.log("1==>"+this.newMemberName);

  }
  addMember(){
    if(!this.newMemberName) {
      this.errorMessage = "Name can't be empty !"
      return;
    }
    this.errorMessage='';
    this.members.push(this.newMemberName);
    //console.log("2==>"+this.members);
    this.newMemberName='';
  }

  onNumOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {

    if(!this.numberOfTeams || this.numberOfTeams <=0) {
      this.errorMessage = "Invalid number of Teams";
      return
    }

    if(this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members";
    }

    const allMembers = [...this.members];
    
    while(allMembers.length) {
      for(let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length );
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;
        if(this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] =[member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = "";
    
  }
  
}
