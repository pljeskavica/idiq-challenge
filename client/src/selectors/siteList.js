import { createSelector } from 'reselect';

const siteList = createSelector(
  ({ siteList = {} }) => siteList,
  siteList => siteList,
);
export const loading = createSelector(siteList, ({ loading }) => loading);
export const sites = createSelector(siteList, ({ sites }) => sites);

