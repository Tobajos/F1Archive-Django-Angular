# Generated by Django 5.0.4 on 2024-05-07 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Formula1App', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='teamHistory',
            field=models.TextField(blank=True, max_length=500),
        ),
    ]
