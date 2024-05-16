from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Team, Driver, GrandPrix, RaceResult

from .serializers import TeamSerializer, DriverSerializer, GrandPrixSerializer, RaceResultSerializer
# Create your views here.

# ------------------------ Drivers ------------------------

@api_view(['GET'])
def getDriversList(request):
    drivers = Driver.objects.all()
    serializer = DriverSerializer(drivers, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def addDriver(request):
    team = Team.objects.get(pk=request.data['team'])
    serializer = DriverSerializer(data=request.data,context = {'team' : team})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getDriverDetail(request, id):

    try:
        driver = Driver.objects.get(pk = id)
    except Driver.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = DriverSerializer(driver)
    return Response(serializer.data)
    
@api_view(['PUT'])
def updateDriver(request, id):  
    try:
        driver = Driver.objects.get(pk = id)
    except Driver.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    team = Team.objects.get(pk=request.data['team'])
    serializer = DriverSerializer(driver, data=request.data,context = {'team' : team})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def deleteDriver(request,id):
    try:
        driver = Driver.objects.get(pk = id)
    except Driver.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    driver.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# ------------------------ Grand Prix ------------------------

@api_view(['GET'])
def getGPList(request):
    gp = GrandPrix.objects.all()
    serializer = GrandPrixSerializer(gp, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def addGP(request):
    winner = Driver.objects.get(pk=request.data['winner'])
    serializer = GrandPrixSerializer(data=request.data,context = {'winner' : winner})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getGpDetail(request,id):
    try:
        gp = GrandPrix.objects.get(pk=id)
    except GrandPrix.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = GrandPrixSerializer(gp)
    return Response(serializer.data)

@api_view(['PUT'])
def updateGp(request,id):
    try:
        gp = GrandPrix.objects.get(pk=id)
    except GrandPrix.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    winner = Driver.objects.get(pk=request.data['winner'])
    serializer = GrandPrixSerializer(gp, data=request.data,context = {'winner' : winner})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteGp(request,id):
    try:
        gp = GrandPrix.objects.get(pk=id)
    except GrandPrix.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    gp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    
# ------------------------ Drivers ------------------------

@api_view(['GET'])
def getTeamList(request):
    team = Team.objects.all()
    serializer = TeamSerializer(team, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def addTeam(request):
    serializer = TeamSerializer(data=request.data)
    print(request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getTeamDetail(request,id):
    try:
        team = Team.objects.get(pk=id)
    except Team.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = TeamSerializer(team)
    return Response(serializer.data)

@api_view(['PUT'])
def updateTeam(request,id):
    try:
        team = Team.objects.get(pk=id)
    except Team.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = TeamSerializer(team, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteTeam(request,id):  
    try:
        team = Team.objects.get(pk=id)
    except Team.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    team.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# ------------------------ Race Results ------------------------


@api_view(['GET'])
def getRaceResultsList(request):
    race_results = RaceResult.objects.all()
    serializer = RaceResultSerializer(race_results, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def addRaceResult(request):
    driver = Driver.objects.get(pk=request.data['driver'])
    serializer = RaceResultSerializer(data=request.data,context = {'driver' : driver})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getRaceResultDetail(request, id):
    try:
        race_result = RaceResult.objects.get(pk=id)
    except RaceResult.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = RaceResultSerializer(race_result)
    return Response(serializer.data)
    
@api_view(['PUT'])
def updateRaceResult(request, id):  
    try:
        race_result = RaceResult.objects.get(pk=id)
    except RaceResult.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = RaceResultSerializer(race_result, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def deleteRaceResult(request, id):
    try:
        race_result = RaceResult.objects.get(pk=id)
    except RaceResult.DoesNotExist:        
        return Response(status=status.HTTP_404_NOT_FOUND)
    race_result.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def getRaceResultsByGP(request, id):
    try:
        race_results = RaceResult.objects.filter(grand_prix=id)
        serializer = RaceResultSerializer(race_results, many=True)
        return Response(serializer.data)
    except RaceResult.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
