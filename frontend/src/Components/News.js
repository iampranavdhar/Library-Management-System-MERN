import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates for You</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Competion-1</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-2</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-3</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-4</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-5</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Quiz-1</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-2</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-3</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-4</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-5</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
