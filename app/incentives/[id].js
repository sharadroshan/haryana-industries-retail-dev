// pages/incentives/[id].js
import { useRouter } from 'next/router';

const IncentivePage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the id parameter

  return (
    <div>
      <h1>Incentive Details Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default IncentivePage;
