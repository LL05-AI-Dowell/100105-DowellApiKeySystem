# Generated by Django 4.1.6 on 2023-07-18 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0024_delete_plugin_apikey_flutter_flow'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apikey',
            name='Product',
            field=models.JSONField(blank=True, null=True),
        ),
    ]