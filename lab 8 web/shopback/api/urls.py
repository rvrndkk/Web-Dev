from django.urls import path
from . import views  # This imports from your api app's views

urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsList.as_view()),
    path('products/create/', views.ProductCreate.as_view(), name='product-create'),
]