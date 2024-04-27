import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  @Input() tab: Post[]=
  [
    new Post("../../assets/347245498_3570899629797993_7265237523852668848_n.jpg","Heithem Benmoussa","computer science engineer","23 December 2022","founder","Seeking a talented software developer to join our growing team! Are you passionate about coding and ready to tackle exciting projects? We're looking for someone proficient in languages such as Java, Python, or JavaScript, with experience in building scalable and maintainable software solutions. Knowledge of modern frameworks and libraries is a plus. Reach out to us if you're interested in making a difference in the world of tech."),
    new Post("../../assets/347245498_3570899629797993_7265237523852668848_n.jpg","Heithem Benmoussa","computer science engineer","23 December 2022","co-founder", "Computer Science engineer with a keen interest in IoT technology and entrepreneurship seeking a co-founder position in a forward-thinking startup. Skilled in software development, systems architecture, and project management, with a passion for leveraging technology to solve complex problems and drive business growth. Eager to apply my technical expertise and entrepreneurial spirit to help build and scale innovative IoT solutions. I'm open to any prepositions","https://media.istockphoto.com/id/178447404/fr/photo/b%C3%A2timents-daffaires-moderne.jpg?s=612x612&w=0&k=20&c=KDgacnz516dO2YiaMsiyHABoHaBhv5K1CRjHUEbcviQ="),
    new Post("../../assets/347245498_3570899629797993_7265237523852668848_n.jpg","Heithem Benmoussa","computer science engineer","23 December 2022","founder","We're on the lookout for a skilled cybersecurity specialist to fortify our defenses against digital threats. The ideal candidate should have a strong background in cybersecurity concepts and technologies, including network security, threat intelligence, and incident response. Proficiency in security tools such as SIEM, IDS/IPS, and vulnerability scanners is essential. Relevant certifications like CISSP, CISM, or CEH are highly valued. If you're adept at protecting data and staying ahead of cyber risks, we want to hear from you!"),
    new Post("../../assets/347245498_3570899629797993_7265237523852668848_n.jpg","Heithem Benmoussa","computer science engineer","23 December 2022","co-founder","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore","https://img.freepik.com/premium-photo/group-diverse-business-people-working-together-having-meeting_695793-1294.jpg")]
    user: any;

    constructor(private sharedService: SharedService) {}
  
    ngOnInit() {
      this.user = this.sharedService.getUser();
      console.log(this.user.plast_name)
    }
 //tab:Post[];
/* post_object={
  picture:"src/assets/347245498_3570899629797993_7265237523852668848_n.jpg",
  person_name:"Heithem Benmoussa",
  person_status:"computer science engineer",
  post_date:"",
  text_content:"",
  media_content:""
 }*/
 
 

}


