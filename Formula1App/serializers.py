from rest_framework import serializers
from .models import GrandPrix, Driver, Team, RaceResult

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamNameSerializers(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['name','teamPhoto','id']

class DriverSerializer(serializers.ModelSerializer):
    team = TeamNameSerializers(many=False,read_only=True)

    class Meta:
        model = Driver
        fields = '__all__'

    def validate(self,validated_data):
        team = self.context['team']
        validated_data['team'] = team
        return validated_data
    
class DriverNameSerializers(serializers.ModelSerializer):
    class Meta:
        model =Driver
        fields = ('id','name','surname')
    
class GrandPrixSerializer(serializers.ModelSerializer):   
    class Meta:
        model = GrandPrix
        fields = '__all__'
    

class GrandPrixNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrandPrix
        fields = ('id', 'name')
    

class RaceResultSerializer(serializers.ModelSerializer):
    driver = DriverNameSerializers(many=False, read_only=True)
    class Meta:
        model = RaceResult
        fields = '__all__'

    def validate(self,validated_data):
        driver = self.context['driver']
        validated_data['driver'] = driver
        return validated_data
