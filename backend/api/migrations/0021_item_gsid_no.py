# Generated by Django 5.0.4 on 2024-07-05 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_item_blood_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='gsid_no',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
