import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA'

export function getData () {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}
