# Generated by Django 5.0.6 on 2024-07-03 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_post_scrapped_scrap_post_scraps'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='scrapped',
        ),
        migrations.RemoveField(
            model_name='post',
            name='scraps',
        ),
    ]
