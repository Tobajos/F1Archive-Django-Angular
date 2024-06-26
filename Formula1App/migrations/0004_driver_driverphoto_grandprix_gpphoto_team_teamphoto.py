# Generated by Django 5.0.4 on 2024-05-08 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Formula1App', '0003_alter_driver_driverhistory_alter_team_teamhistory'),
    ]

    operations = [
        migrations.AddField(
            model_name='driver',
            name='driverPhoto',
            field=models.ImageField(blank=True, null=True, upload_to='driver_photos/'),
        ),
        migrations.AddField(
            model_name='grandprix',
            name='gpPhoto',
            field=models.ImageField(blank=True, null=True, upload_to='gp_photos/'),
        ),
        migrations.AddField(
            model_name='team',
            name='teamPhoto',
            field=models.ImageField(blank=True, null=True, upload_to='team_photos/'),
        ),
    ]
