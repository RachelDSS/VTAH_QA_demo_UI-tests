# VTAH_QA_demo_UI-tests
Demo of UI tests project for the VISEO TECH AN HOUR (VTAH) arround the QA job

**Note** : if you want to learn more about cypress, you can access to the learning cypress website : https://learn.cypress.io/

## Project installation
Prerequisites : 
- Node.js 
- At least one browser (chrome, edge, firefox, ...)

On the project folder run the command : 
> npm install

## Run a test

### Run a test on the graphical tool 
On the project folder execute the command :
> npx cypress open

After select the "e2e" option, choose your browser and select your test. 
You can observe your test running.



### Run a test on the headless mode

- Run all test with defaults values (configured in the **cypress.config.ts** file)
    > npx cypress run

- Run a test on a specific browser 
    > npx cypress run --browser chrome
 
- Run specifics tests by cucumber tags 
    > npx cypress run --env tags="@FEATURE_001 and @login"

- Run tests on a specific screen resolution 
    > npx cypress run --config viewportWidth=360,viewportHeight=800

All combination are possible. For more information you can see the cypress command documentation :  https://docs.cypress.io/guides/guides/command-line#cypress-run