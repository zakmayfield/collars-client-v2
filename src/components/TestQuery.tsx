'use client';

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

//   console.log('::: data from TestQuery.tsx :::', data?.agencyById)
  return (
    <div>
      <h3>Test Query Component</h3>
    </div>
  );
}

export default TestQuery;
