import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard-service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
    {
        path: '',
        children: [

            { path: '', component: LoginComponent },

            {
                path: 'login', component: LoginComponent
                //  data: { breadcrumb: 'login' },
            },
            {
                path: 'home',
                //  data: { breadcrumb: 'app.home' },

                children: [
                    {
                        path: '',
                        component: HomeComponent, canActivate: [AuthGuardService]
                    },
                ]
            }

        ]
    }
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });