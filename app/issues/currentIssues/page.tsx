"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Heading, Strong, Text, highContrastProp } from '@radix-ui/themes';
import { Status } from '@prisma/client';

// Assuming your issue data has a similar structure
interface Issue {
  id: number;
  title: string;
  description: string;
  status: Status;
}

const IssuesList = () => {

  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('/api/issues');
        setIssues(response.data); // Assuming your API returns an array of issues
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching issues');
        setLoading(false);
      }
    };

    fetchIssues();
  }, []); // Run the effect only once when the component mounts

  const handleDeleteIssue = async (issueId: number) => {
    try {
   
      await axios.delete(`/api/issues/` + issueId);
      // If successful, update the list of issues without the deleted one
      setIssues((prevIssues) => prevIssues.filter((issue) => issue.id !== issueId));
    } catch (error) {
      console.error('An error occurred while deleting the issue:', error);
      // Handle the error, e.g., set an error state
    }
  };

  const handleStatusChange = async (issueId : number, newStatus : Status) => {
    try {
      await axios.patch(`/api/issues/` + issueId , { status: newStatus });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="border p-4 mb-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul className='flex flex-col space-y-6 max-w-2xl'>
          {issues.map((issue) => (
            <div>
            <Card className='border border-orange-700 rounded hover:scale-105 transition-transform' key={issue.id}>
          <div className="flex items-center">
            <div className=" mb-3 flex gap-x-2">
              <p>
                <Strong className='mr-1'>Title:</Strong>
                <span className={issue.status === "IN_PROGRESS" ? 'text-green-600' : issue.status === "CLOSED" ? 'text-red-700' : ''}>
                  {issue.title}
                </span>
              </p>
              <Text>
                <Strong> Status: </Strong>
                <span className={issue.status === "IN_PROGRESS" ? 'text-green-600' : issue.status === "CLOSED" ? 'text-red-700' : ''}>
                  {issue.status}
                </span>
              </Text>
            </div>
          </div>
          <div className=''>
          <div className=''>
            <Text> <Strong> Description: </Strong> {issue.description}</Text>
          </div>
          <div className='flex gap-x-2'>
              {issue.status === "OPEN" && (
             <Button color="green" onClick={() => handleStatusChange(issue.id, "IN_PROGRESS")}>
              Mark as In Progress
            </Button>
          )}
          {issue.status === "IN_PROGRESS" && (
            <Button
              onClick={() => handleStatusChange(issue.id, "CLOSED")}
              disabled={issue.status !== "IN_PROGRESS"}
              > Mark as Closed</Button>
              )}
            <Button variant="outline" color="ruby" onClick={() => handleDeleteIssue(issue.id)}>Delete</Button>
            </div>
          </div>

           </Card>
          </div>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssuesList;
