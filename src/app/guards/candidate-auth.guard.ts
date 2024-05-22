import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const candidateAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router=inject(Router)

  if(authService.isAuthenticatedCandidate){
    return true
  }else{
    router.navigate(['/login']);
    return false
  }};
