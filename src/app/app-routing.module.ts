import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-gaurd.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    { path: 'not-found', component: PagenotfoundComponent },
    { path: '**', redirectTo: '/not-found' }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}