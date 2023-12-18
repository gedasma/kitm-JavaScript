import Search from "../search/Search"
import Posts from "../posts/Posts"
import PostsData from "../../data/PostsData"
import { useState } from "react"

const Main = ()=>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e)=>{
        setSearchTerm(e.target.value)
    }

    const filteredPosts = PostsData.filter((post)=>{
        return post.title.includes(searchTerm)
    })

    console.log(searchTerm)

    return(
        <div className="container">
            <Search onSearch={handleInputChange} val={searchTerm}/>
            <Posts items={filteredPosts}/>
        </div>
    )
}

export default Main