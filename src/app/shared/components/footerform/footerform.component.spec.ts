import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterformComponent } from './footerform.component';

describe('FooterformComponent', () => {
  let component: FooterformComponent;
  let fixture: ComponentFixture<FooterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
