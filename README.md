# PlanApp
Simple react planning todo/inprogress/done app for your plans

# Starting backend server
```
git clone <githubclone.git>
cd react-plan-app/backend
npm run start:dev
```
### Adding MongoDB api key to .env file
You need to create a account on Mongo Atlas and obtain a api key!!<br>
https://www.mongodb.com/cloud/atlas
```
DB_URI = mongodb+srv://<name>:<password>@<mongoDBName>-ciwbt.mongodb.net
SECRET_KEY=<asecretkey(doesnt matter what you write)>
```
### Adding Sendgrid api key for mailing to .env file
You also need to create a account on Sendgrid and obtain a api key!!<br>
https://sendgrid.com
```
SENDGRID_API_KEY=<sendgridapikey>
```
# Starting client server
```
cd react-plan-app/client
npm start
```
<br>
and thats it! enjoy <br>
Update will come continuously 




