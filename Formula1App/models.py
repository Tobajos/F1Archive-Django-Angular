from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    teamPrincipal = models.CharField(max_length=100, blank=False, null=False)
    teamHistory = models.TextField(max_length=2000, blank=True)
    teamPhoto = models.ImageField(upload_to='team_photos/', blank=True, null=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Driver(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    surname = models.CharField(max_length=100, blank=False, null=False)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    driverHistory = models.TextField(max_length=2000, blank=True)
    driverPhoto = models.ImageField(upload_to='driver_photos/', blank=True, null=True)
    number = models.PositiveIntegerField(blank=False, null=False, default=0)
    points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name +  self.surname
    
class GrandPrix(models.Model):
    name = models.CharField(max_length=100,blank=False, null=False)
    country = models.CharField(default=0,max_length=50,blank=False, null=False)
    date = models.DateField()
    laps = models.PositiveIntegerField(default=0,blank=False,null=False)
    length = models.FloatField(default=0,)
    distance = models.FloatField(default=0)
    gpHistory = models.TextField(max_length=255, blank=True)
    gpPhoto = models.ImageField(upload_to='gp_photos/', blank=True, null=True)

    def __str__(self):
        return self.name    
    
class RaceResult(models.Model):
    grand_prix = models.ForeignKey(GrandPrix, on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    position = models.PositiveIntegerField(default=0) 
    points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.driver} - {self.grand_prix}"
    

@receiver(post_save, sender=RaceResult)
def update_driver_points(sender, instance, created, **kwargs):
    if created:
        instance.driver.points += instance.points
        instance.driver.save()

@receiver(post_delete, sender=RaceResult)
def subtract_driver_points(sender, instance, **kwargs):
    instance.driver.points -= instance.points
    instance.driver.save()

@receiver(post_save, sender=Driver)
def update_team_points(sender, instance, **kwargs):
    team = instance.team
    team.points = sum(driver.points for driver in team.driver_set.all())
    team.save()

@receiver(post_delete, sender=Driver)
def update_team_points_on_delete(sender, instance, **kwargs):
    team = instance.team
    team.points = sum(driver.points for driver in team.driver_set.all())
    team.save()