import React from 'react'
import UsersTable from '../../compoents/tables/UsersTable'
import { useGetAllUsersQuery } from '../../http/service/usersService'

const AllUsers = () => {
  //@ts-ignore
  const {data: users, isLoading, isError} = useGetAllUsersQuery(1)

  return (
    <div>
      <UsersTable data={users} isLaoding={isLoading} isError={isError} />
    </div>
  )
}

export default AllUsers