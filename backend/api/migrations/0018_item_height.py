# Generated by Django 5.0.4 on 2024-07-05 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_item_civil_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='height',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
