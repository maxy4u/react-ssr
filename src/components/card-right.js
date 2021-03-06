import React, {memo} from 'react';
import Title from './title';

const CardRight = memo(({ app }) => (
  <div className="col-right">
    <div className="app-meta">
      <Title name={app.name} publisher={app.publisher} />
      <span className="app-lic">{app.price}</span>
    </div>
    <div className="app-intro" dangerouslySetInnerHTML={{ __html: app.desc }} />
    <hr />
    <div className="app-link">
      <a className="btn" href={app.link} target="_blank" rel="noreferrer noopener">Get App</a>
    </div>
  </div>
));


export default CardRight;