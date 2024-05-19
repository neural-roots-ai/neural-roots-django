# neural-roots-django
# neural-roots-django

# Referance - https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/

## Prod
sudo docker compose -f docker-compose.prod.yml up -d --build
    sudo docker compose -f docker-compose.prod.yml logs acme-companion
sudo docker compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
sudo docker compose -f docker-compose.prod.yml exec web python manage.py collectstatic --noinput
sudo docker compose -f docker-compose.prod.yml down -v


## Staging
docker-compose -f docker-compose.staging.yml exec web python manage.py migrate --no-input --clear
docker-compose -f docker-compose.staging.yml exec web python manage.py collectstatic --no-input --clear



sudo docker compose -f docker-compose.staging.yml up -d --build

docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
docker-compose -f docker-compose.staging.yml exec web python manage.py collectstatic --no-input --clear

Ref
https://forum.djangoproject.com/t/mime-type-text-html-is-not-a-supported-404-static-files-nginx-uwsgi-production/10459
