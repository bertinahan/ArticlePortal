import express from 'express';

class Route {
  constructor(controller) {
    this._controller = controller;
    this._init();
  }

  _init() {
    this.router = express.Router();
    this.defaultActions = [
      'create',
      'acquireOne',
      'acquire',
      'updateOne',
      'update',
      'delete',
      'deleteOne',
    ];
    this.defaultActionToRouterMapper = {
      create: {
        url: '/',
        method: 'post',
      },
      acquireOne: {
        url: '/:id',
        method: 'get',
      },
      acquire: {
        url: '/',
        method: 'get',
      },
      updateOne: {
        url: '/:id',
        method: 'put',
      },
      update: {
        url: '/',
        method: 'put',
      },
      delete: {
        url: '/',
        method: 'delete',
      },
      deleteOne: {
        url: '/:id',
        method: 'delete',
      },
    };
    this._mapActionToRoute();
  }

  _mapActionToRoute() {
    const defaultActionToRouterMapper = this.defaultActionToRouterMapper;
    const controller = this._controller;
    controller.toString();
    this.defaultActions.forEach((action) => {
      if (this._controller[action]) {
        const targetAction = defaultActionToRouterMapper[action];
        this.router[targetAction.method](targetAction.url, this._controller[action]());
      }
    })
  }
}

export default Route;
