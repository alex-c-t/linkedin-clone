# Generated by Django 3.2.10 on 2021-12-11 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_alter_posts_photourl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='photoUrl',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
