// Javascript Tooling & Webflows..



// In the last module - we learnt of splitting our code in multiple files so we can work easily - but there's a disadvantage here - multiple httpRequest for those files to load...
// Here we'll learn about managing our project with certain tools that automatically optimize our code, combine our code...
// We'll use the project with the files drag-drop, the one we used in the lecture before this.

// We will use the help of tooling.
// We're using one of those tool - the server.
// We used this server as a realistic example for the web-server environment..


---------------------------------------------------------------------------------------------------------


// 1. Project Limitations & Why We Need Tools...

// Let's dig into potential limitations we face with basic JS projects.
// There are also necessary tools for this limitations which we'll talk about next...

/* 
Might have to micromanage imports if we use all the files as script tags.
We also gotta have lot of unnecessary HTTP requests..

Our code isn't optimized - not as small as possible..
We could strip out the features that only we need and not the computer - we would get small code bundles which would make our application load faster..

Not better optimized browser support - it would be amazing to have a tool to convert modern code to browser optimized old code..

We constantly need to reload the webpage to see the changes - it would be nice to have a tool - a development server that automatically reloads the page whenever the code changes.

We also have to check our code quality.
We could configure the code for ourselves and might wanna check if the code follows the rules we set up for ourselves to ensure it is properly written and is of good quality...
*/ 


// We will use different tools for these problems.
// Different problems have different tools - we'll learn about those.
// We'll learn what the tool does and why here...
// There are more than one tool here to solve a task - depends on us which one we use - we'll study about the best.

/* 
The Development Server:
We can server under (more) realistic circumstance, auto reload the page.
The tool we can use for this is - webpack-dev-server

The Bundling Tool:
It analyzes all our imports and exports when we use JS modules & then it combines these different files into the single bundled file or couple small files bundles, so that we don't have these dozens of HTTPRequests.
We write our code in multiple files but when we upload it somewhere its merged into one single file so that we have the better development experience...
The tool we can use - WEBPACK..

Code Optimization Tool:
When we deploy our code we want it to be optimized, not when we write cause then it'll be hard to understand or read.
We wanna have shorter function name, whitespace removed, etc. things which when removed doesn't break our code..
The tool for it - Webpack Optimizer Plugins..]

Code Compilation Tool:
When we wanna make our code compitable for older browsers we use the transpilation tool - which takes our code and transpiles it to code that also works on older browsers.
The tool for it - Babel.
But we'll dive into it later when we study about browser support in other module.

Code Quality Checker:
To check code quality, check for conventions & patterns. 
Tool for this is - ESLint...
*/


---------------------------------------------------------------------------------------------------------


// 2. Workflow Overview...

// How do we combine this tools?
// When we write our code - we wanna have 2 different workflow which we can start.
// Workflow starts upon "Save" or Command..

// During Development - which should start whenever we save changes to our code.
// For Production - Which we wanna start with a certain command - that should start when we explicitly want it to start...

// No matter which workflow we are in we would need NPM & Node.js.
// These should be installed globally.
// Node.js will be used by many of the tools BTS.
// NPM is used to install these tools and orchestrate them & start these different workflows..

// Inside of these workflows....

// During Development:
// We wanna have Linting setup - ESLint - to check code quality.
// Bundling - Webpack - to combine different files to couple of bigger files - for http management.
// Reload Dev Server - automatically reloading whenever we change our code..

// For Production Upon Command:
// Also use linting here.
// Also the bundling.
// Compilation - Babel - to translate from modern JS to JS that older browser understands..
// Optimization - We don't do it during development cause it makes debugging harder.
// Production-ready Code - to upload to a server.


----------------------------------------------------------------------------------------------------------


// 3. Setting Up a npm Project..

// Let's start with linting.
// In VS Code there's a certain extension..
// We install - ESLint.

// We use our last lecture project here.
// In app.js we use eslint - ctrl+shift+p to open up and enable eslint by typing - here I don't see any enabling option.
// We can install eslint globally or in the project.
// I installed it globally but wanna install it specifically on this project.
// For that with the development server - ctrl+` - in there pressing ctrl+C to clear - and in there we make this project managable by NPM...

// With NPM, we wanna install packages which are exclusive to our project.
// Don't wanna install them globally but just here...
// For that we have to create NPM Configuration file - it tells npm to manage this project as well as different dependencies.

// Execute:
npm init // inside of the cmd terminal server... 
// There we're asked to define a package name.
// We can confirm the default here - by simply hitting enter. We can enter different values too.
// Then we get the description - we don't have to enter but we can - we enter - JS Complete Guide.
// Entry point - we leave it as it is.
// Test command could also be left empty.
// Git repositiory - we can leave it to default.
// We leave the others - on author we can write our name.
// Let everything else be on default for now..

// With this we would have package.json file which we shouldn't delete.
// If we open thta we should see settings we just confirmed
// With this - the project can be managed by NPM.
// Which means we can now install project specific tools with npm..


------------------------------------------------------------------------------------------------------------


// 4. Working with npm Packages...

// We can install our first package here in terminal.
// We type npm install --save-dev eslint and press enter to install it in here.
// --save-dev : this means we wanna install the following package as a development dependency of this project - cause it's not a third-party package which we use when we upload the code - we just use this package to do something with code during development. That's why we say this is development dependency.

// This will install eslint in the project.
// In package.json we can see we have devdependencies with eslint version.
// We also have package-lock.json but we can ignore it...

// IMPORTANT - we have a node modules folder now.
// This folder holds the dependencies that we installed.
// There're lot of packages in there..
// We can see eslint in there and the code eslint uses is there.
// IMP note - we should never change code in node modules as they are 3rd party packages and none of our business..

// We should delete it when we wanna share our code and install again with npm install..
// When we install npm will go into package.json and look into our dependencies and install all of em.


----------------------------------------------------------------------------------------------------------


// 5. Linting with ESLint...

// How do we use ESLint?
// With the extension - we open the command with ctrl+shift+P and type eslint and select create eslint configuration...

// Now I was burdened with error - module can't be found - I was in depth of this problem and can't find the solution, checked everywhere - overflow, youtube, reddit, etc.
// JOST the teaching assistant, cleared this up for me. The name of the main folder (20. JS tooling & Workflow) where all these subfolders (3. Starting Projects) are there, contained special characters - like &...
// Jost suggested that I remove the & and viola it worked - the module works now, I'm back on track.....

// Jost's answer - Sometimes npm has problems on Windows if the project path contains spaces and special chars, like &. This could very well be the reason here.
// I gotta be careful now...
// Back to the lecture...

// Now when we create eslint configuration, in terminal we can see some questions.
// We can choose how we wanna use any.

// If we wanna check the syntax.
// If we wanna check the syntax and find problems...
// If we wanna check the syntax, find problems and enforce code style...

// We can basically choose how strict we wanna be there.
// We will go with the last options.
// Then we get the questions as below:

// What type of modules does your project use? ...
// JavaScript modules (import/export)
//  CommonJS (require/exports)
//  None of these

// We choose if we are using modules and how we are using them.
// We are using default JS import export modules. (We ignore the other option for now).
// There's another question that asks which framework we are using.
// We don't use any framework as of now.
// We also don't use typescript so we can say no to that question too...
// We select browser for where our code runs...
// Now we can choose if we want a popular style guide as a preset - a code style guide defined and developed by other people. Or - if we wanna answer a couple of questions about our style to create our own guide OR if our file should be inspected so that a style guide is generated.
// We try the last option here...

// We will describe the path name of the file we want to generate a style guide for - app.js.
// IMP - to remain in harmony with the lectures - we need to install the eslint version 6.4.0 cause it's the only option to inspect the JS file to work - cause other version have removed it....

// assets/scripts/app.js
// We then get the option to select the config file - we will select JSON.
// After selecting JSON we would get eslintrc.json file in our folder...
// We can learn how to use this file on the official documentation which we find on npm.js and in the resources link...

// We see the eslintrc.json file and we can see there are various rules stated here...
// Now to search inside the file - CTRL + F.
// We search for 'quotes' - we can see double in it...
// Now if we use single quotes in place of double quotes - we need to first restart our vs code - and we can see ESLint kicking in - saying string must use double quotes...

// On the app.js we see that global.this is undefined - when we put our mouse cursor on it - we can see a quick fix for it - we disable no-undef for that error...
// I used disable for this file - cause it was showing problem in document. too - so we can see a comment on the top of the file - if we disable for a particular error - we can see the comment on top of it..

// Now we go to other files...
// Analytics and so on and fix them all...
// For analytics.js we can see - Unexpected blank line after variable declarations.eslint (newline-after-var)
// We can fix it by quick fix or we can go to the eslintrc file and search the newline-after-var thing and change that there = we ise always so we force a new line after every variable or const...
// To know what to change = either we need the official docs or we will need to use autocomplete - CTRL+SPACE in there..

// If we don't like the setting we can change it back.
// We can fix as much as errors we want - we need to be careful though...
// Then we can auto fix the eslint - by ctrl+shift+P and eslint auto fix...
// Also there is this error - parsing error: unexpected token = eslint - it's seen on the = signs - to fix this add: "parser": "babel-eslint" to the eslintrc.json file at the end after the rules - don't forget to add , to the end of rules{},...

// After fixing everything - we can see there we so much errors but that doesn't mean our code was bad - it meant that there are some default settings in eslint that don't allow the code to be that way..

// It's on us to allow what and not to allow...

// For now we delete all the rules except the quotes one in the eslintrc.json file...
// We can always insert a new rule...
// Like "semi": "error" - so now if we don't use semi-colon we get an error...

// There are some imp links in the text file in the folder - Configuring ESLint...

// Let's move on to bundling...


--------------------------------------------------------------------------------------------------------------


// 6. Important: Webpack Version & Configuring npm Scripts

/* 
Important: In the next lecture, we'll add a tool called "Webpack".

Make sure you install version 4 of that tool by using npm install --save-dev webpack@4 --save-exact

To make sure that this version works with Webpack v4, install this extra package: npm install cross-env

And adjust the build script (in the package.json file), which we'll add in the next lecture, to look like this:
    "build": "cross-env NODE_OPTIONS=--openssl-legacy-provider && webpack",

Once we add more scripts later in the section, always make sure to add this part before the rest of the script:
    cross-env NODE_OPTIONS=--openssl-legacy-provider && 

For example, build:dev, which we'll add in a later lecture, will become:
    "build:dev": "cross-env NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server",
*/


-----------------------------------------------------------------------------------------------------------


// 7. Bundling with Webpack...

// We use bundling all the individual scripts to a large script - so that we can write our code in a distributed way but in the end they can be merged together so that we don't have to send these multiple HTTP request...

// We use a tool - webpack - it also orchestrate our entire workflow but we'll use it now for bundling..
// We can jump into webpack's official website and learn a lot about it and can go through all the documentations...

// We need to install webpack but the guide to it is given on the above important note...

// IMP - also install = npm install --save-exact webpack-cli@3.3.9 

// How do we now use webpack?
// We need to create a configuration file where we tell webpack tool what to do...
// We add a new file on the top of eslintrc. = webpack.config.js....

// This file under the hood is executed by node.js.
// And so to make something available outside of this file we don't use export - cause of node.js - we use module.exports = {} = we set it to a JS object..
module.exports = {};
// This'll be our configuration object where we configure webpack..

// Webpack needs to know where in our source file - the entry point of our project is...
// It'll take that entry point - app.js - analyze the imports and the files and then resolve all the dependencies of that file & files related to it...

// For informing our entry point we need to organise our folder structure and split it into - input, source file and output generated files.
// We will create a new folder - src - conventional name.

// We then move App, Utility & app.js into src...
// Now in src we need to set app.js as entry point & specify SCRIPTS folder as the output point...

// We specify the entry with entry key.
module.exports = {
  entry: ''
}
// The entry pointer can just be a string but also can be a complex object, we can also use multiple entry points but here we have on central entry point.
// We specify the point from the POV of webpack.config.js file (here we write it inside the notes so we don't use the POV of notes but webpack...)
// We also specify the output - it takes value of an object where we specify the file name that should be generated and the path of where we wanna generate the file - this will be the bundled file...
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: ''
  }
}

// To generate the path we can use a utility package here build into node.js..
// We need to import it inside the webpack config file.
// We import it by storing it in a const as we need the path.
// We use require() function here - we pass the package name.
// PATH is the package name that we pass in the function...
const path = require('path');

// So this imports the path package and stores its features under the path constant.
// When we need a path in the object - we use path.resolve() - to basically build an absolute path.
// Now inside resolve( ) we wanna start in our current path and for that node.js has a global const - __dirname - gives us access to the current path where config file is stored...
// Then we write - 'assets', 'scripts'.
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, "assets", 'scripts')
  }
}

// This constructs an absolute path - output need absolute one and not a relative one...
// We added assets and scripts to the path...

// Now in package.json - we have scripts setup.
// This allows us to set up some scripts which we can run through command line.
// We can add new script in there by adding '' and the name of our choice - we choose - 'build':
// We write like this - "build": "webpack"...

// But cause of error in the future - we use the method from the above lecture - 

/* 
"build:dev": "set NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server",
"build": "set NODE_OPTIONS=--openssl-legacy-provider && webpack",
"build:prod": "set NODE_OPTIONS=--openssl-legacy-provider &&webpack --config webpack.config.prod.js"
*/

// This will use the cli tool under the hood which in turn will use the webpack tool.
// Webpack will automatically search for the webpack.config.js file - which is why it's important to name it such way - then it will take the configuration in the file into account...

// We run the file:
npm run build // in terminal...
// So we get an error which says it doesn't like the projects = [] syntax...
// It says we might need an appropriate loader to use this JS feature...
// We have this syntax in project list and project item files...
// The syntax is very new and not part of the JS specification.
// Webpack doesn't support it..
// We could make it work with a so-called loader but we'll dive into it later.
// For now we comment it & move it as as property in the constructor.
this.projects = [];
// In project items we comment this and add it to the constructor.
this.hasActiveTooltip = false;

// We rerun the npm run build...
// Then again we get a different error...
// I see a different error than Max's but he teaches that webpack as an extra utility feature doesn't require us to add the extension to our imports - .js - without extensions...
// We remove all the .js extensions from all the files..

// Then after fixing the error of Max's - my error is shown - so let's work this out...
closeTooltip = () => {
  this.detach();
  this.closeNotifier();
}
// This is the same syntax that we removed before - so we add this inside the constructor function...
// We then run - npm run build.

// We get a warning which we ignore for now..
// We also get 2 files inside the scripts folder...
// Files are = app.js & 1.app.js = which are unreadable..
// We have 2 files cause of lazy loading as it's called cause the tooltip file is only loaded when we need it...
// Therefore the tooltip code & all the dependencies depended on the tooltip are packed into their own bundle...
// So the efficiency is better cause of 2 files...

// The reason for why the file looked like it was cause webpack by default built it for production mode and already optimized it - let's see how we can change that..

// There's also an bonus entry points text document in the folder...


------------------------------------------------------------------------------------------------------------------


// 8. Development Mode & Fixing "Lazy Loading".....

// The optimizations the webpack has done are Production but we wanna do the Development default..
// For this we go to webpack.config.js = we set this in the module.exports object on the top of other key-value pair.
mode: 'development',
// We run the npm run build again...
// So we get files that are not optimized to production and we can see the code is changed except the 1.app.js file.
// The code inside it is webpacks work...
// Now we wanna see if the code in it works..
// We open our default server - serve inside cmd in terminal...
// We only make one HTTP request...

// The tooltip file is failed to load cause it's on the wrong path - looking inside the root folder.
// This 0.app.js would be found inside the scripts folder of assets.
// To work around this issue we need to add one another key inside webpack file - publicPath. 

// The thing is webpack is bundling all our project and moving it inside the scipts sub-folder.
// Server imports "assets/scripts/app.js".
// The problem is that webpack writes our app.js file such that it looks for this 0.app.js - not inside the same folder - but on the root level of our server.
// We can change this with publicPath.
// We tell webpack to look for all the files in assets/scripts.
publicPath: "assets/scripts/"

// We rerun the build and then the serve...
// Thus we get our tooltip to show up...  


----------------------------------------------------------------------------------------------------------


// 9. Using webpack-dev-server...

// We don't have the development server that would automatically reload whenever the change is made...
// We install another package..
npm install --save-dev webpack-dev-server
// Then after installation we add a devServer object inside webpack file's object..
devServer:{}
// We add a - contentBase - key which tells where our root HTML file can be found.
devServer:{
  contentBase: './'
}
// This is the same folder as config file so we can also omit the setting here...

// To use this dev server - we go to package.json and where we added build - we add "build:dev" script below it..
// I added another setting than Max's as the assistant gave me cause it helps me remain in harmony with the lecture..
"build:dev": "set NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server"

// We run npm run build:dev here...
// I get an error through which I can't go further..

// But if this error is solved...
// We can see the development server that's tied to the output.
// This is a process which keeps on running..
// It should keep on running until we are done - we can always restart it by executing the command again..

// It will watch the change and rebuild whenever we do something..
// We can visit our page through this server...

// To see the live reload - if we comment our some data - we can see the server recompiles & also reloaded the page..


----------------------------------------------------------------------------------------------------------


// 10. Generating Sourcemaps.....

// What is we wanna debug our code..
// Inside Chrome or firefox - it's pretty hard to debug the code there..
// But inside the source (dev tools) - we find a . folder where we can find our app.js original code file - but tweaked by webpack.

// To debug we gotta add devtool: to webpack file.
// In the devtool: '' we need to pass a provided development tools - how webpack links this file to the original code.

// For development we wanna have good linking for good debugging and for production we wanna minimize this..
// To check different dev tools we can go to webpack's official page and check the table of devtools.
// We here go for cheap-module-eval-source-map.
// Copy this and enter it in the string.
devtool:'cheap-module-eval-source-map'

// We will restart the build:dev in cmd and with this it's done.
// We go back to project page - we should find in the webpack/./src/app.js - we really find our original code here and we can then debug it there..

// With this the missing thing is to have a finished production workflow.
// We would optimize our code to spit our small code as possible...


--------------------------------------------------------------------------------------------------------


// 11. Building For Production....

// Here we wanna spit out optimized code so we won't need detailed source mapping - the code is harder to read but we can read it.
// We wanna make sure the output files are as small as possible..

// We need a different config file for production.
// webpack.config.prod.js
// We copy the code from other config file and just switch mode from development to production..
// We also change the dev tool - production ready - which we'll find in the official page dev tool table...
// We use cheap-source-map.

// We are ready for production.
// We need to add this script to the package.json.
// 'build:prod': ''
// Here we don't need the server - cause we don't need to run this on a server all the time - we test our development code after all..
// We just use webpack but we tell webpack which config file to use - first we add --config - we point the path name of the webpack.config.prod.js.
"build:prod": "set NODE_OPTIONS=--openssl-legacy-provider &&webpack --config webpack.config.prod.js"

// We run npm run build:prod.
// This will create a production code and will output that file on scripts sub-folder..
// We check if this runs - by serve...
// Yes everything works..

// So now we have 2 workflows - DEVELOPMENT SERVER & PRODUCTION.
// Development is used when we write our code and production is used when we deploy our code...


---------------------------------------------------------------------------------------------------------


// 12. Final Optimizations...

// There are 2 improvements we can do here...
// First is the scripts folder...
// It grows and whenever we create something new the old files are still around.
// This is not ideal - we would wanna clear the scripts folder with every build and just add the newly generated file there.
// It's easy to do with webpack - we need to tweak the configuration a bit..
// We need to install new package - npm install --save-dev clean-webpack-plugin
// This cleans webpack workflow - cleans up the webpack output folder (assets/scripts/).

// To use it in config file we need to import it - 
const CleanPlugin = require('clean-webpack-plugin')
// We add new config item entry here - 
plugins // it's a concept in webpack which allows us to apply various optimizations or transformations on the generated output or on the output folder in case of clean-webpack-plugin & not on the individual files.

// plugins is an array cause we can apply more than one plugin - here we need one - new CleanPlugin and attach CleanWebpackPlugin(known from official docs) and execute as a function...
plugins: [
  new CleanPlugin.CleanWebpackPlugin()
];
// We also add this all process inside prod config too...
// We run npm build:prod and we can see the necessary files only...

// Second Improvement is the name of the files...
// If we would deploy this files in a server - browser will cache the copies of JS & CSS files - storing copies of the files and if the files hasn't changed the next time user visits the page - browsers will keep that stored.
// We can control it on server side by setting the right resources on the headers..
// But we can force browsers to download a new version of file by simply changing the file name...

// Therefore we want these file names generate automatically - generate a new file name whenever we produce a new build...
// In production config - cause this only matters - on the output in filename - we add a dynamic element.
filename: '[contenthash].js'
// The name should be written like this cause it's a keyword of JS which tells webpack that a hash should be generated here.
// A hash is different whenever the file is changed.

// If we run build:prod - we see the names have changed..
// Now to make sure this works - we need to update the script import name in Index.HTML file..
// Only for production only (this won't work for development) - we have to change the name in index.html and then we can take our code and upload it to some server to have names changed if our content changed.


---------------------------------------------------------------------------------------------------------


// 13. Using Third Party Packages with npm & Webpack....

// In package.json we get a new way of adding third-party packages.
// In devdependencies - we add these.
// We take LODASH for example..
// We add it here again.
// Now that we use npm & bundling - we have a different way of adding lodash or any other third party libs. 
// In lodash page we can see the install with npm.
// We copy the path...
npm i --save lodash
// Thus in cmd terminal we installed lodash.
// --save and not --save-dev cause it's not a developmental dependency but we need this as a part in the final code.
// It will be added to node module folder and also in the package.json..

// This is added to the folder but not to the project.
// If we wanna use lodash - in app.js file - we import it.
// We import it in this way - 
import * as _ from 'lodash'
// * = everything, _ = the variable name lodash uses.
// Here we don't have a relative path to any file but here webpack will understand this lodash instruction when it analyzes our imports.
// If the path name - lodash here - doesn't start with .. or ./ - webpack will look into node module packages and import the package in the file.

// To get an output using lodash - we use _ and related code.
console.log(_.difference([0,1],[1,2])) 
// Here we rerun the build:dev and see that this is displayed in console...

// If we are interested in some imports such as lodash - arrays = we have some libraries that allows improved imports such as lodash/arrays is what we type instead of lodash - making the import bundle a lil bit small..
// To know more about other libs having these kinda imports we should read the official documentation of that libraries...


-----------------------------------------------------------------------------------------------------------


/* 

The following resources may be helpful.

    Official ESLint Docs: https://eslint.org/

    Official Webpack Docs: https://webpack.js.org

*/