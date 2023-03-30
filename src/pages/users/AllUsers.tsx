import React from 'react'
import UsersTable from '../../compoents/tables/UsersTable'
import { useGetAllUsersQuery } from '../../http/service/usersService'

const AllUsers = () => {
  const [page, setPage]=React.useState<number>(1);
  const {data: users, isLoading, isError} = useGetAllUsersQuery(page);

  return (
    <div>
      <UsersTable data={users} isLaoding={isLoading} isError={isError} page={page} setPage={setPage} />
    </div>
  )
}

export default AllUsers