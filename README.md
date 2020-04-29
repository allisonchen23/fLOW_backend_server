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
