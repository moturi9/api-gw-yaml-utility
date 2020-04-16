import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGeneratorFormComponent } from './yaml-generator-form.component';

describe('YamlGeneratorFormComponent', () => {
  let component: YamlGeneratorFormComponent;
  let fixture: ComponentFixture<YamlGeneratorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGeneratorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
