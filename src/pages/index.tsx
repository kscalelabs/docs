import { useHistory } from '@docusaurus/router';
import type { ReactElement } from 'react';
import { useEffect } from 'react';

export default function Home(): ReactElement {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the intro page
    history.replace('/intro');
  }, [history]);

  return (
    <div style={{
      padding: '20px',
    }}>
      Redirecting...
    </div>
  );
}
