import React from 'react'
import './Allbooks.css'

function Allbooks() {
    return (
        <div className='books-page'>
            <div className="books">
                <div className='book-card'>
                    <img src='https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' alt=''></img>
                    <p className='bookcard-title'>The Subtle Art Of Not Giving A Fuck</p>
                    <p className='bookcard-author'>By Pranavdhar</p>
                    <div className="bookcard-category">
                       <p>COMIC</p>
                    </div>
                    <div className="bookcard-emptybox"></div>
                </div>
                <div className='book-card'>
                    <img src='https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' alt=''></img>
                    <p className='bookcard-title'>Wings Of Fire</p>
                    <p className='bookcard-author'>By Pranavdhar</p>
                    <div className="bookcard-category">
                        <p>COMIC</p>
                    </div>
                    <div className="bookcard-emptybox"></div>
                </div>
                <div className='book-card'>
                    <img src='https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' alt=''></img>
                    <p className='bookcard-title'>Book Title is about the eorjrjdjddjdjdj sjsj djns sfnskfn</p>
                    <p className='bookcard-author'>By Pranavdhar</p>
                    <div className="bookcard-category">
                        <p>COMIC</p>
                    </div>
                    <div className="bookcard-emptybox"></div>
                </div>
                <div className='book-card'>
                    <img src='https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' alt=''></img>
                    <p className='bookcard-title'>Book Title is about the eorjrjdjddjdjdj sjsj djns sfnskfn</p>
                    <p className='bookcard-author'>By Pranavdhar</p>
                    <div className="bookcard-category">
                        <p>COMIC</p>
                    </div>
                    <div className="bookcard-emptybox"></div>
                </div>
            </div>
        </div>
    )
}

export default Allbooks