# Generated by Django 4.1.6 on 2023-07-13 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_component_credit_count_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='apikey',
            name='Library',
            field=models.JSONField(null=True),
        ),
    ]