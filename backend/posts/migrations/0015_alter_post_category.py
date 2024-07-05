# Generated by Django 5.0.6 on 2024-07-03 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0014_delete_hashtag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.CharField(choices=[('MO', '영화'), ('BO', '도서'), ('MU', '음악'), ('EC', '경제'), ('SC', '과학'), ('SO', '사회'), ('FR', '자유')], default='자유', max_length=2, verbose_name='글 분야'),
        ),
    ]
