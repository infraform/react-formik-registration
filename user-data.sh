#! /bin/bash

yum update -y
amazon-linux-extras install docker -y
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user
newgrp docker
docker pull devenes/formik-registration:2
docker run -d -p 80:3000 --name formik-registration devenes/formik-registration:2