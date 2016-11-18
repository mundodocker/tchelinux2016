#!/bin/bash
docker pull bockmundodocker/tchelinux
docker service update --container-label-add deploy=$(date -u +%Y-%m-%dT%H:%M:%S) --image bockmundodocker/tchelinux tchelinux
