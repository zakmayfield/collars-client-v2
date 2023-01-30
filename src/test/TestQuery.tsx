import { gql, useQuery } from '@apollo/client';

const AGENCY_BY_ID = gql`
  query AgencyById {
    agencyById {
      id
      email
      name
    }
  }
`;

function TestQuery() {
  const { data } = useQuery(AGENCY_BY_ID);
  console.log(' data ', data)
  
  return <div></div>;
}

export default TestQuery;
