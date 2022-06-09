import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from "../../components/Navbar";
import Questions from "../services/Questions";
import { auth } from '../../firebase';

// import { collection, query, getDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from '../../firebase';

let Test = () => {

    // const [state, setstate] = useState(null);
    const [questions, setquestions] = useState([]);

    const getQuestions = async() => {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const temp = [];
        querySnapshot.forEach((doc) => {
            temp.push(Object.assign({id:doc.id},doc.data()));
          // doc.data() is never undefined for query doc snapshots
        });
        setquestions(temp);
    }

    useEffect(() => {
        getQuestions();
    }, []);

    let quesData = Questions.getQues()


    const [currentquestion, setquestion] = useState(0);

    let nextQuestion = () => {
        let nextQ = currentquestion + 1;
        if (nextQ < quesData.length) {
            setquestion(nextQ);
        }
    }

    let prevQuestion = () => {
        let prevQ = currentquestion - 1;
        if (prevQ >= 0) {
            setquestion(prevQ);
        }

    }

    return (
        <Fragment>
            <Navbar />


            <div className="container mt-4">
                {/* <div className="card"> */}
                <div className="row">
                    <div className="col">
                        {/* { questions?.length} */}
                        {/*<img src={quesData[currentquestion].questionText} alt="" className="image-size" />*/}
                        <h2 className="mb-3">Question {questions.length>0 && questions[currentquestion]?.questionNum}:</h2><h4 className="mb-3"> {questions.length>0 && questions[currentquestion]?.questionText}?</h4>
                        <div>
                            { questions.length>0 && questions[currentquestion]?.answerOptions.map((answerOption,idx) =>
                                    <div className="p-3" key={idx}>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="card p-2 shadow-lg">
                                                    <input type="radio" className="form-check-input m-lg-3" />
                                                </div>
                                            </div>
                                            <div className="card cardsize shadow-lg">
                                                <div className="card-body lead ml-2">
                                                    {answerOption}
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                            }

                        </div>


                        <div className=" shadow-lg border-top fixed-bottom navbar navbar-expand-md p-4 border-bottom  bg-light shadow-sm">
                            <div>
                                <button disabled={currentquestion === 0} className="btn btn-secondary margin_right btn-lg" onClick={prevQuestion}><span className="fa fa-arrow-left"></span> Previous</button>

                                <button disabled={currentquestion === questions.length-1} className="btn btn-success btn-lg margin_lefter" onClick={nextQuestion}>Next <span className="fa fa-arrow-right"></span> </button>

                            </div>

                            <div>
                                <input type="submit" value="Submit" className="btn btn-lg btn-outline-dark margin_submit"/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </Fragment>
    )
};

export default Test;