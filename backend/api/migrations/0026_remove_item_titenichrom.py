# Generated by Django 5.0.4 on 2024-07-06 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_item_titenichrom'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='TItenichrom',
        ),
    ]
