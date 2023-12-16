
# Issue Tracker made with Nextjs, MySQL, Prisma, and NextAuth

Website: https://issue-tracker-oc7x2rbi4-ahmeds-projects-4e2b796d.vercel.app/

The Issue Tracker is a multiwebapp tailored for developers, project managers, and teams, it offers a centralized platform to track, organize, and resolve issues seamlessly. With secure user authentication powered by NextAuth, robust database connectivity through Prisma and MySQL, and a dynamic user interface, this tool streamlines the issue resolution process, contributing to a fast and optimized experience for users. The Issue Tracker is an essential asset for any team striving for streamlined project development and enhanced collaboration.

## Why clone and use this project for your own uses?

- Streamlined Issue Management: Next.js, NextAuth, Prisma, and MySQL collaborate to create a centralized platform for efficient bug and task tracking, ensuring a smooth workflow. 

- Secure User Access: NextAuth integration guarantees secure user authentication, controlling access to project-related issues and maintaining data integrity.

- Robust Database Connectivity: Prisma and MySQL facilitate strong database connectivity, ensuring efficient data handling and enabling insightful reporting for precise issue tracking.

- Dynamic User Interface: Powered by Next.js, the Issue Tracker offers a dynamic and responsive interface for intuitive issue navigation, enhancing the overall user experience.

- Optimized Workflow: Leveraging Next.js capabilities, the platform streamlines workflows, ensuring a fast and efficient experience for issue resolution.

- Enhanced Collaboration: The Issue Tracker fosters team collaboration by providing real-time tracking and updates, promoting transparency and effective communication for improved productivity.


## How to host this Project on your machine

- clone project using git clone (url)
- download mySQL and do the usual setups
- run npx prisma migrate dev to get the tables on your mysql but only after you setup your mysql
- make a .env file
  
- ### on the .env file
  1- Put your database url like this
  DATABASE_URL = "mysql://root:yourusername@localhost:3306/issue-tracker"
  
  make sure that your folder name is issue-tracker and that your mySQL is on localhost 3306 and that your username is root

  2- Setup your github Id and github Secret like this for example
  GITHUB_ID= (some random numbers and letters)
  GITHUB_SECRET= (some random numbers and letters)
  
   How to setup a n Oauth on github
  - go to settings on your github
  - go to developer settings (if not enabled enable it)
  - then go to Oauths and make a new one put your url as the localhose:3000/ if your on a different local host put that
  - Your authorization Callback url will be http://localhost:3000/api/auth/callback/github

 3- your next auth secret like this:
 NEXTAUTH_SECRET: ( random key )
 how to make it you either Run 'openssl rand -base64 32' to generate a secret. 
 or you can ask chatgpt to Run 'openssl rand -base64 32'

 4- Last thing you need it your NextAuth url just make the local host your in. For this case localhost:3000/
 Like this: NEXTAUTH_URL="http://localhost:3000"

 Now your .env should be like this:
 
DATABASE_URL="mysql://root:yourusername@localhost:3306/issue-tracker"
GITHUB_ID= (some random numbers and letters)
GITHUB_SECRET= (some random numbers and letters)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET= ( random key )

and your done

if you find a bug feel free to Submit a PR request explaining the bug you found and your fix

