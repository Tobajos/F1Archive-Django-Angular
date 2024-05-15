# Generated by Django 5.0.4 on 2024-05-15 15:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Formula1App', '0010_remove_grandprix_winner_grandprix_distance_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='RaceResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.PositiveIntegerField(default=0)),
                ('points', models.PositiveIntegerField(default=0)),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Formula1App.driver')),
                ('grand_prix', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Formula1App.grandprix')),
            ],
        ),
    ]