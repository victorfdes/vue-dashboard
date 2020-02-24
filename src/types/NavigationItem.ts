import { uuid } from 'uuidv4';

export default class NavigationItem {
  id = '';

  title = '';

  icon = '';

  children = [];

  route = '';

  href = '';

  constructor(params: {
    title: string;
    icon?: string;
    children?: Array<NavigationItem>;
    href?: string;
    route?: string;
  } = {
    title: '',
    icon: '',
    href: '',
    route: '',
    children: [],
  }) {
    this.id = uuid();
    this.title = params.title ? params.title : '';
    this.icon = params.icon ? params.icon : '';
    this.route = params.route ? params.route : '';
    this.href = params.href ? params.href : '';
    this.children = params.children ? params.children : [];
  }
}
