# Generated by Django 4.1.6 on 2023-07-03 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_rename_userid_apikey_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apikey',
            name='api_services',
            field=models.JSONField(null=True),
        ),
    ]
