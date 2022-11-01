import { getExternalRef } from '../../refs';
import { mapObjectToId } from '../util';
import externalRefInfoStyle from './externalRefInfo.module.css';

const externalRefs = getExternalRef().map((ref) => mapObjectToId(ref), true);

const ExternalRefInfo = () => (
  <div className={externalRefInfoStyle.externalRefInfo}>
    <ul className={externalRefInfoStyle.externalRefInfo_list}>
      {externalRefs.map((ref) => (
        <li key={ref.id} className={externalRefInfoStyle.externalRefInfo_item}>
          <a href={ref.url}>{ref.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export { ExternalRefInfo };
