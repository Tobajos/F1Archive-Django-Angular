# Generated by Django 5.0.4 on 2024-05-14 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Formula1App', '0009_alter_driver_driverphoto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grandprix',
            name='winner',
        ),
        migrations.AddField(
            model_name='grandprix',
            name='distance',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='grandprix',
            name='laps',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='grandprix',
            name='length',
            field=models.FloatField(default=0),
        ),
    ]
