import groupBy from "lodash.groupby"


export default function groupByName (obj) {
  return groupBy(obj, x=>x.name);
}