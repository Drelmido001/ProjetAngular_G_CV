import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './signin/login.component';
import { HomeComponent } from './pagedacceuil/home.component';
import { RegisterComponent } from './signup/register.component';
import { JobListComponent } from './listetravail/job-list.component';
import { JobDetailComponent } from './detailstravail/job-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './Entreprise/company.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './entete/header.component';
import { CompleteProfileComponent } from './completeprofile/complete-profile.component';
import { CompleteCompanyComponent } from './EntrpriseComplete/complete-company.component';
import { CompanyProfileComponent } from './profileEntreprise/company-profile.component';
import { RegistreCondidatComponent } from './signinCandidat/registre-condidat.component';
import { RegistreCompanyComponent } from './signinEntreprise/registre-company.component';
import { AddJobComponent } from './AjouterOffre/add-job.component';
import {CompanyNavbarComponent} from "./navbar-Entreprise/company-navbar.component";
import { PostulationJobComponent } from './postulationtravail/postulation-job.component';
import {ListPostulationComponent} from "./listepostulation/list-postulation.component";
import {CommonModule} from "@angular/common";
import {PostulationCandidatComponent} from "./postulation-candidat/postulation-candidat.component";
import { NavarProfileComponent } from './navar-profile/navar-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    JobListComponent,
    JobDetailComponent,
    ProfileComponent,
    CompanyComponent,
    HeaderComponent,
    CompleteProfileComponent,
    CompleteCompanyComponent,
    CompanyProfileComponent,
    RegistreCondidatComponent,
    RegistreCompanyComponent,
    AddJobComponent,
    CompanyNavbarComponent,
    PostulationJobComponent,
    ListPostulationComponent,
    PostulationCandidatComponent,
    NavarProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
