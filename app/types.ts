export type Experience = {
  id: string;
  company: string;
  position: string;
};

export type IArticles = {
  title: string;
  url: string;
  id: string;
};

export type Certificates = {
  blockchainId: string;
  title: string;
};

export type CombinedJson = {
  myname: string;
  githubProfile: string;
  twitterProfile: string;
  displayExperience: Experience[];
  displayArticles: IArticles[];
  displayCertificates: Certificates[];
};
