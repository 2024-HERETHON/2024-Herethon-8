# Generated by Django 5.0.6 on 2024-07-05 04:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0018_post_likes_alter_like_comment_alter_like_post'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='likes',
        ),
        migrations.AlterField(
            model_name='like',
            name='comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='posts.comment'),
        ),
        migrations.AlterField(
            model_name='like',
            name='post',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='posts.post'),
        ),
    ]
