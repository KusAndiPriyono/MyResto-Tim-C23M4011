/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Button, Card } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AddRestaurant() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    return () => {
      setShowForm(false);
    };
  });

  return (
    <Card>
      <form>
        <Button
          onClick={() => {
            showForm;
          }}
        >
          Test
        </Button>
      </form>

      {showForm && (
        <form>
          <Card>Test</Card>
        </form>
      )}
    </Card>
  );
}
