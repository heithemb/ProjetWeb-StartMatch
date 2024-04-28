import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup, FormBuilder,  ReactiveFormsModule  } from '@angular/forms';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.css'
})
export class FormPersonComponent {
  signUpForm: FormGroup;
  invalidSignUp: boolean = false;
  constructor(private sharedService: SharedService,private formBuilder: FormBuilder,public shared:SharedService , private router: Router, private apiService: ControllerService) {
    this.signUpForm = this.formBuilder.group({
    email: [''],
    password: [''],
    phone: [null], // Utilisez null comme valeur par défaut
    firstName: [''],
    lastName: [''],
    confirmPassword: [''],
    yearOfExperience: [null],
    dateOfBirth: [''],
    address: [''],
    field: [''],
    skills: [''],
    bio: [''],
    gender: [''],
    jobPosition: ['']
  });

  }

  onSubmit() {
    // Récupérer tous les contrôles du formulaire
    const emailControl = this.signUpForm.get('email');
    const passwordControl = this.signUpForm.get('password');
    const phoneControl = this.signUpForm.get('phone');
    const firstNameControl = this.signUpForm.get('firstName');
    const lastNameControl = this.signUpForm.get('lastName');
    const confirmPasswordControl = this.signUpForm.get('confirmPassword');
    const yearOfExperienceControl = this.signUpForm.get('yearOfExperience');
    const dateOfBirthControl = this.signUpForm.get('dateOfBirth');
    const addressControl = this.signUpForm.get('address');
    const fieldControl = this.signUpForm.get('field');
    const skillsControl = this.signUpForm.get('skills');
    const bioControl = this.signUpForm.get('bio');
    const genderControl = this.signUpForm.get('gender');
    const jobPositionControl = this.signUpForm.get('jobPosition');
  
    // Vérifier si tous les champs obligatoires sont valides
    if (emailControl && emailControl.value !== null &&
        passwordControl && passwordControl.value !== null &&
        firstNameControl && firstNameControl.value !== null &&
        lastNameControl && lastNameControl.value !== null &&
        confirmPasswordControl && confirmPasswordControl.value !== null &&
        yearOfExperienceControl && yearOfExperienceControl.value !== null &&
        dateOfBirthControl && dateOfBirthControl.value !== null &&
        addressControl && addressControl.value !== null &&
        fieldControl && fieldControl.value !== null &&
        skillsControl && skillsControl.value !== null &&
        bioControl && bioControl.value !== null &&
        genderControl && genderControl.value !== null &&
        jobPositionControl && jobPositionControl.value !== null) {
          
      // Récupérer les valeurs des champs
      const email = emailControl.value;
      const password = passwordControl.value;
      const phone = phoneControl ? phoneControl.value : null; // Vérifier si le champ existe
      const firstName = firstNameControl.value;
      const lastName = lastNameControl.value;
      const confirmPassword = confirmPasswordControl.value;
      const yearOfExperience = yearOfExperienceControl.value;
      const dateOfBirth = dateOfBirthControl.value;
      const address = addressControl.value;
      const field = fieldControl.value;
      const skills = skillsControl.value;
      const bio = bioControl.value;
      const gender = genderControl.value;
      const jobPosition = jobPositionControl.value;
  
      if (password !== confirmPassword) {
        // Afficher une alerte si les mots de passe ne correspondent pas
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
        return; // Arrêter l'exécution de la fonction
      }

      // Envoyer les données d'inscription au service API
      this.apiService.signup( 
        email, password, phone, firstName, lastName,
        yearOfExperience, dateOfBirth, address, field, skills, bio, gender, jobPosition 
      ).subscribe((response: any) => {
        if (response.message) {
          // Gérer les erreurs d'inscription ici (par exemple, email déjà utilisé)
          alert("Erreur: " + response.message);
        } else {
          // L'inscription a réussi, stocker les informations utilisateur dans le service partagé et rediriger vers une autre page
          
          this.router.navigate(['/login-form']); // Rediriger vers la page de tableau de bord après l'inscription
        }
      }, (error: any) => {
        console.error(error);
      });
    }
  }
}
