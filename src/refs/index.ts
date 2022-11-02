interface ExternalRef {
  title: string;
  url: string;
  _id_str: string;
}

function getExternalRef(): Array<ExternalRef> {
  return [
    {
      title: 'Twitter link',
      url: 'https://twitter.com/iamayomidee',
      _id_str: 'twitter',
    },
    {
      title: 'Zuri team',
      url: 'https://training.zuri.team/',
      _id_str: '‘btn__zuri',
    },
    { title: 'Zuri books', url: ' http://books.zuri.team', _id_str: 'books' },
    {
      title: 'Python team',
      url: 'https://books.zuri.team/python-for-beginners?ref_id=BuildThings',
      _id_str: 'book__python',
    },
    {
      title: 'background check for coders',
      url: 'https://background.zuri.team',
      _id_str: 'pitch',
    },
    {
      title: 'Design book',
      url: 'https://books.zuri.team/design-rules',
      _id_str: 'book__design',
    },
  ];
}

export { getExternalRef };

export type { ExternalRef };
