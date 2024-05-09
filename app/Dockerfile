###########
# BUILDER #
###########

FROM  node:alpine3.16 as node_builder
COPY . /home
WORKDIR /home/neural-roots-ui
RUN npm install
RUN npm run build

###########
# Final #
###########

# pull official base image
FROM python:3.11.4-slim-buster as base
WORKDIR /home
COPY . .

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat

# install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN sed -i 's/\r$//g' entrypoint.sh
RUN chmod +x entrypoint.sh

# copy node build
RUN mkdir -p $home/neural-roots-ui/build
COPY --from=node_builder /home/neural-roots-ui/build /home/neural-roots-ui/build

# run entrypoint.sh
ENTRYPOINT ["/home/entrypoint.sh"]