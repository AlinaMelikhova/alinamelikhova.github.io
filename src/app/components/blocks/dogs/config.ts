import { StaticImageData } from 'next/image';
import afghanHound from '../../../img/dogs/afghanHound.png';
import australianShepherd from '../../../img/dogs/australianShepherd.png';
import germanShepherd from '../../../img/dogs/germanShepherd.png';
import goldenRetriever from '../../../img/dogs/goldenRetriever.png';
import pomeranian from '../../../img/dogs/pomeranian.png';
import shibaInu from '../../../img/dogs/shibaInu.png';

export interface Dog {
  name: string;
  bgColor: string;
  img: StaticImageData;
  path: string;
}

export const DOGS: Dog[] = [
  {
    name: 'Afghan Hound',
    bgColor: '#aaf0f9',
    img: afghanHound,
    path: 'M193.208,220.93l39.811,68.956c46.424-26.861,77.66-77.054,77.66-134.546h-79.612   C231.066,183.367,215.84,207.836,193.208,220.93z',
  },
  {
    name: 'Australian Shepherd',
    bgColor: '#FBED69',
    img: australianShepherd,
    path: 'M155.339,79.614c13.797,0,26.728,3.691,37.869,10.136l39.811-68.956   C210.168,7.573,183.638,0.001,155.338,0.001c-28.299,0-54.828,7.571-77.679,20.792l39.812,68.956   C128.611,83.305,141.544,79.614,155.339,79.614z',
  },
  {
    name: 'German Shepherd',
    bgColor: '#ff48ac',
    img: germanShepherd,
    path: 'M233.019,20.794L193.208,89.75c22.631,13.095,37.858,37.563,37.858,65.591h79.612   C310.679,97.848,279.442,47.655,233.019,20.794z',
  },
  {
    name: 'Golden Retriever',
    bgColor: '#ff992d',
    img: goldenRetriever,
    path: 'M117.471,89.75L77.659,20.794C31.235,47.655,0,97.848,0,155.34h79.612   C79.612,127.313,94.84,102.844,117.471,89.75z',
  },
  {
    name: 'Pomeranian',
    bgColor: '#B397F7',
    img: pomeranian,
    path: 'M79.612,155.34H0c0,57.492,31.235,107.685,77.658,134.545l39.812-68.956   C94.839,207.835,79.612,183.367,79.612,155.34z',
  },
  {
    name: 'Shiba Inu',
    bgColor: '#82EEB8',
    img: shibaInu,
    path: 'M155.339,231.066c-13.796,0-26.729-3.691-37.869-10.137l-39.812,68.956   c22.852,13.222,49.381,20.793,77.68,20.793c28.3,0,54.831-7.571,77.68-20.793l-39.811-68.956   C182.068,227.376,169.136,231.066,155.339,231.066z',
  },
];
