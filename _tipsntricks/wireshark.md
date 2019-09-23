---
layout: single
title: Wireshark
permalink: /tipsntricks/wireshark/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-01-03
sidebar:
  - title: "Overview"
    image: /assets/images/wireshark.png
    image_alt: "image"
    text: "Wireshark"
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br><br>

Wireshark is an opensourse network capture and analysis tool.
## Deploy

### Installation

#### macOS
This installation is for macOS 10.6+

* Download the installer [here](https://www.wireshark.org/download.html)

The installer writes to the following locations:
* The main Wireshark application.
  - */Applications/Wireshark.app*
* A launch daemon that adjusts permissions on the system's packet capture devices (/dev/bpf*) when the system starts up.
  - */Library/LaunchDaemons/org.wireshark.ChmodBPF.plist*
* A copy of the launch daemon property list, and the script that the launch daemon runs.
  - */Library/Application Support/Wireshark/ChmodBPF*
* A wrapper script and symbolic links which will let you run Wireshark and its associated utilities from the command line. You can access them directly or by adding /usr/local/bin to your PATH if it's not already in your PATH.
  - */usr/local/bin*
* The folder name in this file is automatically added to PATH
  - */etc/paths.d/Wireshark*
* The folder name in this file is used by the man command.
  - */etc/manpaths.d/Wireshark*
* Additionally a group named access_bpf is created. The user who opened the package is added to the group.

#### Linux
* sudo yum install wireshark-gnome.x86_64

### Uninstallation
1.	Remove /Applications/Wireshark.app
2.	Remove /Library/Application Support/Wireshark
3.	Remove the wrapper scripts from /usr/local/bin
4.	Unload the org.wireshark.ChmodBPF.plist launchd job
5.	Remove /Library/LaunchDaemons/org.wireshark.ChmodBPF.plist
6.	Remove the access_bpf group.
7.	Remove /etc/paths.d/Wireshark
8.	Remove /etc/manpaths.d/Wireshark

### Wrapper Script
How does the wrapper script work? What if I move Wireshark.app?

The script should find the Wireshark application bundle and run the appropriate executable automatically. It looks for Wireshark.app in the following locations:

* The path set in the WIRESHARK_APP_DIR environment variable
  - /Applications/Wireshark.app
* The first path returned by mdfind "kMDItemCFBundleIdentifier == 'org.wireshark.Wireshark'"

If you move Wireshark.app the script should automatically find it. If it doesn't you will have to set WIRESHARK_APP_DIR to the path to (and including) Wireshark.app. Automatic discovery might fail if you have multiple copies of Wireshark installed on your system or if Spotlight indexing isn't working properly.

### NMAP
Not Wireshark but a nice option for port inspection.
* Nmap ("Network Mapper") is a free and open source (license) utility for network discovery and security auditing.
* Download (for macOS) [here](https://nmap.org/download.html#macosx)

```
<hostname>:bin <username>$ nmap localhost
Starting Nmap 7.70 ( https://nmap.org ) at 2018-09-12 13:31 AEST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.011s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 804 closed ports, 182 filtered ports
PORT      STATE SERVICE
nn/tcp    open  abc

Nmap done: 1 IP address (1 host up) scanned in 5.19 seconds
<hostname>:bin <username>$
```

## The OSI Model
Quick refresher on the OSI model.

| Layer			|Data| Layer |
|-----------|-------------|-------------|
| Layer 7	| Data | **Application**. Network process to application.|
| Layer 6	| Data | **Presentation**. Data representation & encryption.|
| Layer 5	| Data | **Session**. Interhost communication.|
| Layer 4	| Segments | **Transport**. End to end connections & reliability.|
| Layer 3	| Packets | **Network**. Path determination and IP (logical addressing).|
| Layer 2	| Frames | **Data Link**. MAC & LLC (physical addressing).|
| Layer 1	| Bits | **Physical**. Media, signal & binary transmission.|

More info can be found [here](https://en.wikipedia.org/wiki/OSI_model)

## Configuration

### Start Wireshark

* On a Linux box;

```
$ sudo wireshark
```

* On Mac, just run it from the Applications folder.

### Start Listening
* Select a network interface to monitor then hit the 'Start' button.
