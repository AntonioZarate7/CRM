import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";
import path from "path";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

// Objeto que contendra las rutas
const appRoutes : Routes = [
    { path: 'dashboard', component: DashboardComponent }
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 
