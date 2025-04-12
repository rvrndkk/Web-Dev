import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { VacancyService } from '../../services/vacancy.service';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, VacancyFormComponent],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    this.loadCompany();
  }

  loadCompany(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(id).subscribe({
      next: (company) => {
        this.company = company;
        this.loadVacancies(id);
      },
      error: (err) => console.error('Failed to load company', err)
    });
  }

  loadVacancies(companyId: number): void {
    this.vacancyService.getCompanyVacancies(companyId).subscribe({
      next: (vacancies) => this.vacancies = vacancies,
      error: (err) => console.error('Failed to load vacancies', err)
    });
  }

  onVacancyCreated(): void {
    if (this.company) {
      this.loadVacancies(this.company.id);
    }
  }
}