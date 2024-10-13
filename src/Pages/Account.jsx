import { useLocation } from 'react-router-dom';

function Account() {
  const location = useLocation();
  console.log(location);

  return <div></div>;
}
export default Account;
