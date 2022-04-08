import React from 'react'

const Card = ({ item }) => {
    const tags = item.tags.split(',')
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-sm">
                <img src={item.userImageURL} alt="" className='w-full' />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo by {item.user}
                    </div>
                    <ul>
                        <li><strong>views :</strong> {item.views}</li>
                        <li><strong>Downlord :</strong> {item.downloads}</li>
                        <li><strong>likes :</strong> {item.likes}</li>
                    </ul>
                    <div className="py-4">
                            {tags.map((tag,index) => (
                        <span key={index} className='inline-flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #{tag}
                        </span>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card