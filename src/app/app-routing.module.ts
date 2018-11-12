import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DeviceComponent }  from './device/device.component';
import {DeviceListComponent}  from './device-list/device-list.component';
import {DeviceDetailComponent} from './device-detail/device-detail.component';
import {DeviceEditComponent} from './device-edit/device-edit.component';
import {LoginComponent}  from './login/login.component'

const appRoutes:Routes = [
    {   path:'devices',component:DeviceComponent,
    children:[
        {   path:":id", component:DeviceDetailComponent },
        {   path:":id/edit",component:DeviceEditComponent}
    ]
    },
    {path:"",redirectTo:'/login',pathMatch:'full'},
    {path:"deviceEdit/:id",component:DeviceEditComponent},
    {path:"login",component:LoginComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouting  {
    
}