from django.contrib import admin
from .models import Driver,Team,GrandPrix,RaceResult
# Register your models here.


admin.site.register(Driver)
admin.site.register(GrandPrix)
admin.site.register(Team)
admin.site.register(RaceResult)