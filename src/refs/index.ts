interface ExternalRef {
  title: string;
  url: string;
}

function getExternalRef(): Array<ExternalRef> {
  return [
    { title: 'Twitter link', url: '' },
    { title: 'Zuri team', url: '' },
    { title: 'Zuri club', url: '' },
    { title: 'Zuri books', url: '' },
    { title: 'Python team', url: '' },
    { title: 'background check for coders', url: '' },
    { title: 'Design book', url: '' },
  ];
}

export { getExternalRef };
