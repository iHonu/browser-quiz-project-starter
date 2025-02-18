import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { PROGRESS_BAR_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, questionCounter, imageUrl) => {
  const element = document.createElement('div'); 

  //check if the current question has an image

  let imageElement = '';
  if (quizData.questions[quizData.currentQuestionIndex].image) {
    imageElement = `<img class="question-image" src="${quizData.questions[quizData.currentQuestionIndex].image}" width="200">`;
  }

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  
  
    <div class="main-container">
      <div class="question-image-container">

        <h1 class="question">${question}</h1>
        ${imageElement}
     </div>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div class="happy-mario"></div>
    </div>
    <button class="next-button" id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <div class="sad-mario"></div>
  `;


  return element;
};
