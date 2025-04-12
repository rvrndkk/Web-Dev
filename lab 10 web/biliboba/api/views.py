from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class CompanyVacanciesList(generics.ListAPIView):
    serializer_class = VacancySerializer
    
    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

class TopTenVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.order_by('-salary')[:10]