import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    component.a = 5;
    component.b = 3;
    component.add();
    expect(component.result).toBe(8);
  });

  it('should add null and a number resulting in number', () => {
    component.a = null;
    component.b = 15;
    component.add();
    expect(component.result).toBe(15);
  });

  it('should subtract two numbers', () => {
    component.a = 10;
    component.b = 4;
    component.subtract();
    expect(component.result).toBe(6);
  });

  it('should multiply two numbers', () => {
    component.a = 7;
    component.b = 8;
    component.multiply();
    expect(component.result).toBe(56);
  });
  
  it('should divide two numbers', () => {
    component.a = 20;
    component.b = 5;
    component.divide();
    expect(component.result).toBe(4);
  });

  it('should handle division by zero', () => {
    component.a = 20;
    component.b = 0;
    component.divide();
    expect(component.result).toBe('Error: Cannot divide by 0');
  });

  it('should divide a number and a null resulting to infinity', () => {
    component.a = 10;
    component.b = null;
    component.divide();
    expect(component.result).toBe(Infinity);
  });
});
