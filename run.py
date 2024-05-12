import os
import argparse

env_dict =  {
    'prod':False,
    'staging':False,
    'test':False,
    'dev':False
}

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('-e', '--env', type=str,
                        help='What env do you want to run application?')
args = parser.parse_args()
env_dict[args.env.lower()] = True

if env_dict['prod']:
    os.system('sudo docker compose -f docker-compose.prod.yml up -d --build')
    os.system('sudo docker compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput')
    os.system('sudo docker compose -f docker-compose.prod.yml exec web python manage.py collectstatic')

if env_dict['staging']:
    os.system('sudo docker compose -f docker-compose.staging.yml up -d --build')
    os.system('sudo docker compose -f docker-compose.staging.yml exec web python manage.py migrate --noinput')
    os.system('sudo docker compose -f docker-compose.staging.yml exec web python manage.py collectstatic')

if env_dict['test']:
    os.system('sudo docker compose -f docker-compose.test.yml up -d --build')
    os.system('sudo docker compose -f docker-compose.test.yml exec web python manage.py migrate --noinput')
    os.system('sudo docker compose -f docker-compose.test.yml exec web python manage.py collectstatic')

if env_dict['dev']:
    pass



