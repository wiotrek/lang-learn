import { WordModel } from 'src/app/exercises/ex02/_models/word.model';

export function ShuffleWordsHelper(): WordModel[] {
  return [
    {
      id: 1,
      name: '',
      displayName: '',
      words: [
        'Hello', ',', 'I am', 'Jonny Knoxville'
      ]
    },
    {
      id: 2,
      name: '',
      displayName: '',
      words: [
        'Do', 'You', 'like', 'dogs', '?'
      ]
    },
    {
      id: 3,
      name: '',
      displayName: '',
      words: [
        'Give', 'me', '5', 'minutes'
      ]
    },
    {
      id: 4,
      name: '',
      displayName: '',
      words: [
        'What', 'is', 'wrong', 'with', 'You'
      ]
    },
    {
      id: 5,
      name: '',
      displayName: '',
      words: [
        'You', 'know', 'my methods', ',', 'Watson'
      ]
    }
  ];
}
