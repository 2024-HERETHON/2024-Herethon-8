# Generated by Django 5.0.6 on 2024-07-02 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_author_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]
