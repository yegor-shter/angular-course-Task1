
export interface Response {
  results: {
    name: {
      title: string,
      first: string,
      last: string
    };
    email: string;
    phone: string;
    dob: Date;
    picture: {
      large: string,
      medium: string,
      thumbnail: string
    };
  }[];
}



export interface User {
  name: string;
  email: string;
  phone: string;
  picture: string;
  dob: Date;
}
