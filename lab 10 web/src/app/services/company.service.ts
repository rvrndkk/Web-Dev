import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiUrl = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}/`);
  }

  createCompany(company: Omit<Company, 'id'>): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }
}