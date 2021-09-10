import { useState } from 'react';

export default () => {
  const [partOneValue, setPartOneValue] = useState();
  const [partTwoValue, setPartTwoValue] = useState();
  const emailSubject = `"vesta coding challenge: <Your Name>"`;
  const contactEmail = 'eng-interviews@vestahealthcare.com';

  return (
    <div>
      <div className="page">
        <div className="container">
          <h1 className="h1">Vesta Coding Challenge</h1>
          <p>
            Below is your challenge!
          </p>
          <p>
            Please write your code as if it were going into a production application. Once you're finished, please email your code to <a href="">{contactEmail}</a> with the subject {emailSubject}
          </p>
          <p>
            There are inputs at the bottom to help you test your code before submitting.
          </p>
          <p>
            Here are some online code editors that you may find useful.
            &nbsp;<a href="https://code.sololearn.com/cVRUy2BwauK8#java">Java</a>
            &nbsp;&nbsp;<a href="https://jsbin.com/?html,output">Javascript</a>
            &nbsp;&nbsp;<a href="https://www.katacoda.com/courses/python/playground">Python</a>
          </p>
          <h2 className="h1">Description:</h2>
          <p>
            An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do.
          </p>
          <p>
            Below is a list of what each opcode means:
          </p>
          <div className="opcodes">
            <ul>
              <li>
                <p>
                  99 - The program is finished and should immediately halt
                </p>
              </li>
              <li>
                <p>
                  1 - Adds together numbers read from two positions and stores the result in a third position.
                </p>
                <p>
                  The three integers immediately after the opcode in the array tell you these three positions.
                </p>
                <p>
                  The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored.
                </p>
                <p>
                  For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum.
                  </p>
              </li>
              <li>
                <p>
                  2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them.
                </p>
              </li>
            </ul>
          </div>
          <p>
            Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
          </p>
          <h2 className="h1">Part I:</h2>
          <p>
            Run your computer on the Intcode program below and check if the result is the same.  The result should be stored at index 0.
          </p>
          <div className="code-block">
            <code>
              [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,
              1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,
              2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,
              99,2,14,0,0]
            </code>
          </div>
          <p>Result expected: <strong>3895705</strong></p>
          <h2 className="h1">Part II:</h2>
          <p>
            Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720?
            Both values will be between 0 and 99.
          </p>
          <p>100 * input1 + input2:</p>
          <p>Result expected: <strong>6417</strong></p>
      </div>

      <style jsx>{`
        .correct {
          color: #71a310;
        }
        .incorrect {
          color: #e42e00;
        }
        .page {
          display: flex;
          justify-content: center;
          background-color: #fbfbfb;
          width: 100%;
          height: 100%;
          font-family: 'Roboto', sans-serif;
        }
        .container {
          background-color: #ffffff;
          display: flex;
          width: 60%;
          flex-direction: column;
          padding: 50px;
        }
        .h1 {
          color: #164c30
        }
        .h2 {
          color: #053075
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .code-block {
          width: 90%;
          padding: 5px;
          background-color: #eeeeee;
        }
        .number-input {
          width: 200px;
        }
        .opcodes {
          padding-left: 40px;
          padding-right: 40px;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
