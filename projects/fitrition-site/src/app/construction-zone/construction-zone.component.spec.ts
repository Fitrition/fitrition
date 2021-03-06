import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PureCssLoadingModule } from 'angular-pure-css-loaders';

import { ConstructionZoneComponent } from './construction-zone.component';

describe('ConstructionZoneComponent', () => {
  let component: ConstructionZoneComponent;
  let fixture: ComponentFixture<ConstructionZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureCssLoadingModule],
      declarations: [ConstructionZoneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
