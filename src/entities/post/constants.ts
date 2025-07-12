import type { Author, PostProps } from './types/types.ts';

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
