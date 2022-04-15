import { useQuery } from "blitz"
import getCurrentUser from "queries/users/getCurrentUser"

export const useCurrentUser = () => {
  const [user, { error, isError, isFetched }] = useQuery(getCurrentUser, null)
  return user
}
