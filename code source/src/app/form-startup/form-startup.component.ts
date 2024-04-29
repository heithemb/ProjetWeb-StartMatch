import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup, FormBuilder,  ReactiveFormsModule  } from '@angular/forms';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrls: ['./form-startup.component.css'] 
})
export class FormStartupComponent {
  signUpFormS: FormGroup;
  invalidSignUp: boolean = false;
  constructor(private sharedService: SharedService,private formBuilder: FormBuilder,public shared:SharedService , private router: Router, private apiService: ControllerService) {
    this.signUpFormS = this.formBuilder.group({
    email: [''],
    password: [''],
    phone: [null], // Utilisez null comme valeur par défaut
    name: [''],
    confirmPassword: [''],
    date: [''],
    address: [''],
    field: [''],
    bio: [''],
  });}

  onSubmit() {
    // Récupérer tous les contrôles du formulaire
    const emailControl = this.signUpFormS.get('email');
    const passwordControl = this.signUpFormS.get('password');
    const phoneControl = this.signUpFormS.get('phone');
    const nameControl = this.signUpFormS.get('name');
    const confirmPasswordControl = this.signUpFormS.get('confirmPassword');
    const dateControl = this.signUpFormS.get('date');
    const addressControl = this.signUpFormS.get('address');
    const fieldControl = this.signUpFormS.get('field');
    const bioControl = this.signUpFormS.get('bio');
  
    // Vérifier si tous les champs obligatoires sont valides
    if (emailControl && emailControl.value !== null &&
        passwordControl && passwordControl.value !== null &&
        nameControl && nameControl.value !== null &&
        confirmPasswordControl && confirmPasswordControl.value !== null &&
        dateControl && dateControl.value !== null &&
        addressControl && addressControl.value !== null &&
        fieldControl && fieldControl.value !== null &&
        bioControl && bioControl.value !== null ) {
          
      // Récupérer les valeurs des champs
      const email = emailControl.value;
      const password = passwordControl.value;
      const phone = phoneControl ? phoneControl.value : null; // Vérifier si le champ existe
      const name = nameControl.value;
      const confirmPassword = confirmPasswordControl.value;
      const date = dateControl.value;
      const address = addressControl.value;
      const field = fieldControl.value;
      const bio = bioControl.value;
  
      if (password !== confirmPassword) {
        // Afficher une alerte si les mots de passe ne correspondent pas
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
        return; // Arrêter l'exécution de la fonction
      }

      // Envoyer les données d'inscription au service API
      this.apiService.signupS( 
        email, password, phone, name, 
       date, address, field, bio
      ).subscribe((response: any) => {
        if (response.message) {
          // Gérer les erreurs d'inscription ici (par exemple, email déjà utilisé)
          this.router.navigate(['/login']);
        } 
          // L'inscription a réussi, stocker les informations utilisateur dans le service partagé et rediriger vers une autre page
        
      }, (error: any) => {
        console.error(error);
      });
    }
  }
}


