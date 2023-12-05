import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const RandomHookApi = (url) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    console.log("users", users)

    const fetchRandomUsers = useCallback(async () => {
        try {
          setLoading(true);
          const allUsers = await axios.get(url);
          const { data } = allUsers;
          const { results: userList } = data;
          const { name: { first, last }, picture: { thumbnail } } = userList[0];
          setUsers((prevUsers) => [...prevUsers, { name: `${first} ${last}`, pic: thumbnail }]);
          setLoading(false);
        } catch (error) {
          console.error("Error occurs upon fetching users", error.message);
          setLoading(false);
        }
      }, [url]);
      
      useEffect(() => {
        fetchRandomUsers();
      }, [fetchRandomUsers]);
      

    const next = () => {
        if (currentIndex < users.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(users.length)
            fetchRandomUsers()
        }
    }

    const previous = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
  }

    return [users, users[currentIndex], loading, previous, next, currentIndex]

}

export {RandomHookApi}