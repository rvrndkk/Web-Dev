from django.urls import path
from . import views
from . import views_fbv
# from views_fbv import company_list, company_detail

urlpatterns = [
    path('companies/', views.CompanyList.as_view()),
    path('companies/<int:pk>/', views.CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesList.as_view()),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view()),
    path('cbv/companies/', views.CompanyList.as_view()),
    path('cbv/companies/<int:company_id>/vacancies/', views.CompanyVacanciesList.as_view()),
    path('cbv/vacancies/', views.VacancyList.as_view()),
    path('cbv/vacancies/top_ten/', views.TopTenVacancies.as_view()),
    path('fbv/companies/', views_fbv.company_list),
    path('fbv/companies/<int:id>/', views_fbv.company_detail),
]