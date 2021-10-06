before beginning need a heroku account, installed heroku and postgres, psql

> > code in terminal

deploy to heroku:
general deployment instructions
https://devcenter.heroku.com/articles/git

add-on postgres
https://elements.heroku.com/addons/heroku-postgresql

1.
clone/fork the repo

2.

> > heroku create

<!-- if you want to give it a specific name do heroku create thisismyname -->

> > use addons to make sure sequelize dtabase is created see step 5

3.
check to see if successful and pushing to right place

> > git remote -v
> > should show remote branches heroku

4.
change .env file with the new heroku link DATABASE_URL=new heroku link

5.
add-on postgres

> > https://elements.heroku.com/addons/heroku-postgresql
> > in front end bookbuddy
> > change the Redux/Types link appropriately to same heroku link

6.

add/commit to github repo/heroku

> > git add .
> > git commit -m "first commit"
> > git push
> > git push heroku master

To run locally:
in the api file

Create a local running db for easier troubleshooting

1. create a local db

createdb nameofdatabase

> > createdb bookbuddy
> > env
> > env shows the environment, should not have a database URL yet, step 2..

2.
add a database_url
export DATABASE_URL=postgressurl/dbname with the following command make sure the postgres url is accurate

> > export DATABASE_URL=postgresql://localhost:5432/dbname
> > (I have "book" as my local db currently so use DATABASE_URL=postgresql://localhost:5432/book git stat)

3. run yarn to make sure all dependences are installed
   the "env" command in the terminal shows the terminals local environment, export DATAbase command should
   update the env to show the url, will have to do this in every terminal instance

   > > yarn

4. migrations should go automatically through the yarn command, if they do not
   run migrations with sequelize cli command if migrations don’t auto go through yarn, uh,google?

5. to verify data in db

   > > psql nameofdb
   > > is the nameofdb has capital letter like DatabaseName
   > > psql "DatabaseName"

6. update the front end code url in the Redux/Types to be the local link, the very bottom variable is what is being exported into other files for use in all of the redux/action files. Currently we named it heroku, but should be renamed to be fitting if you are switching between local and heroku deployment

7. Future modifications to database after deployed to heroku and local will require a migration:
   type in the folowing line to terminal get help, including the "$" sign
"$(npm bin)/sequelize --help"
   look for migration:generate, can type in
   "\$(npm bin)/sequelize migration:generate --help"
