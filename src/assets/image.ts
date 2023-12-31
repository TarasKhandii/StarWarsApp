import {ImageRequireSource} from 'react-native';
import imagePlaceholder from '../assets/image/placeholder.jpg';

const characters: Record<string, ImageRequireSource> = {
  ['1']: require('./image/characters/1.jpg'),
  ['2']: require('./image/characters/2.jpg'),
  ['3']: require('./image/characters/3.jpg'),
  ['4']: require('./image/characters/4.jpg'),
  ['5']: require('./image/characters/5.jpg'),
  ['6']: require('./image/characters/6.jpg'),
  ['7']: require('./image/characters/7.jpg'),
  ['8']: require('./image/characters/8.jpg'),
  ['9']: require('./image/characters/9.jpg'),
  ['10']: require('./image/characters/10.jpg'),
  ['11']: require('./image/characters/11.jpg'),
  ['12']: require('./image/characters/12.jpg'),
  ['13']: require('./image/characters/13.jpg'),
  ['14']: require('./image/characters/14.jpg'),
  ['15']: require('./image/characters/15.jpg'),
  ['16']: require('./image/characters/16.jpg'),
  ['18']: require('./image/characters/18.jpg'),
  ['19']: require('./image/characters/19.jpg'),
  ['20']: require('./image/characters/20.jpg'),
  ['21']: require('./image/characters/21.jpg'),
  ['22']: require('./image/characters/22.jpg'),
  ['23']: require('./image/characters/23.jpg'),
  ['24']: require('./image/characters/24.jpg'),
  ['25']: require('./image/characters/25.jpg'),
  ['26']: require('./image/characters/26.jpg'),
  ['27']: require('./image/characters/27.jpg'),
  ['28']: require('./image/characters/28.jpg'),
  ['29']: require('./image/characters/29.jpg'),
  ['30']: require('./image/characters/30.jpg'),
  ['31']: require('./image/characters/31.jpg'),
  ['32']: require('./image/characters/32.jpg'),
  ['33']: require('./image/characters/33.jpg'),
  ['34']: require('./image/characters/34.jpg'),
  ['35']: require('./image/characters/35.jpg'),
  ['36']: require('./image/characters/36.jpg'),
  ['37']: require('./image/characters/37.jpg'),
  ['38']: require('./image/characters/38.jpg'),
  ['39']: require('./image/characters/39.jpg'),
  ['40']: require('./image/characters/40.jpg'),
  ['41']: require('./image/characters/41.jpg'),
  ['42']: require('./image/characters/42.jpg'),
  ['43']: require('./image/characters/43.jpg'),
  ['44']: require('./image/characters/44.jpg'),
  ['45']: require('./image/characters/45.jpg'),
  ['46']: require('./image/characters/46.jpg'),
  ['47']: require('./image/characters/47.jpg'),
  ['48']: require('./image/characters/48.jpg'),
  ['49']: require('./image/characters/49.jpg'),
  ['50']: require('./image/characters/50.jpg'),
  ['51']: require('./image/characters/51.jpg'),
  ['52']: require('./image/characters/52.jpg'),
  ['53']: require('./image/characters/53.jpg'),
  ['54']: require('./image/characters/54.jpg'),
  ['55']: require('./image/characters/55.jpg'),
  ['56']: require('./image/characters/56.jpg'),
  ['57']: require('./image/characters/57.jpg'),
  ['58']: require('./image/characters/58.jpg'),
  ['59']: require('./image/characters/59.jpg'),
  ['60']: require('./image/characters/60.jpg'),
  ['61']: require('./image/characters/61.jpg'),
  ['62']: require('./image/characters/62.jpg'),
  ['63']: require('./image/characters/63.jpg'),
  ['64']: require('./image/characters/64.jpg'),
  ['65']: require('./image/characters/65.jpg'),
  ['66']: require('./image/characters/66.jpg'),
  ['67']: require('./image/characters/67.jpg'),
  ['68']: require('./image/characters/68.jpg'),
  ['69']: require('./image/characters/69.jpg'),
  ['70']: require('./image/characters/70.jpg'),
  ['71']: require('./image/characters/71.jpg'),
  ['72']: require('./image/characters/72.jpg'),
  ['73']: require('./image/characters/73.jpg'),
  ['74']: require('./image/characters/74.jpg'),
  ['75']: require('./image/characters/75.jpg'),
  ['76']: require('./image/characters/76.jpg'),
  ['77']: require('./image/characters/77.jpg'),
  ['78']: require('./image/characters/78.jpg'),
  ['79']: require('./image/characters/79.jpg'),
  ['80']: require('./image/characters/80.jpg'),
  ['81']: require('./image/characters/81.jpg'),
  ['82']: require('./image/characters/82.jpg'),
  ['83']: require('./image/characters/83.jpg'),
  ['84']: require('./image/characters/84.jpg'),
  ['85']: require('./image/characters/85.jpg'),
  ['86']: require('./image/characters/86.jpg'),
  ['87']: require('./image/characters/87.jpg'),
  ['88']: require('./image/characters/88.jpg'),
};
const films: Record<string, ImageRequireSource> = {
  ['1']: require('./image/films/1.jpg'),
  ['2']: require('./image/films/2.jpg'),
  ['3']: require('./image/films/3.jpg'),
  ['4']: require('./image/films/4.jpg'),
  ['5']: require('./image/films/5.jpg'),
  ['6']: require('./image/films/6.jpg'),
  ['7']: require('./image/films/7.jpg'),
};
const starships: Record<string, ImageRequireSource> = {
  ['5']: require('./image/starships/5.jpg'),
  ['9']: require('./image/starships/9.jpg'),
  ['10']: require('./image/starships/10.jpg'),
  ['11']: require('./image/starships/11.jpg'),
  ['12']: require('./image/starships/12.jpg'),
  ['13']: require('./image/starships/13.jpg'),
  ['15']: require('./image/starships/15.jpg'),
  ['21']: require('./image/starships/21.jpg'),
  ['22']: require('./image/starships/22.jpg'),
  ['23']: require('./image/starships/23.jpg'),
  ['27']: require('./image/starships/27.jpg'),
  ['28']: require('./image/starships/28.jpg'),
  ['29']: require('./image/starships/29.jpg'),
  ['31']: require('./image/starships/31.jpg'),
  ['39']: require('./image/starships/39.jpg'),
  ['40']: require('./image/starships/40.jpg'),
  ['41']: require('./image/starships/41.jpg'),
  ['43']: require('./image/starships/43.jpg'),
  ['47']: require('./image/starships/47.jpg'),
  ['48']: require('./image/starships/48.jpg'),
};

const vehicles: Record<string, ImageRequireSource> = {
  ['4']: require('./image/vehicles/4.jpg'),
  ['6']: require('./image/vehicles/6.jpg'),
  ['7']: require('./image/vehicles/7.jpg'),
  ['8']: require('./image/vehicles/8.jpg'),
  ['14']: require('./image/vehicles/14.jpg'),
  ['16']: require('./image/vehicles/16.jpg'),
  ['18']: require('./image/vehicles/18.jpg'),
  ['19']: require('./image/vehicles/19.jpg'),
  ['20']: require('./image/vehicles/20.jpg'),
  ['24']: require('./image/vehicles/24.jpg'),
  ['25']: require('./image/vehicles/25.jpg'),
  ['26']: require('./image/vehicles/26.jpg'),
  ['30']: require('./image/vehicles/30.jpg'),
  ['33']: require('./image/vehicles/33.jpg'),
  ['34']: require('./image/vehicles/34.jpg'),
  ['35']: require('./image/vehicles/35.jpg'),
  ['36']: require('./image/vehicles/36.jpg'),
  ['37']: require('./image/vehicles/37.jpg'),
  ['38']: require('./image/vehicles/38.jpg'),
  ['42']: require('./image/vehicles/42.jpg'),
};

export const IMAGE = {
  characters,
  films,
  starships,
  vehicles,
  imagePlaceholder,
};
