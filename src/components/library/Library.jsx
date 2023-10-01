import React from 'react'
import './library.css'

const Library = () => {
    return (
        <>
            <div className="section libSec">
                <div className="header">
                    <p className="title">
                        A lot is happening,<br />
                        We are blogging about it.
                    </p>
                </div>
                <div className="parent">
                    <div class="div1">
                        <div className="img">
                            <img src="./assets/blog01.png" alt="" />
                        </div>
                        <div className="text">
                            <p className="para">Sep 26, 2021</p>
                            <p className="subtitle">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p className="para">Read Full Article</p>
                        </div>
                    </div>
                    <div class="div2">
                        <div className="img">
                            <img src="./assets/blog02.png" alt="" />
                        </div>
                        <div className="text">
                            <p className="para">Sep 26, 2021</p>
                            <p className="subtitle">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p className="para">Read Full Article</p>
                        </div>
                    </div>
                    <div class="div3">
                        <div className="img">
                            <img src="./assets/blog03.png" alt="" />
                        </div>
                        <div className="text">
                            <p className="para">Sep 26, 2021</p>
                            <p className="subtitle">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p className="para">Read Full Article</p>
                        </div>
                    </div>
                    <div class="div4">
                        <div className="img">
                            <img src="./assets/blog04.png" alt="" />
                        </div>
                        <div className="text">
                            <p className="para">Sep 26, 2021</p>
                            <p className="subtitle">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p className="para">Read Full Article</p>
                        </div>
                    </div>
                    <div class="div5">
                        <div className="img">
                            <img src="./assets/blog05.png" alt="" />
                        </div>
                        <div className="text">
                            <p className="para">Sep 26, 2021</p>
                            <p className="subtitle">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                            <p className="para">Read Full Article</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Library