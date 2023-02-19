import type {UserGraph} from './types/UserGraph';

export type TopLanguage = {
  name: string;
  color: string;
  size: number;
};

export const getTopLanguages = (githubUser: UserGraph): TopLanguage[] => {
  const collaboratedRepos = githubUser.collaboratedRepos.edges.map((el) => {
    if (!el) {
      return null;
    }

    const node = el.node;

    return {
      languageNodes: node.languages,
    };
  });

  const myRepos = githubUser.myRepos.edges.map((el) => {
    if (!el) {
      return null;
    }

    const node = el.node;

    return {
      languageNodes: node.languages,
    };
  });

  const langNodesMap = new Map();

  collaboratedRepos.forEach((item) => {
    item?.languageNodes.edges.forEach((edge) => {
      const entry = langNodesMap.get(edge.node.name);
      if (!entry) {
        langNodesMap.set(edge.node.name, {
          name: edge.node.name,
          // NOTE: contribRepo languages are counted as quarter as they are not the owner.
          size: Math.round(edge.size / 4),
          color: edge.node.color,
        });
      } else {
        entry.size += Math.round(edge.size / 4);
      }
    });
  });

  myRepos.forEach((item) => {
    item?.languageNodes.edges.forEach((edge) => {
      const entry = langNodesMap.get(edge.node.name);
      if (!entry) {
        langNodesMap.set(edge.node.name, {
          name: edge.node.name,
          size: edge.size,
          color: edge.node.color,
        });
      } else {
        entry.size += edge.size;
      }
    });
  });

  const uniqueLangNodes = [...langNodesMap.values()].sort((a, b) =>
    b.size > a.size ? 1 : -1,
  );

  return uniqueLangNodes;
};
