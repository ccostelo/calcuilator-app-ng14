import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  
  a: number | null = null;
  b: number | null = null;
  result: string | number = '';

  resetForm(): void {
    setTimeout(() => {
      this.a = null;
      this.b = null;
    }, 1500);
  }

  add(): void {
    this.result = (this.a ?? 0) + (this.b ?? 0);
    this.resetForm();
  }

  subtract(): void {
    this.result = (this.a ?? 0) - (this.b ?? 0);
    this.resetForm();
  }

  multiply(): void {
    this.result = (this.a ?? 0) * (this.b ?? 0);
    this.resetForm();
  }

  divide(): void {
    if (this.b === 0) {
      this.result = 'Error: Cannot divide by 0';
    } else {
      this.result = (this.a ?? 0) / (this.b ?? 0);
    }
    this.resetForm();
  }
}
