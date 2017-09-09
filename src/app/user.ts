
export interface Response {
  results: {
    name: {
      title: string,
      first: string,
    },
  }[];
}

export interface User {
  name: string;
  email: string;
  phone: string;
  picture: string;
  dop: Date;
}
