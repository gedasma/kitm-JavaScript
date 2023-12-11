import Article from "../article/Article";
import PostsData from "../../data/posts";
import { useState } from "react";
import AddArticle from "../AddArticle/AddArticle";
import { useId } from "react";
// let articleId = 0

const Main = ()=>{
    const [clicked, setClicked] = useState(false);
    const [posts,setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    console.log(clicked);
    const showNewsForm = () =>{
        setShowForm(true)
    }
    const hideNewsForm = () =>{
        setShowForm(false)
    }
    const handleClick = ()=>{
        if (clicked == false){
            setClicked(true)
        }
        else{
            setClicked(false)
        }
    }
    
    const handleFormData = (data)=>{
        // articleId += 1
        // data.id = articleId
        setPosts((prevData)=>{
            
            return [data,...prevData]
        })
    }
    console.log("is main komponento", posts)
    // if(clicked){
    //     return(
    //         <div>Testas</div>
    //     )
    // }
    // else{
        
    // }
    return (
    <main>
        <div className="container">
            <button onClick={showNewsForm}>Prideti naujiena</button>
            <h1>Naujienos</h1>
            {posts.map((post)=>
                <Article key={post.id} title={post.title} description={post.description}/>
            )}
            <button onClick={handleClick}>Paspaudziau</button>
            {/* {clicked && <h1>Mygtukas yra paspaustas</h1>} */}
            {clicked ? <h1>Mygtukas yra paspaustas</h1>:<div>kazkas kitas</div>}

            {showForm && 
            <div>
                <h2>Prideti naujiena</h2>
                <AddArticle onSave={handleFormData} hideForm={hideNewsForm}/>
            </div>}
            
        </div>

        
    </main>
    );
}

export default Main