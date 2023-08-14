#!/bin/bash
RUN_PORT="8000"

/opt/venv/bin/python manage.py migrate --no-input
/opt/venv/bin/gunicorn cfehome.wsgi:application --bind "0.0.0.0:${RUN_PORT}" --daemon

nginx -g 'daemon off;'
