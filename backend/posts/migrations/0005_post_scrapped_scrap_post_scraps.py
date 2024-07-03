# Generated by Django 5.0.6 on 2024-07-02 18:36

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_alter_comment_created_at_alter_comment_post'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='scrapped',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Scrap',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='scraps',
            field=models.ManyToManyField(blank=True, related_name='scrapped_posts', through='posts.Scrap', to=settings.AUTH_USER_MODEL),
        ),
    ]
