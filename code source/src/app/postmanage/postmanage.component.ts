
import { Component, Input } from '@angular/core';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
import { Post } from '../models/post'; // Import du modèle Post

@Component({
  selector: 'app-postmanage',
  templateUrl: './postmanage.component.html',
  styleUrls: ['./postmanage.component.css'] // Le styleUrl doit être styleUrls
})
export class PostmanageComponent {
  @Input() post!: Post; // Renommage de postId en post et correction de la référence dans le template

  constructor(private controller: ControllerService, private router: Router) {}

  deletePost() {

    // Appel de la méthode deletePost du service ControllerService
    this.controller.delete(`Post/deletePost.php?idpost=${this.post.idpost}`).subscribe(
      response => {
        console.log(response);
        // Rediriger vers une autre page après la suppression réussie
        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Post deletion failed:', error);
        // Rediriger vers une autre page en cas d'échec de la suppression
        this.router.navigate(['/profile']);
      }
    );
  }
}


