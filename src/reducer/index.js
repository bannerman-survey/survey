export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SCORE_UPDATE':
      return payload;
    case 'SCORE_CREATE':
      return payload;
    case 'SCORE_REMOVE':
      return null;
    default:
      return state;
  }
};
