# portfolio

This project was created with bootstrapVue

How I test and deploy:

in project directory I run
npm run serve
to run the app in dev mode opening a localhost to view in browser and test.

to deploy I type in
npm run build,
after I build, I run a script to push the build to a branch called gh-pages.

everytime gh-pages gets a new commit, AWS Amplify will automatically deploy a new page for the domain nguyensqrd.com

