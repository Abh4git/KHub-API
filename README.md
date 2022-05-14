# KnowledgeHub-API
Repository for holding Knowledge Hub - API Service providing RESTful Endpoints

# Folder Structure
 ![Introduction, Overview and Steps] The folders are organized as:  
 +--src  - Contains Source Code.  
 +--tests - Contains test scripts.  
 +--docs - Contains design and other documentation.  
 +--images - Contains relevant images.   

# Development Environment
![Current State]
1. Prerequistes:  
  1.1 - Nodejs installed  
  1.2 - VSCode installed  
  1.3 - MongoDb installed  
  1.4 - Docker installed  
2. Getting Started (Later...)
	2.0 Clone or Download the Source Code from GitHub
	2.1 Build API Docker image by using command:    
	docker build ./src/ -t knowledehub-api
	2.2 Run Docker - Compose by using command:  
	docker-compose up -d
	2.3 See if your service is running:  
	Navigate to http://localhost:8082/  
	Browser should show {"message":"Welcome to KnowledgeHub-API Service."}
	
