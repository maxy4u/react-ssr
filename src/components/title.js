import React, { memo } from 'react';

const Title = memo(({ name, publisher }) => {
  if (publisher) {
    return (
      <h3>{name}<span className="connector">by </span><span className="publisher">{publisher}</span></h3>
    )
  }

  return (<h3>{name}</h3>)
});

export default Title;