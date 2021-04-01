import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth-guard-service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { InvoiceComponent } from './print/invoice/invoice.component';
import { PrintLayoutComponent } from './print/print-layout/print-layout.component';


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
      },
      {
        path: 'print-layout',
        // outlet: 'print',
        component: PrintLayoutComponent
        // ,
        // children: [
        //   { path: 'invoice', component: InvoiceComponent }
        // ]
      },



    ]
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


