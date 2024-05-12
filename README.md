# Run project on local

## Prerequisites:
docker or docker desktop install
    
step 1: 
    
    docker pull frawatson/todo-list:latest
    
step 2: 
    
    docker run -d --name todo-list -p 80:80 frawatson/todo-list:latest
    
step 3:
    
    docker ps -a
    
step 4:

    <ip-address>:<80>

step 5:

    <optional> docker stop todo-list
   
