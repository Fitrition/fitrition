import { TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { PureCssLoadingModule } from 'angular-pure-css-loaders';

import { AppComponent } from './app.component';
import { ConstructionZoneComponent } from './construction-zone/construction-zone.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, PureCssLoadingModule],
      declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        ConstructionZoneComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
