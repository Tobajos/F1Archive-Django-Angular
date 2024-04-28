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
    path('getGp/<int:id>',views.getTeamDetail),
    path('updateGp/<int:id>',views.updateGp),
    path('deleteGp/<int:id>',views.deleteGp),

    path('getTeams', views.getTeamList),
    path('postTeam', views.addTeam),
    path('getTeam/<int:id>', views.getTeamDetail),
    path('updateTeam/<int:id>', views.updateTeam),
    path('deleteTeam/<int:id>', views.deleteTeam),
]