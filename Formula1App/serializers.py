from rest_framework import serializers
from .models import GrandPrix, Driver, Team, RaceResult
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('is','username','password')
        extra_kwargs = {'password': {'write_only': True}}

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
        fields = ('id', 'name','country')
    

class RaceResultSerializer(serializers.ModelSerializer):
    driver = DriverNameSerializers(many=False, read_only=True)
    class Meta:
        model = RaceResult
        fields = '__all__'

    def validate(self,validated_data):
        driver = self.context['driver']
        validated_data['driver'] = driver
        return validated_data

class RaceResultInfoSerializer(serializers.ModelSerializer):
    driver = DriverNameSerializers(many=False, read_only=True)
    grand_prix = GrandPrixNameSerializer(many=False, read_only=True)
    class Meta:
        model = RaceResult
        fields = '__all__'

    def validate(self,validated_data):
        driver = self.context['driver']
        validated_data['driver'] = driver
        return validated_data
    
