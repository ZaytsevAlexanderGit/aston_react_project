import type { Author, PostProps } from '../../entities/post/types/types.ts';
import type { AlbumsProps, TodosProps } from './types.ts';

export const defaultAuthorsData: Author[] = [
  { id: '00001', name: 'Elena Vasquez' },
  { id: '00002', name: 'Oliver Chen' },
  { id: '00003', name: 'Aisha Patel' },
  { id: '00004', name: "James O'Sullivan" },
  { id: '00005', name: 'Sophie Dubois' },
  { id: '00006', name: 'Kenji Tanaka' },
];

export const defaultPostsData: PostProps[] = [
  {
    number: 1,
    id: 'Post_1',
    authorId: '00001',
    title: 'His mother had always taught him',
    postBody:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00002',
        date: new Date('2025-01-01T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00003',
        date: new Date('2025-02-01T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00004',
        date: new Date('2025-03-01T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00005',
        date: new Date('2025-04-01T10:30:00'),
      },
    ],
  },
  {
    number: 2,
    id: 'Post_2',
    authorId: '00002',
    title: 'He was an expert but not in a discipline',
    postBody:
      'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00001',
        date: new Date('2025-01-02T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00003',
        date: new Date('2025-02-02T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00005',
        date: new Date('2025-03-02T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00006',
        date: new Date('2025-04-02T10:30:00'),
      },
    ],
  },
  {
    number: 3,
    id: 'Post_3',
    authorId: '00003',
    title: 'Dave watched as the forest burned up on the hill.',
    postBody:
      "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00001',
        date: new Date('2025-01-03T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00002',
        date: new Date('2025-02-03T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00004',
        date: new Date('2025-03-03T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00006',
        date: new Date('2025-04-03T10:30:00'),
      },
    ],
  },
  {
    number: 4,
    id: 'Post_4',
    authorId: '00004',
    title: 'All he wanted was a candy bar.',
    postBody:
      "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00001',
        date: new Date('2025-01-04T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00002',
        date: new Date('2025-02-04T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00005',
        date: new Date('2025-03-04T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00003',
        date: new Date('2025-04-04T10:30:00'),
      },
    ],
  },
  {
    number: 5,
    id: 'Post_5',
    authorId: '00001',
    title: 'Hopes and dreams were dashed that day.',
    postBody:
      "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00004',
        date: new Date('2025-01-05T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00003',
        date: new Date('2025-02-05T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00006',
        date: new Date('2025-03-05T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00005',
        date: new Date('2025-04-05T10:30:00'),
      },
    ],
  },
  {
    number: 6,
    id: 'Post_6',
    authorId: '00002',
    title: "Dave wasn't exactly sure how he had ended up",
    postBody:
      "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    comments: [
      {
        id: 'Comment_1',
        commentText: 'Cool',
        authorId: '00001',
        date: new Date('2025-01-06T10:30:00'),
      },
      {
        id: 'Comment_2',
        commentText: 'Nice information',
        authorId: '00002',
        date: new Date('2025-02-06T10:30:00'),
      },
      {
        id: 'Comment_3',
        commentText: 'Why should i read it?',
        authorId: '00003',
        date: new Date('2025-03-06T10:30:00'),
      },
      {
        id: 'Comment_4',
        commentText: 'Hmmm...',
        authorId: '00004',
        date: new Date('2025-04-06T10:30:00'),
      },
    ],
  },
];

export const defaultTodosData: TodosProps[] = [
  {
    id: 'Todo_1',
    authorId: '00001',
    todoTitle: 'Выучть JS.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },
  {
    id: 'Todo_2',
    authorId: '00002',
    todoTitle: 'Выучть JS быстро.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },

  {
    id: 'Todo_3',
    authorId: '00003',
    todoTitle: 'Выучть JS быыстро.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },

  {
    id: 'Todo_4',
    authorId: '00004',
    todoTitle: 'Выучть JS быыыстро.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },
  {
    id: 'Todo_5',
    authorId: '00005',
    todoTitle: 'Выучть JS быыыыстро.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },
  {
    id: 'Todo_6',
    authorId: '00006',
    todoTitle: 'Выучть JS быыыыыстро.',
    todoBody: 'Необходимо повторить JS перед экзаменом.',
    isComplete: false,
  },
  {
    id: 'Todo_7',
    authorId: '00001',
    todoTitle: 'Сделать ДЗ.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: true,
  },
  {
    id: 'Todo_8',
    authorId: '00002',
    todoTitle: 'Сделать ДЗ быстро.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: false,
  },

  {
    id: 'Todo_9',
    authorId: '00003',
    todoTitle: 'Сделать ДЗ быыстро.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: true,
  },

  {
    id: 'Todo_10',
    authorId: '00004',
    todoTitle: 'Сделать ДЗ быыыстро.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: false,
  },
  {
    id: 'Todo_11',
    authorId: '00005',
    todoTitle: 'Сделать ДЗ быыыыстро.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: false,
  },
  {
    id: 'Todo_12',
    authorId: '00006',
    todoTitle: 'Сделать ДЗ быыыыыстро.',
    todoBody: 'Необходимо сделать ДЗ №3 до дедлайна.',
    isComplete: true,
  },
];

export const defaultAlbumsData: AlbumsProps[] = [
  {
    albumId: '0001',
    albumTitle: 'Travel',
    albumCover:
      'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww',
    albumItems: [
      {
        id: '00001',
        name: 'Start Flight',
        url: 'https://images.unsplash.com/photo-1725202058834-405b9a6a95c4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '00002',
        name: 'End Flight',
        url: 'https://images.unsplash.com/photo-1659653156777-ada9aa338a79?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '00003',
        name: 'Hotel',
        url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },

      {
        id: '00004',
        name: 'Beach!!!',
        url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2h8ZW58MHx8MHx8fDA%3D',
      },
    ],
  },
  {
    albumId: '0002',
    albumTitle: 'Family',
    albumCover:
      'https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D',
    albumItems: [
      {
        id: '00001',
        name: 'Grandfather',
        url: 'https://images.unsplash.com/photo-1472066719480-ecc7314ed065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhbmRmYXRoZXJ8ZW58MHx8MHx8fDA%3D',
      },
      {
        id: '00002',
        name: 'Grandmother',
        url: 'https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhbmRtb3RoZXJ8ZW58MHx8MHx8fDA%3D',
      },
      {
        id: '00003',
        name: 'Father',
        url: 'https://plus.unsplash.com/premium_photo-1661520725228-245d8b291b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwNDAlMjB5ZWFyc3xlbnwwfHwwfHx8MA%3D%3D',
      },

      {
        id: '00004',
        name: 'Mother',
        url: 'https://plus.unsplash.com/premium_photo-1661424100532-a5d5b3210f47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjA0MCUyMHllYXJzfGVufDB8fDB8fHww',
      },
    ],
  },
];
