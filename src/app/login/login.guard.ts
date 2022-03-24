import {CanActivate ,ActivatedRouteSnapshot ,RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { AccountService } from '../services/account.service';


//loginGuard bir servistir.Bu sebeple injectable kullanılır.
@Injectable()
export class loginGuard implements CanActivate{
    // next => gitmek istediği yer
    // state => bulunduğu yer
    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        let logged = this.accountService.isLoggedIn();
        if(logged)
        {
            return true;
        }
        //eğer oturum başarısızsa login sayfasına yönlendir.
        this.router.navigate(["login"]);
        return false;
    }

    constructor(private accountService:AccountService,
        private router : Router){}

}