export type Projects_Prop = {
  id: number;
  title: string;
  context: string;
  disclaimer?: string;
  hero: string; // Add the 'hero' property
  linksIcon: JSX.Element[]; // Assuming linksIcon is an array of React icons
  link: string[];
  techs: JSX.Element[]; // Assuming techs is an array of React icons
};
export type Project_Map_Prop = {
  item: Projects_Prop;
  index: number;
};
