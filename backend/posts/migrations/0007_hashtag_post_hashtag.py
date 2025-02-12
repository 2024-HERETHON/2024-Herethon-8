# Generated by Django 5.0.6 on 2024-07-02 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0006_alter_post_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='HashTag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hashtag', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='hashtag',
            field=models.ManyToManyField(to='posts.hashtag'),
        ),
    ]
