#!/bin/sh 
echo starting liferay docker env
sudo docker compose up -d --build
sudo docker compose logs -t --follow rd-liferay