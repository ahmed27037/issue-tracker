import { Card, Strong, Text } from '@radix-ui/themes';
import React from 'react';

const DefaultPage = () => {
  return (
    <div className='mx-auto flex flex-col gap-y-7'>
      <header className='flex justify-center mb-3'>
        <div className='border-orange-400 border-2 rounded'>
        <Text size='6'> <Strong>Issue Tracker </Strong> </Text>
        </div>
      </header>

        <Card>
        <section>
          <Text> <Strong>-Introduction</Strong></Text>
          <p>
            Welcome to our Issue Tracker! This application is designed to help you manage and track various issues or tasks
            efficiently.
          </p>
        </section>
        </Card>

        <Card>
        <section>
        <Text> <Strong>-Functionality</Strong></Text>
          <p>
            Our Issue Tracker provides the following key functionalities:
          </p>

          <ul>
            <li>
              <strong>View Issues:</strong> Navigate to the Issues List page to see a list of all the created issues.
            </li>
            <li>
              <strong>Create New Issue:</strong> Visit the New Issue page to create a new issue by providing a title,
              description, and status.
            </li>
            <li>
              <strong>Edit and Delete Issues:</strong> Each issue in the list can be edited or deleted as needed.
            </li>
            <li>
              <strong>Update Issue Status:</strong> Change the status of an issue between Open, In Progress, and "Closed.
            </li>
            <li>
              <strong>View Statistics:</strong> Check the statistics page to see graphical representations of the distribution
              of issues based on their status.
            </li>
          </ul>
        </section>
        </Card>

        <Card>
        <section>
        <Text> <Strong>-Pages</Strong></Text>
          <p>
            The Issue Tracker consists of the following pages:
          </p>

          <ol>
            <li>
              <strong>Home:</strong> The landing page where you can find a summary or dashboard view of the issue tracker.
            </li>
            <li>
              <strong>Dash:</strong> Offers visual representations, such as pie charts and bar graphs, to help you
              understand the distribution of issues based on their status.
            </li>

            <li>
              <strong>Issues:</strong> Directs you to the two pages named Current Issues and New Issue you can choose to login or you can continue normally.
            </li>

            <li>
              <strong>Current Issues:</strong> Displays a list of all issues with their details, such as title, description, and
              status. It provides options to edit, delete, and update the status of each issue.
            </li>
            <li>
              <strong>New Issue:</strong> A page where you can create a new issue by providing necessary information.
            </li>
          </ol>
        </section>
        </Card>

      <Card>
      <footer>
        <p>Thank you for using our Issue Tracker! If you have any questions or feedback, feel free to contact me.</p>
      </footer>
      </Card>
    </div>
  );
};

export default DefaultPage;
