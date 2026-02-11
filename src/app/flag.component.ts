import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlagService } from './services/flag.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css'],
  providers:[FlagService]
})
export class FlagComponent implements OnInit {
  result: boolean | null = null;
  myForm: any;
  

  constructor(private service: FlagService, private fb: FormBuilder) {}

   ngOnInit(): void {
    this.myForm = this.fb.group({
      featureKey: ['NewDashboard'],
    user: [''],
    group: [''],
    region: ['']
    });
   }
   evaluate() {
    const { featureKey, region }= this.myForm.value;

    if (!featureKey) {
      this.result = null;
      return;
    }

    this.service
      .evaluate(featureKey!, region ?? '')
      .subscribe({
        next: (res) => this.result = res,
        error: () => this.result = false
      });
      
  }
}