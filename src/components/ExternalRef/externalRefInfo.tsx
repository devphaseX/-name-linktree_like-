import { ExternalRef, getExternalRef } from '../../refs';
import { mapObjectToId } from '../util';
import externalRefInfoStyle from './externalRefInfo.module.css';
import { randomNaiveId } from '../util/index';

const externalRefs = getExternalRef().map((ref) => mapObjectToId(ref), true);

const slackAsset: ExternalRef & {
  id: string;
} = {
  _id_str: 'slack',
  id: randomNaiveId(),
  title: 'slack',
  url: 'buildThings',
};

const ExternalRefInfo = () => (
  <div className={externalRefInfoStyle.externalRefInfo}>
    <ul className={externalRefInfoStyle.externalRefInfo_list}>
      {externalRefs.map((ref) => (
        <RefInfo asset={ref} />
      ))}

      <RefInfo asset={slackAsset} disable />
    </ul>
  </div>
);

const RefInfo: React.FC<{
  asset: typeof externalRefs[0];
  disable?: boolean;
}> = ({ asset, disable }) => {
  const { _id_str, id, title, url } = asset;
  return (
    <li
      id={_id_str}
      key={id}
      className={externalRefInfoStyle.externalRefInfo_item}
      style={{ display: disable ? 'none' : void 0 }}
    >
      <a href={url}>{title}</a>
    </li>
  );
};

export { ExternalRefInfo };
