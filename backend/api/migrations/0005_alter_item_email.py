# Generated by Django 5.0.4 on 2024-06-21 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_item_address_alter_item_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]
