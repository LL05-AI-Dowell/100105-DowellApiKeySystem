# Generated by Django 4.2.2 on 2023-07-18 02:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='plugin_link',
            new_name='product_link',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='api_service',
            new_name='services',
        ),
    ]