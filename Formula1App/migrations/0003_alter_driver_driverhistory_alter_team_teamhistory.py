# Generated by Django 5.0.4 on 2024-05-07 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Formula1App', '0002_alter_team_teamhistory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='driver',
            name='driverHistory',
            field=models.TextField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='team',
            name='teamHistory',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
