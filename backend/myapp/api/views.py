from django.http import HttpResponse
from django.shortcuts import render
from myapp.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *


# Create your views here.


class LoginView(APIView):
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')

        userobj = UserProfile.objects.get(username=username,password=password)
        print(userobj,"?????????????////////")

        serialized = UserProfileSerializer(userobj)
        print(serialized.data,"{{{{{{serialized.data}}}}}}")
        return Response({"message":"success","data":serialized.data})

class SignupView(APIView):
    def post(self,request):
        username=request.data.get('username')
        name=request.data.get('name')
        email=request.data.get('email')
        phone=request.data.get('phone')
        image=request.data.get('image')
        password=request.data.get('password')

        userobj = UserProfile.objects.create(username=username,name=name,email=email,
                                             phone=phone,image=image,password=password)
        print(userobj)
        return Response({"message":"success"})
    

# class HomeView(APIView):
#     def home(request):
#       return HttpResponse("Hello, this is the home page.")

    


        
        
        

        






