import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.css']
})
export class VacancyFormComponent {
  @Input() companyId!: number;
  @Output() vacancyCreated = new EventEmitter<void>();

  vacancy: Omit<Vacancy, 'id'> = {
    name: '',
    description: '',
    salary: 0,
    company: this.companyId
  };

  constructor(private vacancyService: VacancyService) {}

  onSubmit(): void {
    this.vacancy.company = this.companyId;
    this.vacancyService.createVacancy(this.vacancy).subscribe({
      next: () => {
        this.vacancyCreated.emit();
        this.resetForm();
      },
      error: (err) => console.error('Failed to create vacancy', err)
    });
  }

  private resetForm(): void {
    this.vacancy = {
      name: '',
      description: '',
      salary: 0,
      company: this.companyId
    };
  }
}