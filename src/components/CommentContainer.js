import React from 'react'

const commentsdata=[
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[]
    },
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[
            {
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        }]
    },{
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        }]
    },
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },]
    },
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },]
    },
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[]
    },{
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[]
    },
    {
        name:'Anand Maurya',
        text:'Laboris et dolor anim excepteur.',
        replies:[{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },{
            name:'Anand Maurya',
            text:'Laboris et dolor anim excepteur.',
            replies:[]
        },]
    }

]
const Comment=({data})=>{
    const {name,text,replies}=data
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
            className='w-8 h-8'
            alt="user"
            src="data:image/png;base64,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"
            >
            </img>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
const CommentList=({comments})=>{
return  comments.map((comment,index)=> (
    <div  key={index}  >
        <Comment data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            {/* recursing on the same component  */}
            <CommentList comments={comment.replies}/> 

        </div>
    </div>
    )
    )
}
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentList comments={commentsdata}/>
    </div>
  )
}

export default CommentContainer