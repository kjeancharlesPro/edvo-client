import { PageHeaderItem } from '../models/PageHeaderItem';

const baseUrl =
  'https://edvo.fr/wp-content/uploads/2018/09/MAISON-RELAIS-Facade-1024x644.jpg';

export const ourActions = [
  new PageHeaderItem(1, 'hotel-social', 'Nos actions', 'Hôtel Social', baseUrl),
  new PageHeaderItem(
    2,
    'maison-relais',
    'Nos actions',
    'Maison Relais',
    baseUrl
  ),
  new PageHeaderItem(
    3,
    'epicerie-sociales',
    'Nos actions',
    'Épicerie Sociales',
    baseUrl
  ),
  new PageHeaderItem(
    4,
    'appartements-therapeutiques',
    'Nos actions',
    'Appartements Thérapeutiques',
    baseUrl
  ),
  new PageHeaderItem(
    5,
    'groupe-entraide-famille',
    'Nos actions',
    'Groupe d’entraide famille',
    baseUrl
  ),
];
