import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagedacceuil/home.component';
import { LoginComponent } from './signin/login.component';
import { RegisterComponent } from './signup/register.component';
import { JobListComponent } from './listetravail/job-list.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailComponent } from './detailstravail/job-detail.component';
import { CompanyComponent } from './Entreprise/company.component';
import {CompleteProfileComponent} from "./completeprofile/complete-profile.component";
import {CompleteCompanyComponent} from "./EntrpriseComplete/complete-company.component";
import {CompanyProfileComponent} from "./profileEntreprise/company-profile.component";
import {RegistreCondidatComponent} from "./signinCandidat/registre-condidat.component";
import {RegistreCompanyComponent} from "./signinEntreprise/registre-company.component";
import {candidateAuthGuard} from "./guards/candidate-auth.guard";
import {companyAuthGuard} from "./guards/company-auth.guard";
import {AddJobComponent} from "./AjouterOffre/add-job.component";
import {ListPostulationComponent} from "./listepostulation/list-postulation.component";
import {PostulationCandidatComponent} from "./postulation-candidat/postulation-candidat.component";

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/candidate',component:RegistreCondidatComponent},
  { path: 'register/company',component:RegistreCompanyComponent},
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'company/:id', component: CompanyProfileComponent,canActivate:[companyAuthGuard]},
  { path: 'complete-profile/:id', component: CompleteProfileComponent},
  { path: 'complete-company/:id', component: CompleteCompanyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'company/add/Jobs',component:AddJobComponent,canActivate:[companyAuthGuard]},
  { path: 'listPostulation',component:ListPostulationComponent,canActivate:[companyAuthGuard]},
  { path: 'candidate/postulation',component:PostulationCandidatComponent,canActivate:[candidateAuthGuard]}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
