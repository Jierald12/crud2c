# Generated by Django 5.0.4 on 2024-07-04 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_item_placeofbirth'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='sex',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], default='O', max_length=1),
        ),
    ]
