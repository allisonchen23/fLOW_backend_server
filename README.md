# fLOW_backend_server
code for backend server to get data from arduino and post to ADB

### Running server on Oracle's VM
We followed these two tutorials from Medium to create a webserver on the VM's public IP address. (Creds to Jeff Davies)
1. [Tutorial 1](https://medium.com/oracledevs/getting-started-with-oracle-cloud-infrastructure-6b048dad480c)
2. [Tutorial 2](https://medium.com/oracledevs/automatically-starting-your-web-server-2b7b793dfcb4)

At this point, the webserver runs on its own, but if you want to edit the Javascript file and see immediate changes, follow these steps:

1. Edit your javascript file
2. Run the following commands in terminal
  ```
  $ sudo systemctl daemon-reload
  $ sudo systemctl reenable service_file_name.service
  $ sudo systemctl restart service_file_name.service
  $ ^C
  ```
To see console.log on the Oracle VM server, run the following command in terminal:
`$ sudo journalctl -u service_file_name.service`

### Creating a Log File
1. Find the webserver's .service file (most likely in /etc/systemd/system) and add the following line in the \[Service\] section: `SyslogIdentifier=<your_identifier>`. For example, my line was `SyslogIdentifier=fLOW_server_log.log`
2. Go to the log directory using `$ cd /var/log`
3. Create a new log file using `$ touch <log_file_name>.log`. For example: `$touch fLOW_server_log.log` (It does NOT have to be the same as **<your_identifier>**, mine just happened to be
4. Go to the directory rsyslog.d  using `$ cd /etc/rsyslog.d`
5. Create a file (doesn't matter what it's called), just end it with the **.conf** extension 
6. Inside the file insert this line:

`:programname, isequal, "<your_identifier>" path/to/<log_file_name>.log`

For example: `:programname, isequal, "fLOW_server_log.log" /var/log/fLOW_server_log.log`

7. Run the following commands:
```
$ sudo systemctl restart rsyslog
$ sudo systemctl daemon-reload
$ sudo systemctl reenable service_file_name.service
$ sudo systemctl restart service_file_name.service
$ ^C
```

Now if your Javascript has any console.log() commands, they should be output to **<log_file_name>.log** and you can see the log file contents by running: `$ cat /var/log/<log_file_name>.log`
