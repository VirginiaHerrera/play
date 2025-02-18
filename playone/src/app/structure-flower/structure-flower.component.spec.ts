import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFlowerComponent } from './structure-flower.component';

describe('StructureFlowerComponent', () => {
  let component: StructureFlowerComponent;
  let fixture: ComponentFixture<StructureFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureFlowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
