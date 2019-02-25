import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import launchesJson from '../assets/data/launches.json';

export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

export enum ActionTypes {
  searchAgencias, searchMisiones, searchEstados
}

export type Actions = SearchAgencias | SearchMisiones | SearchEstados;

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private resultado;
  private resultado$ = new Subject<any[]>();
  constructor() {}

  public dispatch (action: Actions) {
    switch (action.type) {
      case ActionTypes.searchAgencias:
        this.resultado = [];
        for (let i = 0; i < launchesJson.launches.length; i++) {
          if ((launchesJson.launches[i].location.pads[0].name.toLowerCase().search(action.payload) !== -1) && (this.resultado.includes(launchesJson.launches[i].location.pads[0].name) === false)) {
            this.resultado.push('pad: ' + launchesJson.launches[i].location.pads[0].name);
          }
          if (launchesJson.launches[i].rocket.name.toLowerCase().search(action.payload) !== -1 && (this.resultado.includes(launchesJson.launches[i].rocket.name) === false)) {
            this.resultado.push('roket: ' + launchesJson.launches[i].rocket.name);
          }
          if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
            if (launchesJson.launches[i].missions[0].agencies != null && launchesJson.launches[i].missions[0].agencies.length > 0) {
              if (launchesJson.launches[i].missions[0].agencies[0].name.toLowerCase().search(action.payload) !== -1 && (this.resultado.includes(launchesJson.launches[i].missions[0].agencies[0].name) === false)) {
                this.resultado.push('agency: ' + launchesJson.launches[i].missions[0].agencies[0].name);
              }
            }
          }
        }
        break;
      case ActionTypes.searchMisiones:
        this.resultado = [];
        for (let i = 0; i < launchesJson.launches.length; i++) {
          if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
            if (launchesJson.launches[i].missions[0].type === parseInt(action.payload, 10)) {
                this.resultado.push('missionStatus: ' + launchesJson.launches[i].missions[0].name);
            }
          }
        }
        break;
      case ActionTypes.searchEstados:
        this.resultado = [];
        for (let i = 0; i < launchesJson.launches.length; i++) {
          if (launchesJson.launches[i].status === parseInt(action.payload, 10)) {
            this.resultado.push('launchStatus: ' + launchesJson.launches[i].name);
          }
        }
        break;
    }
    this.resultado$.next(this.getSnapshot());
  }

/*
  public searchEstados(busqueda: any) {
    this.resultado = [];
    for (let i = 0; i < launchesJson.launches.length; i++) {
      if (launchesJson.launches[i].status === parseInt(busqueda, 10)) {
        this.resultado.push('launchStatus: ' + launchesJson.launches[i].name);
      }
    }
    this.resultado$.next(this.getSnapshot());
  }
*/

  public getSnapshot() {
    return this.resultado;
  }

  public select$ = () => this.resultado$.asObservable();
}

export class SearchAgencias implements Action {
  public type = ActionTypes.searchAgencias;
  constructor (public readonly payload?: any) { }
}

export class SearchMisiones implements Action {
  public type = ActionTypes.searchMisiones;
  constructor (public readonly payload?: any) { }
}

export class SearchEstados implements Action {
  public type = ActionTypes.searchEstados;
  constructor (public readonly payload?: any) { }
}
