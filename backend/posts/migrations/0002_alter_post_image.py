# Generated by Django 5.0.6 on 2024-07-01 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='이미지'),
        ),
    ]
