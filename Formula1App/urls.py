from django.urls import path
from . import views

urlpatterns = [
    path('getDrivers', views.getDriversList),
    path('postDriver', views.addDriver),
    path('getDriver/<int:id>', views.getDriverDetail),
    path('updateDriver/<int:id>',views.updateDriver),
    path('deleteDriver/<int:id>',views.deleteDriver),

    path('getGps', views.getGPList),
    path('postGp',views.addGP),
    path('getGp/<int:id>',views.getGpDetail),
    path('updateGp/<int:id>',views.updateGp),
    path('deleteGp/<int:id>',views.deleteGp),

    path('getTeams', views.getTeamList),
    path('postTeam', views.addTeam),
    path('getTeam/<int:id>', views.getTeamDetail),
    path('updateTeam/<int:id>', views.updateTeam),
    path('deleteTeam/<int:id>', views.deleteTeam),

    path('getRaceResults', views.getRaceResultsList),
    path('addRaceResult', views.addRaceResult),
    path('getRaceResult/<int:id>', views.getRaceResultDetail),
    path('updateRaceResult/<int:id>', views.updateRaceResult),
    path('deleteRaceResult/<int:id>', views.deleteRaceResult),
    path('getRaceResultsByGP/<int:id>', views.getRaceResultsByGP),
    path('getRaceResultsByDriver/<int:id>/', views.getRaceResultsByDriver),
]