# Set up

-   Set up your Postgres database by running, in order, each of the SQL scripts in `src/backend/sqlScripts`.
-   Remember to install the dependencies by running `npm install` in your terminal.
-   Make a local copy of `src/backend/_template_config.js` and name the copy `config.js`. Update the copy's contents with your connection string, your NASA API key, and a secret for JWT encryption. The secret should be a long high-entropy string.

# Run your code

In your terminal, you have a number of commands available to you:

## `npm start`

-   Runs the project in development mode.
-   You can view your application at `http://localhost:3000`
-   The page will reload if you make edits.

## `rs`

-   While your application is running, if you need to manually restart your server, you do not need to completely kill and rebundle your application. Instead you can just type `rs` and press enter in terminal.

## `npm run build`

-   Builds the app for production to the build folder.
-   The build is minified and the filenames include the hashes.
-   Your app is now ready to be deployed!

## `npm run start:prod`

-   If you have previously built this app, this command runs the compiled app in production.
-   You can view your application at `http://localhost:3000`

# Your work process

We have an involved work process to help visibility to your project manager, and to make sure everything goes through a proper review and test.

-   Whenever you start working on a new feature, go to the Trello board and move the ticket from the "To do" column to the "In progress" column.
-   Switch your current terminal to the `main` branch, and run a `git pull` to make sure it's up to date. Other people might have made changes!
-   You should create a feature branch off `main`, where you will make your changes.
    -   To do this, make sure you're on `main`, and then run `git checkout -b your-branch-name`. Make sure you give it a descriptive name!
-   Make sure you commit regularly, and with descriptive commit messages!
-   Once you have completed your work on your branch, push it and then create a _pull request_ on GitHub. The "base" branch will be `main` and the "compare" branch will be the branch you were working on.
-   Go to the Trello board and move your ticket from "In progress" to "Review".
-   Alert your trainer, who will do a review of the code in the pull request.
    -   If there are changes requested, you should carry them out and/or discuss them with your trainer. If you make any new commits, make sure you push again. The pull request will automatically update once you have pushed. You should then alert your trainer once more so they can review the new changes.
    -   Keep going through this process until your trainer is happy with your code.
-   Once the trainer has approved it, you can click the "merge pull request" button and GitHub will merge your branch into main automatically.
-   Go to the Trello b oard and move your ticket from "Review" to "User Testing".
-   Find a teammate to manually test your changes. They will have to switch over to the `main` branch to see your newly merged changes.
-   If they find something that needs to change, move your ticket on the Trello board back to "In Progress" and begin the cycle again...
-   If they find nothing wrong, then you're done! Move your ticket on the Trello board to the "Done" column.
