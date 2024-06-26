import React, { useEffect, useState } from "react"
import { Card } from "../../components/card/Card"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Blog = () => {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
      <Card posts={posts} />
    </>
  )
}
