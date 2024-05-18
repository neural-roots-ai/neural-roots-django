# Generated by Django 5.0.6 on 2024-05-18 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=300)),
                ('last_name', models.CharField(max_length=300)),
                ('is_active', models.BooleanField()),
                ('university', models.CharField(max_length=300)),
                ('is_degree_completed', models.BooleanField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('current_company', models.CharField(blank=True, max_length=300)),
                ('country', models.CharField(max_length=300)),
                ('current_role', models.CharField(blank=True, max_length=300)),
                ('work_experience', models.CharField(blank=True, max_length=300)),
                ('country_code', models.CharField(max_length=5)),
                ('contact_no', models.CharField(help_text='Enter phone number', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('query', models.TextField(blank=True)),
            ],
            options={
                'db_table': 'contact_us',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='NavbarItemModel',
            fields=[
                ('nav_id', models.BigAutoField(editable=False, primary_key=True, serialize=False, unique=True)),
                ('nav_name', models.CharField(max_length=20)),
                ('is_active', models.BinaryField(max_length=1)),
            ],
        ),
    ]