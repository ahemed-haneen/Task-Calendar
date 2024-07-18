const formatDate = (date: number) => {
  const J = date % 10,
    K = date % 100;

  if (J === 1 && K !== 11) return `${date}st`;
  else if (J === 2 && K !== 12) return `${date}nd`;
  else if (J === 3 && K !== 13) return `${date}rd`;
  else return `${date}th`;
};

export default formatDate;
