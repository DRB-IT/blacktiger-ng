import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BlacktigerNgAppComponent } from '../app/blacktiger-ng.component';

beforeEachProviders(() => [BlacktigerNgAppComponent]);

describe('App: BlacktigerNg', () => {
  it('should create the app',
      inject([BlacktigerNgAppComponent], (app: BlacktigerNgAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'blacktiger-ng works!\'',
      inject([BlacktigerNgAppComponent], (app: BlacktigerNgAppComponent) => {
    expect(app.title).toEqual('blacktiger-ng works!');
  }));
});
