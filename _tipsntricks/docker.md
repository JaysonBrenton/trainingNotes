---
layout: single
title: Docker
permalink: /tipsntricks/docker
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-02-03
sidebar:
  - title: ""
    image: /assets/images/docker.png
    image_alt: "image"
    text: ""
header:
  overlay_image: /assets/images/reflections2.jpg
---
<br>

## Install
Install guide for Mac can be found [here](https://docs.docker.com/docker-for-mac/install/). Follow the bouncing ball.

## Basics
The Docker CLI, standard cmd,
<a href="{{ site.baseurl }}/assets/images/docker-cmd1.png"><img src="{{ site.baseurl }}/assets/images/docker-cmd1.png" alt="docker-cmd1"></a>

Run in interactive mode
* -it : interactive mode
* with the ubuntu image

```
$ docker run -it ubuntu /bin/bash
root@ffb8b15ead13:/# ll
total 72
drwxr-xr-x   1 root root 4096 Oct 20 14:27 ./
drwxr-xr-x   1 root root 4096 Oct 20 14:27 ../
-rwxr-xr-x   1 root root    0 Oct 20 14:27 .dockerenv*
drwxr-xr-x   2 root root 4096 Aug 21 21:14 bin/
drwxr-xr-x   2 root root 4096 Apr 24 08:34 boot/
....
```

Show running containers,
```
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
ffb8b15ead13        ubuntu              "/bin/bash"         58 seconds ago      Up 57 seconds                           epic_elion
```

Show all containers, even if not running,
```
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

Start and attach to a container,
```
$ docker start ff
$ docker attach ff
```

Stop a running container,
```
$ docker stop ff
```

Remove a container,
```
$ docker rm ff
```

Multiple containers from the same image,
* -d : detached mode. You have to manually attach to the process.
* --rm : remove the image after the process stop.

```
$ docker run -it -d --rm --name ubuntu1 ubuntu /bin/bash
$ docker run -it -d --rm --name ubuntu2 ubuntu /bin/bash
$ docker run -it -d --rm --name ubuntu3 ubuntu /bin/bash
```

Docker volumes,
* -v : creates a mount point between the host and the image.
* %CD% : current working directory.
* maxcnunes/unrar : an unrar imgage.

```
$ docker run --rm -v %CD%:/files maxcnunes/unrar unrar x -r file.rar
```

Run a particular version of node,
```
$ docker run -it --rm --name node node:7.7.4-alpine
Unable to find image 'node:7.7.4-alpine' locally
7.7.4-alpine: Pulling from library/node
709515475419: Pull complete
943e0887e008: Pull complete
c99fe67ba1a0: Pull complete
Digest: sha256:f20be1cf343dfea60d8250ed209e28ee9de9e3b69d414a9f5b0e1deb23ac0c45
Status: Downloaded newer image for node:7.7.4-alpine
> const fs = require('fs');
> fs.readdir('/', (err,path) => console.log(path));
> undefined
> [ '.dockerenv',
  'bin',
  'dev',
  ...]
```

Run a node app from a local volume,

```javascript
var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello World');
}).listen(3000);

console.log('Server is running on 3000');
```

```
$ docker run -it --rm --name node -d -v /Users/xxxxxx/Documents/Development/node/SimpleHTTPSrv/src node:7.7.4-alpine node app.js
```
