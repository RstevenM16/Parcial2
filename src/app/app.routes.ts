import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { Jugadores1Component } from "./components/jugadores1/jugadores1.component";
import { Jugadores2Component } from "./components/jugadores2/jugadores2.component";
import { Jugadores3Component } from "./components/jugadores3/jugadores3.component";

const APP_ROUTES: Routes = [
    {path: "jugadores",component:JugadoresComponent},
    {path: "footer",component:FooterComponent},
    {path: "header",component:HeaderComponent},
    {path:"jugador",component:Jugadores1Component},
    {path:"jugador2",component:Jugadores2Component},
    {path:"jugador3",component:Jugadores3Component},
    {path:'**',pathMatch:'full',redirectTo:'About'}
    
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);