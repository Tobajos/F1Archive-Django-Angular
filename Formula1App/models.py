from django.db import models

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    teamPrincipal = models.CharField(max_length=100, blank=False, null=False)
    teamHistory = models.TextField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Driver(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    surname = models.CharField(max_length=100, blank=False, null=False)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    driverHistory = models.TextField(max_length=255, blank=True)

    def __str__(self):
        return self.name +  self.surname
    
class GrandPrix(models.Model):
    name = models.CharField(max_length=100,blank=False, null=False)
    date = models.DateField()
    gpHistory = models.TextField(max_length=255, blank=True)
    winner = models.ForeignKey(Driver, on_delete=models.CASCADE)

    def __str__(self):
        return self.name